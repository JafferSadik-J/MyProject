(function () {
  const form = document.getElementById("registerForm");
  const errorEl = document.getElementById("regError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pw = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (pw !== confirm) {
      errorEl.textContent = "Passwords do not match";
      return;
    }

    const user = { name, email, pw };
    localStorage.setItem("myproject_user", JSON.stringify(user));
    window.location.href = "login.html";
  });
})();
