const contentSection = document.createElement("div");
contentSection.id = "content";

const heroSection = document.createElement("div");
heroSection.id = "hero";

const heroCard = document.createElement("div");
heroCard.classList.add("hero-card");

const heroTitle = document.createElement("h1");
heroTitle.classList.add("hero-title");

const heroPara = document.createElement("p");

const heroButton = document.createElement("button");
heroButton.classList.add("hero-button");

function loadPage() {
  heroCard.append(heroTitle, heroPara, heroButton);
  heroSection.appendChild(heroCard);
  contentSection.appendChild(heroSection);
  document.body.appendChild(contentSection);
}

export default loadPage;
