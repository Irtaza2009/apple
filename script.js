document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    mirror: true, // whether elements should animate out while scrolling past them
    easing: "ease",
  });

  // Contact Form Mailto Link
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:myemail@example.com?subject=Contact from ${name}&body=${encodeURIComponent(
      message
    )}%0A%0AEmail: ${email}`;
    window.location.href = mailtoLink;
  });

  // Intersection Observer for Sticky Project Cards
  const cards = document.querySelectorAll(".project-card");
  const options = {
    root: null,
    threshold: 0.5,
    rootMargin: "10px 0px -90% 0px", // Stick 10px from top
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

  // Back to Top Button
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "↑";
  backToTopButton.classList.add("back-to-top");
  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Lazy Load Images
  const lazyImages = document.querySelectorAll("img.lazy");
  const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => {
    lazyLoadObserver.observe(img);
  });
});
