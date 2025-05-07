// Kitabi Koffee Café - Custom JS
// Contact form validation and smooth scrolling

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for navbar links
  document.querySelectorAll('a.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Contact form validation
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      // Validate name
      const name = form.name;
      if (!name.value.trim()) {
        name.classList.add('is-invalid');
        valid = false;
      } else {
        name.classList.remove('is-invalid');
      }
      // Validate email
      const email = form.email;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        valid = false;
      } else {
        email.classList.remove('is-invalid');
      }
      // Validate message
      const message = form.message;
      if (!message.value.trim()) {
        message.classList.add('is-invalid');
        valid = false;
      } else {
        message.classList.remove('is-invalid');
      }
      // Show result
      if (valid) {
        alertBox.className = 'alert alert-success mt-3';
        alertBox.textContent = 'Thank you for reaching out! We will get back to you soon.';
        alertBox.classList.remove('d-none');
        form.reset();
        setTimeout(() => {
          alertBox.classList.add('d-none');
        }, 4000);
      } else {
        alertBox.className = 'alert alert-danger mt-3';
        alertBox.textContent = 'Please fill out all fields correctly.';
        alertBox.classList.remove('d-none');
      }
    });
    // Remove error on input
    form.querySelectorAll('input, textarea').forEach(function(input) {
      input.addEventListener('input', function() {
        this.classList.remove('is-invalid');
        alertBox.classList.add('d-none');
      });
    });
  }

  // Subtle fade-in for sections on scroll
  const faders = document.querySelectorAll('section, header');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Fade-in animation via CSS (add this to style.css):
// .fade-in { opacity: 1; transform: none; transition: opacity 1s, transform 1s; }
// section, header { opacity: 0; transform: translateY(30px); } 
