    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
    
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });