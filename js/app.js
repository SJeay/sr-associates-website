document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const backToTop = document.querySelector('.back-to-top');
  const cards = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const counters = document.querySelectorAll('[data-count]');
  const forms = document.querySelectorAll('form[data-form]');
  const rippleButtons = document.querySelectorAll('.btn, .filter-chip, .link-btn');

  const setActiveNav = () => {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  const handleNavToggle = () => {
    if (!menuToggle || !navLinks) return;

    const setMenuState = (isOpen) => {
      navLinks.classList.toggle('open', isOpen);
      const expanded = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', String(expanded));
      menuToggle.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
      menuToggle.innerHTML = `<i class="fa-solid fa-${expanded ? 'xmark' : 'bars'}" aria-hidden="true"></i>`;
    };

    const closeMenu = () => setMenuState(false);
    const toggleMenu = (event) => {
      if (event) event.preventDefault();
      const isOpen = !navLinks.classList.contains('open');
      setMenuState(isOpen);
      if (event) event.stopPropagation();
    };

    menuToggle.addEventListener('click', toggleMenu);
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('click', (event) => {
      if (!navLinks.classList.contains('open')) return;
      const clickedInsideNav = navLinks.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);
      if (!clickedInsideNav && !clickedToggle) {
        closeMenu();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card) => observer.observe(card));

  const animateCounter = (el) => {
    const target = Number(el.dataset.count || 0);
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const start = performance.now();

    const frame = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = `${current}${suffix}`;
      if (progress < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => counterObserver.observe(counter));

  const toggleBackToTop = () => {
    if (!backToTop) return;
    backToTop.classList.toggle('visible', window.scrollY > 260);
  };

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleBackToTop);

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  rippleButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const circle = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      circle.className = 'ripple';
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${event.clientX - rect.left - size / 2}px`;
      circle.style.top = `${event.clientY - rect.top - size / 2}px`;
      button.appendChild(circle);
      setTimeout(() => circle.remove(), 700);
    });
  });

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = 'rgba(244, 67, 54, 0.8)';
        } else {
          field.style.borderColor = 'rgba(17, 17, 17, 0.08)';
        }
      });

      if (!valid) {
        if (status) {
          status.textContent = 'Please fill in all required fields before submitting.';
          status.className = 'form-status error';
        }
        return;
      }

      if (status) {
        status.textContent = 'This form is not connected yet, so your enquiry has not been sent. Please call 99421 62602 or WhatsApp 98652 63522.';
        status.className = 'form-status info';
      }
    });
  });

  handleNavToggle();
  setActiveNav();
  toggleBackToTop();

  const parallaxItems = document.querySelectorAll('.showroom-card, .float-card, .page-hero');
  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.12;
    parallaxItems.forEach((item) => {
      item.style.transform = `translateY(${offset * 0.2}px)`;
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => imageObserver.observe(img));
});
