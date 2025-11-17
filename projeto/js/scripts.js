// scripts.js

// ===== MENU RESPONSIVO =====
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });
}

// ===== FORMULÁRIO DE CADASTRO =====
const form = document.querySelector("form");
const alertBox = document.querySelector(".alert");
const toastBox = document.querySelector(".toast");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // evita envio real

    // Verifica se todos os campos obrigatórios estão preenchidos
    const inputs = form.querySelectorAll("input[required], select[required]");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        valid = false;
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid");
      }
    });

    if (!valid) {
      // Mostra alerta
      alertBox.style.display = "block";
      toastBox.style.display = "none";
    } else {
      // Mostra toast de sucesso
      alertBox.style.display = "none";
      toastBox.style.display = "block";

      // Esconde o toast depois de 3 segundos
      setTimeout(() => {
        toastBox.style.display = "none";
      }, 3000);

      // Limpa o formulário
      form.reset();
    }
  });
}
// ===== SUBMENU MOBILE =====
const submenuParents = document.querySelectorAll(".has-submenu");

submenuParents.forEach(parent => {
  parent.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // evita navegação imediata
      parent.classList.toggle("active");
    }
  });
});
