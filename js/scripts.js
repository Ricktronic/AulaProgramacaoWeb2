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

const form = document.querySelector("form");
const alertBox = document.querySelector(".alert");
const toastBox = document.querySelector(".toast");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    
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
      
      if (alertBox) {
        alertBox.style.display = "block";
      }
      if (toastBox) {
        toastBox.style.display = "none";
      }
    } else {
      
      if (alertBox) {
        alertBox.style.display = "none";
      }
      if (toastBox) {
        toastBox.style.display = "block";

        
        setTimeout(() => {
          toastBox.style.display = "none";
        }, 3000);
      }

      form.reset();
    }
  });
}
