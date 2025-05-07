// Simple contact form handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for contacting Kitaabi Koffee Café! We'll get back to you shortly.");
  this.reset();
});
