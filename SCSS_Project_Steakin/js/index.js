const scrollTop = document.querySelector(".scroll-top");
scrollTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-search");
const modalOpener = document.querySelector(".modal-toggler");
modal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("open");
});
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
modalOpener.addEventListener("click", () => {
  modal.classList.add("open");
});
