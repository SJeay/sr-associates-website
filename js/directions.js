document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('[data-directions]');
  if (!triggers.length) return;

  const locations = [
    {
      name: 'SR Associates · Pollachi',
      address: 'Pollachi Main Road, Meenakshipuram, Pollachi, Tamil Nadu 642103',
      url: 'https://maps.app.goo.gl/NBx9xJLWrC9ZVFE58'
    },
    {
      name: 'S.R & Co Electronics · Annamalai',
      address: 'Opp. MRC Mill, 2/43-B, Sethumadai Road, Annamalai, Coimbatore, Tamil Nadu 642104',
      url: 'https://maps.app.goo.gl/sWHAV2kQ8sALmoa88'
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
});
