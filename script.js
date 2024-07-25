document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll(
    ".about-section, .projects-section, .contact-section, footer"
  );
  sections.forEach((section) => {
    observer.observe(section);
  });

  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero-section");

  document.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (window.scrollY > window.innerHeight / 2) {
      heroSection.classList.add("zoomed-out");
    } else {
      heroSection.classList.remove("zoomed-out");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll(
    ".about-section, .projects-section, .contact-section, footer"
  );
  sections.forEach((section) => {
    observer.observe(section);
  });

  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero-section");
  const heroContent = document.querySelector(".hero-content");

  let zoomedIn = false;

  document.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight / 4 && !zoomedIn) {
      heroSection.classList.add("zoomed-in");
      heroContent.classList.add("hidden");
      zoomedIn = true;
    } else if (window.scrollY <= window.innerHeight / 4 && zoomedIn) {
      heroSection.classList.remove("zoomed-in");
      heroContent.classList.remove("hidden");
      zoomedIn = false;
    }

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
