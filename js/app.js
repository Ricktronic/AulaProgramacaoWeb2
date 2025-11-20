import { initRouter } from "./router.js";
import { initFormValidation } from "./formValidation.js";

document.addEventListener("DOMContentLoaded", () => {
  initRouter();
  initFormValidation();
});
