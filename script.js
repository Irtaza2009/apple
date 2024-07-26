// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lenis
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => t * (2 - t),
    smooth: true,
  });

  function animateCards() {
    const cards = document.querySelectorAll(".card");
    const scrollPosition = lenis.scroll;

    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top + window.scrollY;
      const cardHeight = card.offsetHeight;

      if (
        scrollPosition > cardTop - window.innerHeight &&
        scrollPosition < cardTop + cardHeight
      ) {
        card.classList.remove("out");
      } else {
        card.classList.add("out");
      }
    });
  }

  // Listen for scroll events
  lenis.on("scroll", animateCards);

  // Update Lenis on each frame
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
