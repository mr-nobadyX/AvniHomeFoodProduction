import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
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

    // Show menu
    if (navToggle) {
        navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
    }

    // Hide menu
    if (navClose) {
        navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
    }

    // Hide menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
    });
};

/*=============== HEADER SHADOW ===============*/
const initHeaderShadow = () => {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        window.scrollY >= 50
            ? header.classList.add('shadow-header')
            : header.classList.remove('shadow-header');
    });
};

/*=============== SWIPER POPULAR ===============*/
const initSwiper = () => {
    const swiperSlides = document.querySelectorAll('.popular__swiper .swiper-slide');
    const enableLoop = swiperSlides.length > 1;

    const swiperPopular = new Swiper('.popular__swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: enableLoop,
        spaceBetween: 32,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
    });

    if (!enableLoop) {
        console.warn("Swiper Loop Warning: Not enough slides for loop mode. Loop has been disabled.");
    }
};

/*=============== SCROLL UP BUTTON ===============*/
const initScrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.addEventListener('scroll', () => {
        window.scrollY >= 350
            ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll');
    });
};

/*=============== ACTIVE LINK HIGHLIGHTING ===============*/
const initActiveLinks = () => {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
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
    });
};

/*=============== SCROLL REVEAL ANIMATION ===============*/
const initScrollReveal = () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 300,
    });

    // Home section animations
    sr.reveal('.home__data, .popular__container, .footer');
    sr.reveal('.home__board', { delay: 700, distance: '100px', origin: 'right' });
    sr.reveal('.home__chapati', { 
        delay: 1400, 
        distance: '100px', 
        origin: 'bottom', 
        rotate: { z: -90 } 
    });
    sr.reveal('.home__ingredient', { delay: 2000, interval: 100 });

    // Other sections animations
    sr.reveal('.about__data, .recipe__list, .contact__data', { origin: 'right' });
    sr.reveal('.about__img, .recipe__img, .contact__image', { origin: 'left' });
    sr.reveal('.products__card', { interval: 100 });
};

/*=============== EMAIL FUNCTIONALITY ===============*/
const initEmailFeatures = () => {
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('form-message');
    const newsletterForm = document.getElementById('newsletter-form');
    
    // Email validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Real-time validation
    emailInput?.addEventListener('input', function() {
        const email = this.value.trim();
        
        if (email === '') {
            formMessage.textContent = '';
            formMessage.style.display = 'none';
        } else {
            formMessage.style.display = 'block';
            formMessage.style.color = validateEmail(email) ? 'green' : 'red';
            formMessage.textContent = validateEmail(email) 
                ? 'Valid email address' 
                : 'Please enter a valid email address';
        }
    });

    // Form submission
    newsletterForm?.addEventListener('submit', async function(e) {
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
            await emailjs.send(process.env.EMAILJS_SERVICE_ID, 
                             process.env.EMAILJS_TEMPLATE_ID_1, 
                             { user_email: email });
            await emailjs.send(process.env.EMAILJS_SERVICE_ID, 
                             process.env.EMAILJS_TEMPLATE_ID_2, 
                             { user_email: email });
            
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
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
                .test(navigator.userAgent);

            if (isMobile && confirm(`Call Kritika Home Food?\n${phoneNumber}`)) {
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
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initHeaderShadow();
    initSwiper();
    initScrollUp();
    initActiveLinks();
    initScrollReveal();
    initEmailFeatures();
    initPhoneFeature();
    initLazyLoading();
});