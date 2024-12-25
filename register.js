// Signup Form Handling
const signupForm = document.querySelector('#signup form');

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = signupForm.querySelector('input[name="name"]').value;
        const email = signupForm.querySelector('input[name="email"]').value;
        const password = signupForm.querySelector('input[name="password"]').value;

        alert(`Thank you for signing up, ${name}!`);
        // Add logic for server-side registration here
    });
}