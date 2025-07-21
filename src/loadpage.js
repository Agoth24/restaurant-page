const contentSection = document.querySelector("#content");

export default function loadPage(content, pageType) {
  contentSection.textContent = "";
  contentSection.append(content);

  document.body.className = ''
  if (pageType) {
    document.body.classList.add(`${pageType}-page`)
  }
}
