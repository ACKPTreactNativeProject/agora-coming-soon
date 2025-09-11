// Mobile menu toggle
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  console.log("clicked");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(255, 255, 255, 0.98)";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "none";
  }
});

// Button click handlers
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("join-btn")) {
    console.log("Join Agora clicked");
    // Add your join functionality here
  }

  if (e.target.classList.contains("contact-btn")) {
    console.log("Contact button clicked");
    // Add your contact functionality here
  }

  if (e.target.classList.contains("cta-btn")) {
    console.log("Get Started clicked");
    // Add your get started functionality here
  }
});
