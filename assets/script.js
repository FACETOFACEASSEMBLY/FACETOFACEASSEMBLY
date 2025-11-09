document.addEventListener("DOMContentLoaded", () => { 
  const elements = document.querySelectorAll(".card, .pastor-card, .news-card, .hero-text");
   elements.forEach(el => {
     el.style.opacity = "0"; 
    el.style.transform = "translateY(20px)";
   }); 
   const revealOnScroll = () => { elements.forEach(el => { const rect = el.getBoundingClientRect(); if (rect.top < window.innerHeight - 50) { el.style.transition = "all 0.8s ease"; el.style.opacity = "1"; el.style.transform = "translateY(0)"; } }); }; window.addEventListener("scroll", revealOnScroll); revealOnScroll(); });
// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}
// Donate Modal
const donateBtn = document.querySelector(".donate-cta .btn");
const modal = document.getElementById("donateModal");
const closeBtn = document.querySelector(".modal .close-btn");

if (donateBtn && modal && closeBtn) {
  donateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
document.getElementById("goLiveBtn").addEventListener("click", function () {
  const liveSection = document.querySelector(".live-service");

  liveSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

