document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
});
