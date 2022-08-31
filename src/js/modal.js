(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtnHero: document.querySelector("[data-modal-open-hero]"),
    openModalBtnOffer: document.querySelector("[data-modal-open-offerings]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnHero.addEventListener("click", toggleModal);
  refs.openModalBtnOffer.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("backdrop--is-hidden");
    refs.body.classList.toggle('no-scroll');
  }
})();