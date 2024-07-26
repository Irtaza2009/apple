/*const zoom = document.querySelector(".zoom");
const zoom2 = document.querySelector(".zoom2");
const zoom3 = document.querySelector(".zoom3");
const minZoom = 1;
const maxZoom = 2;

addEventListener("scroll", (e) => {
  const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 100 * vh;
  const stop = 200 * vh;
  if (scrollTop > start && scrollTop < stop) {
    const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);
    zoom.style.transform = `scale(${scale})`;
  }
});

addEventListener("scroll", (e) => {
  const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 400 * vh;
  const stop = 500 * vh;
  if (scrollTop > start && scrollTop < stop) {
    const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);

    zoom2.style.transform = `scale(${scale})`;
  }
});

addEventListener("scroll", (e) => {
  const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 700 * vh;
  const stop = 800 * vh;
  if (scrollTop > start && scrollTop < stop) {
    const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);

    zoom3.style.transform = `scale(${scale})`;
  }
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".zoom, .zoom2, .zoom3");
  const zoomFactor = 2.2;
  const transitionDuration = 500; // Duration of transition in milliseconds
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
});
