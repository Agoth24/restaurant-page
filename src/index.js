// Entry Point for project, writes to /dist/main.js
import "./global.css";
import loadPage from "./loadpage";
import homePageContent from "./homePage";
import menuPageContent from "./menuPage";
import aboutPageContent from "./aboutPage";

function renderHomePage() {
  loadPage(homePageContent(), "home");
  const heroBtn = document.querySelector(".hero-button");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      loadPage(menuPageContent(), "menu");
    });
  }
}

function attachNavListeners() {
  document.querySelector("header").addEventListener("click", (e) => {
    const target = e.target.closest("#logo, #nav-home, #nav-menu, #nav-about");
    if (!target) return;

    switch (target.id) {
      case "nav-home":
      case "logo":
        renderHomePage();
        break;
      case "nav-menu":
        loadPage(menuPageContent(), "menu");
        break;
      case "nav-about":
        loadPage(aboutPageContent(), "about");
        break;
    }
  });
}

renderHomePage();
attachNavListeners();
