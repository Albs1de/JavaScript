import _ from "lodash";
import "./style.css";
import createHome from "./home.js";

console.log("Das hat geklappt.");

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me";
  btn.onclick = createHome;

  return element;
}
document.body.appendChild(component());
