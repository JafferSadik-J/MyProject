(function () {
  /* Hero text fade‑in */
  const heroText = document.getElementById("heroText");
  window.addEventListener("load", () => {
    heroText.classList.add("visible");
  });

  /* Sticky nav shrink on scroll */
  const header = document.querySelector("header");
  let lastY = 0;
  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    header.style.transform = currentY > lastY ? "translateY(-100%)" : "translateY(0)";
    lastY = currentY;
  });

  /* Ask form handler */
  const askForm = document.getElementById("askForm");
  askForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for your question! We will get back to you soon.");
    askForm.reset();
  });
})();
