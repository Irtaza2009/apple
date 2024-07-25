const zoom = document.querySelector(".zoom");
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
  const start = 200 * vh;
  const stop = 400 * vh;
  if (scrollTop > start && scrollTop < stop) {
    const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);

    zoom2.style.transform = `scale(${scale})`;
  }
});

addEventListener("scroll", (e) => {
  const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 300 * vh;
  const stop = 600 * vh;
  if (scrollTop > start && scrollTop < stop) {
    const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);

    zoom3.style.transform = `scale(${scale})`;
  }
});
