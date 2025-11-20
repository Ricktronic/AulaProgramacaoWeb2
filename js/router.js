// Sistema de rotas SPA
import { templates } from "./templates.js";

export function initRouter() {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href").replace(".html", "");
      loadPage(href);
      window.history.pushState({}, "", link.getAttribute("href"));
    });
  });

  window.addEventListener("popstate", () => {
    const path = window.location.pathname.replace("/", "").replace(".html", "");
    loadPage(path || "index");
  });
}

function loadPage(page) {
  const main = document.querySelector("main");
  main.innerHTML = templates[page] || "<h2>Página não encontrada</h2>";
}
