// script.js

// Smooth scroll (optional fallback for old browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form fields
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received.`);
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
