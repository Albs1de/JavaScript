import "./style.css";
import printMe from "./print.js";
import createTemplate from "./template";
import Icon from "./ReactIcon.png";
function component() {
  const element = document.createElement("div");
  //Add the image to our existing div.
  //const myIcon = new Image();
  //myIcon.src = Icon;
  //element.appendChild(myIcon);

  element.appendChild(createTemplate());
  return element;
}

document.body.appendChild(component());
