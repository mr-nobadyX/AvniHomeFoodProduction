// init EmailJS
emailjs.init("_1x8c2wIGn-ACFKW2");

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides:'auto',
  })
/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true // animation repeat
})

sr.reveal(`.home__data, .popular__container, .footer`)
sr.reveal(`.home__board`, {delay: 700, distance: '100px', origin: 'right'})
sr.reveal(`.home__chapati`, {delay: 1400, distance: '100px', origin: 'bottom', rotate:{z: -90}})
sr.reveal(`.home__ingredient`, {delay: 2000, interval: 100})
sr.reveal(`.about__data, .recipe__list, .contact__data`, {origin: 'right'})
sr.reveal(`.about__img, .recipe__img, .contact__image`, {origin: 'left'})
sr.reveal(`.products__card`, {interval: 100})


/*=============== EmailJS ===============*/
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('form-message');

// Real-time email validation
emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        formMessage.textContent = '';
        formMessage.style.display = 'none';
    } else if (!emailRegex.test(email)) {
        formMessage.textContent =  "Please enter a valid email address";
        formMessage.style.color = 'red';
        formMessage.style.display = 'block';
    } else {
        formMessage.textContent = 'Valid email address';
        formMessage.style.color = 'green';
        formMessage.style.display = 'block';
    }
});

// Form submission handler
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address';
        formMessage.style.color = 'red';
        formMessage.style.display = 'block';
        emailInput.focus();
        return;
    }

    // EmailJS sending logic
    emailjs.send('service_o7bitcp', 'template_tk0dd8b', {
        user_email: email
    }).then(
        () => emailjs.send('service_o7bitcp', 'template_8z15503', {
            user_email: email
        })
    ).then(
        response => {
            formMessage.textContent = 'Thank you for subscribing!';
            formMessage.style.color = 'green';
            formMessage.style.display = 'block';
            this.reset();
            
            // Clear message after 2 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.style.display = 'none';
            }, 2000);
        },
        error => {
            console.error('Subscription failed:', error);
            formMessage.textContent = 'Subscription failed. Please try again.';
            formMessage.style.color = 'red';
            formMessage.style.display = 'block';
        }
    );
});

// Phone Feature with Confirmation
document.addEventListener('DOMContentLoaded', function() {
    const phoneButtons = document.querySelectorAll('.products__button');
    const phoneNumber = '+91-6360170572'; // REPLACE WITH ACTUAL NUMBER
    
    phoneButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if(isMobile) {
                // Mobile: Confirm before calling
                if(confirm('Call Kritika Home Food?\n' + phoneNumber)) {
                    window.location.href = 'tel:' + phoneNumber;
                }
            } else {
                // Desktop/Tablet: Smooth scroll to contact
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if(contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.warn('Contact section not found!');
                }
            }
        });
    });
});