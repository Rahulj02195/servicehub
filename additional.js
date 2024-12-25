// script.js

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scrolling for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        alert(`Thank you, ${name}! Your message has been sent.`);

        // Clear the form after submission
        contactForm.reset();
    });
}

// Login Form Handling
const loginForm = document.querySelector('#login form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginForm.querySelector('input[name="email"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;

        alert(`Logging in with email: ${email}`);
        // Add logic for server-side authentication here
    });
}


// Booking Form Handling
const bookingForm = document.querySelector('#booking form');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const service = bookingForm.querySelector('select[name="service"]').value;
        const date = bookingForm.querySelector('input[name="date"]').value;
        const time = bookingForm.querySelector('input[name="time"]').value;
        const details = bookingForm.querySelector('textarea[name="details"]').value;

        alert(`Service booked: ${service} on ${date} at ${time}`);
        // Add logic for saving booking data here
    });
}

// Payment Form Handling
const paymentForm = document.querySelector('#payment form');

if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const cardholder = paymentForm.querySelector('input[name="cardholder"]').value;
        const cardnumber = paymentForm.querySelector('input[name="cardnumber"]').value;
        const expiry = paymentForm.querySelector('input[name="expiry"]').value;
        const cvv = paymentForm.querySelector('input[name="cvv"]').value;

        alert(`Payment processed for cardholder: ${cardholder}`);
        // Add logic for payment processing here
    });
}
