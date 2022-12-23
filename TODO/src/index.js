import "./style.css";
import printMe from "./print.js";

import Icon from "./ReactIcon.png";
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  // Lodash, currently included via a script, is required for this line to work
  element.classList.add("hello");
  element.innerHTML = "Hello webpack";

  //Add the image to our existing div.
  //const myIcon = new Image();
  //myIcon.src = Icon;
  //element.appendChild(myIcon);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
