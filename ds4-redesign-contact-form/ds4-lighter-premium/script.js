const modal = document.querySelector('[data-contact-modal]');
const openers = document.querySelectorAll('[data-open-contact]');
const closers = document.querySelectorAll('[data-close-contact]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

openers.forEach(button => button.addEventListener('click', () => {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}));

closers.forEach(button => button.addEventListener('click', () => {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  }
});

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open');
  });
}
