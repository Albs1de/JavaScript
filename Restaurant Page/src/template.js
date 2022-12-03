export default function siteTemplate() {
  const getDiv = document.querySelector("#content");
  const navBar = document.createElement("div");
  const navBarChild1 = document.createElement("div");
  const navBarChild2 = document.createElement("div");
  const navBarChild3 = document.createElement("div");

  const homeText = document.createElement("h3");
  homeText.textContent = "Home";

  const menuText = document.createElement("h3");
  menuText.textContent = "Menu";

  const contactText = document.createElement("h3");
  contactText.textContent = "Contact";

  navBarChild1.appendChild(homeText);
  navBarChild2.appendChild(menuText);
  navBarChild3.appendChild(contactText);

  navBar.appendChild(navBarChild1);
  navBar.appendChild(navBarChild2);
  navBar.appendChild(navBarChild3);

  getDiv.appendChild(navBar);

  return getDiv;
}
