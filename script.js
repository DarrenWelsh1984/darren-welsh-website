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

const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector(".nav");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("nav-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navigation.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("click", () => {
      navigation.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}