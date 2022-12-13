export default function siteTemplate() {
  const getDiv = document.querySelector("#content");
  const currentDiv = document.createElement("nav");
  const parentElement = getDiv.parentNode;
  currentDiv.style.display = "flex";
  currentDiv.setAttribute("id", "currentDiv");
  // create tab Bar
  const homeTab = document.createElement("div");
  homeTab.classList.add("tabElement");
  homeTab.setAttribute("id", "HomeTab");
  //homeTab.setAttribute("id", "Home");

  const menuTab = document.createElement("div");
  menuTab.classList.add("tabElement");
  menuTab.setAttribute("id", "Menu");

  const contactTab = document.createElement("div");
  contactTab.classList.add("tabElement");
  contactTab.setAttribute("id", "Contact");

  // create Div for Buttons
  const navDiv = document.createElement("div");
  navDiv.classList.add("navclass");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("btn");
  homeBtn.innerText = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn");
  menuBtn.innerText = "Menu";
  const contactBtn = document.createElement("button");
  contactBtn.classList.add("btn");
  contactBtn.innerText = "Contact";

  currentDiv.appendChild(homeTab);
  currentDiv.appendChild(menuTab);
  currentDiv.appendChild(contactTab);

  homeTab.appendChild(homeBtn);
  menuTab.appendChild(menuBtn);
  contactTab.appendChild(contactBtn);

  parentElement.insertBefore(currentDiv, getDiv);

  function updateContent(content) {
    const contentElement = document.querySelector("#content");
    contentElement.innerHTML = content;
  }

  /*homeTab.addEventListener("click", () => {
    updateContent("<p>This is the Home Tab Content!</p>");
  });*/
  menuTab.addEventListener("click", () => {
    updateContent("<p>This is the Menu Tab Content!</p>");
  });

  contactTab.addEventListener("click", () => {
    updateContent("<p>This is the Contact Tab Content!</p>");
  });

  return {
    getDiv,
    homeTab,
    updateContent,
    homeBtn,
  };
}
