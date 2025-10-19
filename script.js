// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const closeMenuToggle = document.querySelector(".close-btn");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeMenuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// // Close sidebar when clicking outside on mobile
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 992) {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove("active");
    }
  }
});

// Prevent sidebar from closing when clicking inside it
sidebar.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Handle window resize
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 992) {
      sidebar.classList.remove("active");
    }
  }, 250);
});
