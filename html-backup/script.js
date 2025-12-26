// ============================================
// MOBILE MENU TOGGLE
// ============================================
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("hamburger-btn");
  
  // Toggle menu visibility
  if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
    menu.style.maxHeight = "0px";
    icon.setAttribute("aria-expanded", "false");
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
    icon.setAttribute("aria-expanded", "true");
  }
  
  // Animate hamburger icon
  icon.classList.toggle("open");
  
  // Rotate hamburger bars
  const spans = icon.querySelectorAll("span");
  if (icon.classList.contains("open")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // Optional: unobserve after animation to improve performance
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with 'reveal' class
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach(el => observer.observe(el));
});

// ============================================
// SMOOTH SCROLL WITH OFFSET FOR FIXED NAV
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 80; // Height of fixed navigation
      const targetPosition = target.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
      
      // Close mobile menu if open
      const menu = document.getElementById("mobile-menu");
      const icon = document.getElementById("hamburger-btn");
      if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
        toggleMenu();
      }
    }
  });
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================
window.addEventListener("scroll", () => {
  const nav = document.getElementById("desktop-nav");
  if (window.scrollY > 100) {
    nav.classList.add("shadow-lg");
    nav.style.backgroundColor = "rgba(10, 10, 15, 0.95)";
  } else {
    nav.classList.remove("shadow-lg");
    nav.style.backgroundColor = "rgba(10, 10, 15, 0.8)";
  }
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================
const sections = document.querySelectorAll("section[id]");

function highlightNavLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`a[href="#${sectionId}"]`);
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add("text-neon-cyan");
      navLink?.classList.remove("text-gray-300");
    } else {
      navLink?.classList.remove("text-neon-cyan");
      navLink?.classList.add("text-gray-300");
    }
  });
}

window.addEventListener("scroll", highlightNavLink);

// ============================================
// TYPING ANIMATION (Optional Enhancement)
// ============================================
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// ============================================
// LOADING ANIMATION
// ============================================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
