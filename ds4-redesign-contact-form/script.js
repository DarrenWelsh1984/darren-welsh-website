const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const modal = document.querySelector('[data-contact-modal]');
const openButtons = document.querySelectorAll('[data-open-contact]');
const closeButtons = document.querySelectorAll('[data-close-contact]');
const revealItems = document.querySelectorAll('.reveal');

const setHeader = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

nav?.querySelectorAll('a, button').forEach((item) => {
  item.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const openModal = () => {
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('input[name="name"]')?.focus();
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

openButtons.forEach((button) => button.addEventListener('click', openModal));
closeButtons.forEach((button) => button.addEventListener('click', closeModal));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));
