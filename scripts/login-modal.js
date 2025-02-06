const loginBtn = document.querySelector(".login");
const modalShadow = document.querySelector(".modal-shadow");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const closeModalBtn = document.querySelector(".close-modal");

const openModal = () => {
  modal.hidden = false;
  body.classList.toggle("block-scrolling");
};

const closeModal = () => {
  modal.hidden = true;
  body.classList.toggle("block-scrolling");
};

loginBtn.addEventListener("click", () => {
  openModal();
});

modalShadow.addEventListener("click", () => {
  closeModal();
});

closeModalBtn.addEventListener("click", () => {
  closeModal();
});
