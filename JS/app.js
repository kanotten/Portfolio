document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".card-carousel");
  const cards = document.querySelectorAll(".card-carousel .card");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.style.display = i === index ? "block" : "none";
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - 1;
    showCard(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < cards.length - 1 ? currentIndex + 1 : 0;
    showCard(currentIndex);
  });

  showCard(currentIndex);
});
