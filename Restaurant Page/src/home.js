import { siteTemplate } from "./template";

export default function createHome() {
  const home = document.querySelector("#Home");

  homeTab.addEventListener("click", () => {
    updateContent("<p>This is the Home Tab Content!</p>");
  });
}
