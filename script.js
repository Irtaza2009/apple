document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".zoom, .zoom2, .zoom3");
  const zoomFactor = 2.2;
  const vh = window.innerHeight / 100;

  function updateZoom(scrollTop) {
    zoomElements.forEach((element, index) => {
      const start = (index * 300 + 80) * vh;
      const stop = (index * 300 + 380) * vh;
      if (scrollTop > start && scrollTop < stop) {
        const scale = Math.max(zoomFactor - (scrollTop - start) / 500, 1);
        element.style.transform = `scale(${scale})`;
      }
    });
  }

  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop;
    updateZoom(scrollTop);
  }

  window.addEventListener("scroll", handleScroll);

  // Initialize AOS
  AOS.init({
    duration: 500, // Animation duration in milliseconds
    mirror: true, // whether elements should animate out while scrolling past them
  });

  const cards = document.querySelectorAll(".project-card");
  const options = {
    root: null,
    threshold: 0.5,
    rootMargin: "10px 0px -90% 0px", // Adjust as needed to stick 10px from top
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("sticky");
      } else {
        entry.target.classList.remove("sticky");
      }
    });
  }, options);

  cards.forEach((card) => {
    observer.observe(card);
  });
});
