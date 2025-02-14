import Swiper from 'swiper/bundle';
import 'swiper/css';                     
import 'swiper/css/navigation';          
import 'swiper/css/effect-coverflow';    
import ScrollReveal from 'scrollreveal';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(process.env.EMAILJS_PUBLIC_KEY || "_1x8c2wIGn-ACFKW2");

/*=============== MENU FUNCTIONALITY ===============*/
const initMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!navMenu || !navToggle || !navClose) {
        console.warn('Menu elements not found');
        return;
    }

    // Show menu
    navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));

    // Hide menu
    navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));

    // Hide menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
    });
};

/*=============== HEADER SHADOW ===============*/
const initHeaderShadow = () => {
    const header = document.getElementById('header');
    if (!header) return;

    const toggleHeaderShadow = () => {
        header.classList.toggle('shadow-header', window.scrollY >= 50);
    };

    window.addEventListener('scroll', toggleHeaderShadow);
};

/*=============== SWIPER POPULAR ===============*/
const initSwiper = () => {
    try {
        const popularSwiper = new Swiper('.popular__swiper', {
            loop: false,  // Changed from true to false
            grabCursor: true,
            slidesPerView: "auto",  // Changed to auto
            centeredSlides: false,  // Changed to false
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                968: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    } catch (error) {
        console.error('Error initializing Swiper:', error);
    }
};

/*=============== SCROLL UP BUTTON ===============*/
const initScrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (!scrollUp) return;

    const toggleScrollUp = () => {
        scrollUp.classList.toggle('show-scroll', window.scrollY >= 350);
    };

    window.addEventListener('scroll', toggleScrollUp);
};

/*=============== ACTIVE LINK HIGHLIGHTING ===============*/
const initActiveLinks = () => {
    const sections = document.querySelectorAll('section[id]');
    
    const toggleActiveLink = () => {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 58;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active-link');
            } else {
                navLink?.classList.remove('active-link');
            }
        });
    };

    window.addEventListener('scroll', toggleActiveLink);
};

/*=============== SCROLL REVEAL ANIMATION ===============*/
const initScrollReveal = () => {
    try {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 300,
            reset: false
        });

        // Home section animations
        sr.reveal('.home__data, .popular__container, .footer');
        sr.reveal('.home__board', { 
            delay: 700, 
            distance: '100px', 
            origin: 'right' 
        });
        sr.reveal('.home__chapati', { 
            delay: 1400, 
            distance: '100px', 
            origin: 'bottom', 
            rotate: { z: -90 } 
        });
        sr.reveal('.home__ingredient', { 
            delay: 2000, 
            interval: 100 
        });

        // Other sections animations
        sr.reveal('.about__data, .recipe__list, .contact__data', { 
            origin: 'right' 
        });
        sr.reveal('.about__img, .recipe__img, .contact__image', { 
            origin: 'left' 
        });
        sr.reveal('.products__card', { 
            interval: 100 
        });
    } catch (error) {
        console.error('Error initializing ScrollReveal:', error);
    }
};

/*=============== EMAIL FUNCTIONALITY ===============*/
const initEmailFeatures = () => {
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('form-message');
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (!emailInput || !formMessage || !newsletterForm) return;

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    emailInput.addEventListener('input', function() {
        const email = this.value.trim();
        
        formMessage.style.display = email ? 'block' : 'none';
        if (email) {
            const isValid = validateEmail(email);
            formMessage.style.color = isValid ? 'green' : 'red';
            formMessage.textContent = isValid ? 'Valid email address' : 'Please enter a valid email address';
        }
    });

    newsletterForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (!validateEmail(email)) {
            formMessage.textContent = 'Please enter a valid email address';
            formMessage.style.color = 'red';
            formMessage.style.display = 'block';
            emailInput.focus();
            return;
        }

        try {
            await Promise.all([
                emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID_1, { user_email: email }),
                emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID_2, { user_email: email })
            ]);
            
            formMessage.textContent = 'Thank you for subscribing!';
            formMessage.style.color = 'green';
            formMessage.style.display = 'block';
            this.reset();
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 2000);
        } catch (error) {
            console.error('Subscription failed:', error);
            formMessage.textContent = 'Subscription failed. Please try again.';
            formMessage.style.color = 'red';
            formMessage.style.display = 'block';
        }
    });
};

/*=============== PHONE FEATURE ===============*/
const initPhoneFeature = () => {
    const phoneButtons = document.querySelectorAll('.products__button');
    const phoneNumber = '+91-6360170572';
    
    phoneButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (isMobile && confirm(`Call Avni Home Food?\n${phoneNumber}`)) {
                window.location.href = `tel:${phoneNumber}`;
            } else if (!isMobile) {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};

/*=============== LAZY LOADING IMAGES ===============*/
const initLazyLoading = () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => lazyImageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
};

/*=============== INITIALIZE ALL FEATURES ===============*/
const initializeApp = () => {
    try {
        initMenu();
        initHeaderShadow();
        initSwiper();
        initScrollUp();
        initActiveLinks();
        initScrollReveal();
        initEmailFeatures();
        initPhoneFeature();
        initLazyLoading();
    } catch (error) {
        console.error('Error during initialization:', error);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);