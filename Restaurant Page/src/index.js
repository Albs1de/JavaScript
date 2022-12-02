import createHome from "./home.js";

function component() {
  const currentDiv = document.querySelector("#content");
  const element = document.createElement("div");
  const btn = document.createElement("button");

  btn.innerHTML = "Click me.";
  btn.onclick = createHome;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
