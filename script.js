document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a simple response
    document.getElementById('formResponse').innerHTML = `<div class="alert alert-success">Thank you, ${name}! Your message has been sent.</div>`;

    // Clear the form
    document.getElementById('contactForm').reset();
});
