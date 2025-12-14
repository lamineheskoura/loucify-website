// JavaScript for Loucify Website

document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const accessBtn = document.getElementById('access-btn');
  const heroSection = document.getElementById('hero');
  const mainContent = document.getElementById('main-content');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  // Access button functionality
  if (accessBtn) {
    accessBtn.addEventListener('click', function() {
      window.location.href = 'services.html';
    });
  }

  // Hamburger menu functionality
  if (hamburger && navMenu) {
    hamburger.addEventListener('pointerdown', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    navMenu.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  }



  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});