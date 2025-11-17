const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });
}


const submenuLinks = document.querySelectorAll(".has-submenu > a");

submenuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); 
      const parentLi = link.parentElement;
      parentLi.classList.toggle("active");
    }
  });
});


function aplicarMascara(input, mascara) {
  input.addEventListener("input", () => {
    const numeros = input.value.replace(/\D/g, "");
    let resultado = "";
    let pos = 0;

    for (let i = 0; i < mascara.length; i++) {
      if (mascara[i] === "#") {
        if (numeros[pos] !== undefined) {
          resultado += numeros[pos++];
        } else {
          break;
        }
      } else {
        resultado += mascara[i];
      }
    }
    input.value = resultado;
  });
}

const cpfInput = document.getElementById("cpf");
const telInput = document.getElementById("telefone");
const cepInput = document.getElementById("cep");

if (cpfInput) aplicarMascara(cpfInput, "###.###.###-##");
if (telInput) aplicarMascara(telInput, "(##) #####-####");
if (cepInput) aplicarMascara(cepInput, "#####-###");


const form = document.querySelector("form");
const alertBox = document.querySelector(".alert");
const toastBox = document.querySelector(".toast");


function validarPorPattern(input) {
  const pattern = input.getAttribute("pattern");
  if (!pattern) return true;
  const regex = new RegExp(`^${pattern}$`);
  return regex.test(input.value);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const inputs = form.querySelectorAll("input[required], select[required]");
    let valido = true;

    inputs.forEach((input) => {
      const preenchido = !!input.value.trim();
      const passaPattern = validarPorPattern(input);

      if (!preenchido || !passaPattern) {
        valido = false;
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid");
      }
    });

    if (!valido) {
      if (alertBox) {
        alertBox.style.display = "block";
        alertBox.textContent = "⚠️ Verifique os campos obrigatórios e os formatos (CPF, telefone e CEP).";
      }
      if (toastBox) toastBox.style.display = "none";
      return;
    }

    
    if (alertBox) alertBox.style.display = "none";
    if (toastBox) {
      toastBox.style.display = "block";
      setTimeout(() => {
        toastBox.style.display = "none";
      }, 3000);
    }

    form.reset();
  });

  
  form.addEventListener("blur", (e) => {
    const target = e.target;
    if (target && (target.tagName === "INPUT" || target.tagName === "SELECT")) {
      const preenchido = !!target.value.trim();
      const passaPattern = validarPorPattern(target);

      if (!preenchido || !passaPattern) {
        target.classList.add("invalid");
      } else {
        target.classList.remove("invalid");
      }
    }
  }, true);
}
