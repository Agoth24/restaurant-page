import "./home.css";

export default function createHomePage() {
  const heroSection = document.createElement("div");
  heroSection.id = "hero";

  const heroCard = document.createElement("div");
  heroCard.classList.add("hero-card");

  const heroTitle = document.createElement("h1");
  heroTitle.classList.add("hero-title");
  heroTitle.textContent = "Coffee. Lunch. Vibes.";

  const heroPara = document.createElement("p");
  heroPara.textContent =
    "Enjoy our specialty drinks and cozy atmosphere all day.";

  const heroButton = document.createElement("button");
  heroButton.classList.add("hero-button");
  heroButton.textContent = "View Menu";

  heroCard.append(heroTitle, heroPara, heroButton);
  heroSection.appendChild(heroCard);

  const homePageContent = document.createElement("div");
  homePageContent.appendChild(heroSection);

  return homePageContent;
}
