(function () {
  const form = document.getElementById("loginForm");
  const errorEl = document.getElementById("logError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("logEmail").value.trim();
    const pw = document.getElementById("logPassword").value;
    const stored = JSON.parse(localStorage.getItem("myproject_user"));

    if (stored && stored.email === email && stored.pw === pw) {
      window.location.href = "home.html";
    } else {
      errorEl.textContent = "Invalid credentials";
    }
  });
})();
