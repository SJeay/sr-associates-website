document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  const closeMenu = () => {
    nav?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    if (menuButton) menuButton.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  };
  const toggleMenu = (event) => {
    if (event) event.preventDefault();
    if (!menuButton || !nav) return;
    const isOpen = !nav.classList.contains('open');
    nav.classList.toggle('open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuButton.innerHTML = `<i class="fa-solid fa-${isOpen ? 'xmark' : 'bars'}" aria-hidden="true"></i>`;
    if (event) event.stopPropagation();
  };

  menuButton?.addEventListener('click', toggleMenu);
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', (event) => {
    if (!nav || !nav.classList.contains('open')) return;
    const clickedNav = nav.contains(event.target);
    const clickedToggle = menuButton ? menuButton.contains(event.target) : false;
    if (!clickedNav && !clickedToggle) closeMenu();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

  const brandToggle = document.querySelector('[data-brand-toggle]');
  const extraBrands = document.querySelector('#all-brands');
  brandToggle?.addEventListener('click', () => {
    const expanded = brandToggle.getAttribute('aria-expanded') !== 'true';
    brandToggle.setAttribute('aria-expanded', String(expanded));
    extraBrands.hidden = !expanded;
    brandToggle.innerHTML = expanded
      ? 'Show fewer brands <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>'
      : 'View all brands <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
  });

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add('visible'));

  const galleryLinks = [...document.querySelectorAll('.showroom-gallery a')];
  if (!galleryLinks.length) return;
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Showroom photo');
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image">×</button><img alt=""><span class="lightbox-caption"></span>';
  document.body.append(lightbox);
  const lightboxImage = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  const close = () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; };
  galleryLinks.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const image = link.querySelector('img');
    lightboxImage.src = link.href;
    lightboxImage.alt = image?.alt || 'SR Associates showroom';
    caption.textContent = image?.alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox-close').focus();
  }));
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && lightbox.classList.contains('open')) close(); });
});
