import createHome from "./home.js";
import siteTemplate from "./template.js";

import "./style.css";

function component() {
  const currentDiv = document.querySelector("#content");
  const element = document.createElement("div");
  const btn = document.createElement("button");
  const btn2 = document.createElement("button");

  btn2.innerHTML = "Template";
  btn2.onclick = siteTemplate;
  btn.innerHTML = "Click me.";
  btn.onclick = createHome;
  element.appendChild(btn);
  element.appendChild(btn2);

  siteTemplate();
  createHome();
  return element;
}

document.body.appendChild(component());
