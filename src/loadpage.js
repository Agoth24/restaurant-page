const contentSection = document.querySelector("#content");

export default function loadPage(content) {
  contentSection.textContent = "";
  contentSection.append(content);
}
