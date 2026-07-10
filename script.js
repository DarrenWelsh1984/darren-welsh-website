const modal = document.querySelector('[data-modal]');
const openButtons = document.querySelectorAll('[data-open-contact]');
const closeButton = document.querySelector('[data-close-contact]');

function openModal() {
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('input')?.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}

openButtons.forEach((button) => button.addEventListener('click', openModal));
closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});
