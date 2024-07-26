document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".zoom, .zoom2, .zoom3");
  const zoomFactor = 2.2;
  const transitionDuration = 500; // Duration of transition in milliseconds
  const vh = window.innerHeight / 100;

  function updateZoom(scrollTop) {
    zoomElements.forEach((element, index) => {
      const start = (index * 300 + 100) * vh;
      const stop = (index * 300 + 200) * vh;
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

  // Add carousel items
  const carousel = document.querySelector(".carousel");
  const emojis = [
    ["🐳", "spouting whale", "U+1F433"],
    ["🐋", "whale", "U+1F40B"],
    ["🐬", "dolphin", "U+1F42C"],
    ["🐟", "fish", "U+1F41F"],
    ["🐠", "tropical fish", "U+1F420"],
    ["🐡", "blowfish", "U+1F421"],
    ["🦈", "shark", "U+1F988"],
    ["🐙", "octopus", "U+1F419"],
    ["🐚", "spiral shell", "U+1F41A"],
  ];

  emojis.forEach((emoji) => {
    const item = document.createElement("div");
    item.className = "carousel__item";

    const head = document.createElement("div");
    head.className = "carousel__item-head";
    head.textContent = emoji[0];

    const body = document.createElement("div");
    body.className = "carousel__item-body";

    const title = document.createElement("p");
    title.className = "title";
    title.textContent = emoji[1];

    const unicode = document.createElement("p");
    unicode.textContent = `Unicode: ${emoji[2]}`;

    body.appendChild(title);
    body.appendChild(unicode);
    item.appendChild(head);
    item.appendChild(body);

    carousel.appendChild(item);
  });
});
