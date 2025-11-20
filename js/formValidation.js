export function initFormValidation() {
  const form = document.querySelector("#cadastroForm");
  if (!form) return;

  const alertBox = document.querySelector(".alert");
  const toastBox = document.querySelector(".toast");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      alertBox.hidden = false;
      toastBox.hidden = true;
    } else {
      alertBox.hidden = true;
      toastBox.hidden = false;
      saveToLocalStorage(form);
      form.reset();
    }
  });
}

function saveToLocalStorage(form) {
  const data = {};
  new FormData(form).forEach((value, key) => {
    data[key] = value;
  });
  localStorage.setItem("cadastroVoluntario", JSON.stringify(data));
}
