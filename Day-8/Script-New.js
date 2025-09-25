
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  observer.observe(section);
});

// Select the footer container
const footerContainer = document.getElementById("footer-container");

// Create footer element
const footer = document.createElement("footer");

// Append footer to the page
footerContainer.appendChild(footer);

// Set current year dynamically
document.getElementById("year").textContent = new Date().getFullYear();


// Button animation
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  alert("Welcome! Let's get started 🚀");
});
