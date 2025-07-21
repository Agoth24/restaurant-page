import "./menu.css";

const beverageMenuItems = [
  {
    name: `Espresso`,
    price: `$5`,
    description: `A rich, concentrated shot of coffee with bold flavor and a smooth
    finish.`,
  },
  {
    name: `Cappuccino`,
    price: `$5.75`,
    description: ` A classic blend of espresso, steamed milk, and airy milk foam.
    Balanced and creamy.`,
  },
  {
    name: `Latte`,
    price: `$6`,
    description: ` Silky espresso with steamed milk and a light layer of foam; smooth
    and mellow.`,
  },
  {
    name: `Americano`,
    price: `$5.25`,
    description: `Espresso diluted with hot water for a full-bodied, black coffee
    experience.`,
  },
  {
    name: `Iced Coffee`,
    price: `$5.5`,
    description: `Freshly brewed coffee served over ice. Refreshing and bold.`,
  },
  {
    name: `Green Tea`,
    price: `$5`,
    description: ` A soothing, caffeine-free blend of herbs and botanicals; available
    in several varieties.`,
  },
];

const foodMenuItems = [
  {
    name: `Avocado Toast`,
    price: `$9.5`,
    description: `Sourdough topped with smashed avocado, chili flakes, olive oil, and
    microgreens.`,
  },
  {
    name: `Eggs Benedict`,
    price: `$14`,
    description: `Poached eggs and smoked ham on toasted English muffins, topped with
    house-made hollandaise.`,
  },
  {
    name: `Breakfast Sandwich`,
    price: `$12`,
    description: ` Fried egg, aged cheddar, arugula, and chipotle mayo on a brioche
    bun.`,
  },
  {
    name: `Chicken & Waffles`,
    price: `$15`,
    description: `Buttermilk waffles topped with fried chicken, maple drizzle, and a
    dash of hot honey.`,
  },
];

function appendToMenu(menuItems, menuContainer) {
  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const nameAndPriceDiv = document.createElement("div");
    nameAndPriceDiv.classList.add("flex-sb");

    const itemName = document.createElement("h2");
    itemName.textContent = item.name;

    const itemPrice = document.createElement("h2");
    itemPrice.textContent = item.price;
    itemPrice.classList.add("price");

    nameAndPriceDiv.append(itemName, itemPrice);

    const itemDesc = document.createElement("p");
    itemDesc.textContent = item.description;

    menuItem.append(nameAndPriceDiv, itemDesc);
    menuContainer.appendChild(menuItem);
  });
}

export default function createMenuPage() {
  const menuPageContent = document.createDocumentFragment();

  const beveragesTitle = document.createElement("h1");
  beveragesTitle.textContent = `Beverages`;
  beveragesTitle.classList.add(`menu-title`);

  const beverageMenuContainer = document.createElement("div");
  beverageMenuContainer.classList.add("menu-container");
  appendToMenu(beverageMenuItems, beverageMenuContainer);

  const foodTitle = document.createElement(`h1`);
  foodTitle.textContent = `Brunch Menu`;
  foodTitle.classList.add(`menu-title`);
  const foodMenuContainer = document.createElement("div");
  foodMenuContainer.classList.add("menu-container");
  appendToMenu(foodMenuItems, foodMenuContainer);

  menuPageContent.append(
    beveragesTitle,
    beverageMenuContainer,
    foodTitle,
    foodMenuContainer
  );
  return menuPageContent;
}
