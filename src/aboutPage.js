import "./about.css";

const aboutParas = [
  "Welcome to BLOOM Café + Brunch, where coffee meets community and brunch is anything but basic.",
  "We started with a simple idea: create a space where good people gather over great food. Whether you're here for your morning espresso, a slow Sunday brunch, or just a quiet corner with a book, our café was designed to feel like a second home.",
  "Our kitchen focuses on seasonal ingredients, scratch-made dishes, and bold flavors. Think fresh sourdough, runny yolks, and locally roasted beans. From avocado toast to fried chicken waffles, everything is made with intention and care.",
  "We believe in unrushed mornings, warm service, and thoughtful menus.",
  "Thanks for making us part of your daily ritual.",
];

const hoursParas = [
  "Sunday: 7:00AM - 7:00PM",
  "Monday: 7:00AM - 7:00PM",
  "Tuesday: 7:00AM - 7:00PM",
  "Wednesday: 7:00AM - 7:00PM",
  "Thursday: 7:00AM - 7:00PM",
  "Friday: 7:00AM - 7:00PM",
  "Saturday: 7:00AM - 7:00PM",
];

export default function createAboutPage() {
  function addParasToDiv(paragraphArray, div) {
    paragraphArray.forEach((paraText) => {
        const paraElement = document.createElement('p')
        paraElement.textContent = paraText;
      div.append(paraElement);
    });
  }
  const aboutPageContent = document.createDocumentFragment();

  const aboutTitle = document.createElement("h1");
  aboutTitle.classList.add("about-title");
  aboutTitle.textContent = "About Us";

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  addParasToDiv(aboutParas, aboutContainer);

  const hoursTitle = document.createElement("h1");
  hoursTitle.classList.add("about-title");
  hoursTitle.textContent = "Hours";

  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("hours-container");
  addParasToDiv(hoursParas, hoursContainer);

  aboutPageContent.append(
    aboutTitle,
    aboutContainer,
    hoursTitle,
    hoursContainer
  );

  return aboutPageContent;
}
