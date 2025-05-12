document.addEventListener('DOMContentLoaded', () => {    
    const signUpButton = document.getElementById('sign-up-button');
    const contactButton = document.getElementById('contact-button');

    signUpButton.addEventListener('click', async () => {
        window.location.href = './sign-up/index.html';
    });
    contactButton.addEventListener('click', async () => {
        window.location.href = './contact/index.html';
    });
});