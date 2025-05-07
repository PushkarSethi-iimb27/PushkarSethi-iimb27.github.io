document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for reaching out to Kitaabi Koffee Café! We’ll get back to you soon.");
  this.reset();
});
