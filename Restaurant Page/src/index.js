import _ from "lodash";
import "./style.css";
console.log("Das hat geklappt.");

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}
document.body.appendChild(component());
