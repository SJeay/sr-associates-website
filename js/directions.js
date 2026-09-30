const initializeLocationChoosers = () => {
  const triggers = document.querySelectorAll('[data-directions]');

  const locations = [
    {
      name: 'SR Associates · Pollachi',
      address: '7/283B, Alva Hospital Opp, Pollachi Road, Meenakshipurm, Coimbatore, Tamilnadu, 642013',
      url: 'https://maps.app.goo.gl/NBx9xJLWrC9ZVFE58'
    },
    {
      name: 'S.R & Co Electronics · Annamalai',
      address: '20/1 Sethumadai Road, Near IOB Bank, Opp. Masaniyamman Old Arch, Anaimalai, Coimbatore, Tamilnadu 642014',
      url: 'https://maps.app.goo.gl/hz6ZbgAxdeMvQBxp9'
    }
  ];

  const dialog = document.createElement('dialog');
  dialog.className = 'directions-dialog';
  dialog.setAttribute('aria-labelledby', 'directions-title');
  dialog.innerHTML = `
    <div class="directions-panel">
      <button class="directions-close" type="button" aria-label="Close directions chooser">&times;</button>
      <span class="directions-eyebrow">Plan your visit</span>
      <h2 id="directions-title">Choose a location</h2>
      <p class="directions-intro">Open directions to the SR Associates location you want to visit.</p>
      <div class="directions-options">
        ${locations.map(location => `
          <a class="directions-option" href="${location.url}" target="_blank" rel="noopener noreferrer">
            <span class="directions-pin"><i class="fa-solid fa-location-dot" aria-hidden="true"></i></span>
            <span class="directions-location"><strong>${location.name}</strong><small>${location.address}</small></span>
            <i class="fa-solid fa-arrow-up-right-from-square directions-arrow" aria-hidden="true"></i>
          </a>
        `).join('')}
      </div>
    </div>`;
  document.body.append(dialog);

  const closeButton = dialog.querySelector('.directions-close');
  triggers.forEach(trigger => trigger.addEventListener('click', () => dialog.showModal()));
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });

  const callTriggers = document.querySelectorAll('[data-call]');
  if (callTriggers.length) {
    const callDialog = document.createElement('dialog');
  callDialog.className = 'directions-dialog';
  callDialog.setAttribute('aria-labelledby', 'call-title');
  callDialog.innerHTML = `
    <div class="directions-panel">
      <button class="directions-close" type="button" aria-label="Close call chooser">&times;</button>
      <span class="directions-eyebrow">Call our team</span>
      <h2 id="call-title">Choose a location</h2>
      <p class="directions-intro">Select the showroom you want to call.</p>
      <div class="directions-options">
        <a class="directions-option" href="tel:+919791676260">
          <span class="directions-pin"><i class="fa-solid fa-phone" aria-hidden="true"></i></span>
          <span class="directions-location"><strong>Pollachi - Meenakshipuram</strong><small>97916 76260</small></span>
          <i class="fa-solid fa-arrow-right directions-arrow" aria-hidden="true"></i>
        </a>
        <a class="directions-option" href="tel:+918270975672">
          <span class="directions-pin"><i class="fa-solid fa-phone" aria-hidden="true"></i></span>
          <span class="directions-location"><strong>Anaimalai</strong><small>82709 75672</small></span>
          <i class="fa-solid fa-arrow-right directions-arrow" aria-hidden="true"></i>
        </a>
      </div>
    </div>`;
  document.body.append(callDialog);
  const callCloseButton = callDialog.querySelector('.directions-close');
  callTriggers.forEach(trigger => trigger.addEventListener('click', () => callDialog.showModal()));
  callCloseButton.addEventListener('click', () => callDialog.close());
    callDialog.addEventListener('click', event => {
      if (event.target === callDialog) callDialog.close();
    });
  }

  const whatsappTriggers = document.querySelectorAll('[data-whatsapp], .footer a[aria-label="WhatsApp"]');
  if (!whatsappTriggers.length) return;
  const whatsappDialog = document.createElement('dialog');
  whatsappDialog.className = 'directions-dialog';
  whatsappDialog.setAttribute('aria-labelledby', 'whatsapp-title');
  whatsappDialog.innerHTML = `
    <div class="directions-panel">
      <button class="directions-close" type="button" aria-label="Close WhatsApp chooser">&times;</button>
      <span class="directions-eyebrow">Message our team</span>
      <h2 id="whatsapp-title">Choose a location</h2>
      <p class="directions-intro">Select the showroom you want to message on WhatsApp.</p>
      <div class="directions-options">
        <a class="directions-option" href="https://wa.me/919791676260" target="_blank" rel="noopener noreferrer">
          <span class="directions-pin"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></span>
          <span class="directions-location"><strong>Pollachi - Meenakshipuram</strong><small>97916 76260</small></span>
          <i class="fa-solid fa-arrow-right directions-arrow" aria-hidden="true"></i>
        </a>
        <a class="directions-option" href="https://wa.me/918270975672" target="_blank" rel="noopener noreferrer">
          <span class="directions-pin"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></span>
          <span class="directions-location"><strong>Anaimalai</strong><small>82709 75672</small></span>
          <i class="fa-solid fa-arrow-right directions-arrow" aria-hidden="true"></i>
        </a>
      </div>
    </div>`;
  document.body.append(whatsappDialog);
  const whatsappCloseButton = whatsappDialog.querySelector('.directions-close');
  whatsappTriggers.forEach(trigger => trigger.addEventListener('click', event => {
    event.preventDefault();
    whatsappDialog.showModal();
  }));
  whatsappCloseButton.addEventListener('click', () => whatsappDialog.close());
  whatsappDialog.addEventListener('click', event => {
    if (event.target === whatsappDialog) whatsappDialog.close();
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLocationChoosers);
} else {
  initializeLocationChoosers();
}
