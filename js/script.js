document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const header = document.querySelector(".header");

  const handleHeader = () => {
    if (!header) return;

    header.style.boxShadow =
      window.scrollY > 24
        ? "0 16px 40px rgba(4, 24, 18, 0.09)"
        : "none";
  };

  handleHeader();
  window.addEventListener("scroll", handleHeader);

  const faqItems = document.querySelectorAll(".faq details");

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      faqItems.forEach((other) => {
        if (other !== item) {
          other.open = false;
        }
      });
    });
  });

  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
});