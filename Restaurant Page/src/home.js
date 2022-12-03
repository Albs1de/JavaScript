export default function createHome() {
  const getDiv = document.querySelector("#content");

  const firstP = document.createElement("p");
  firstP.innerHTML = "Ich komme vom Home.js";
  getDiv.appendChild(firstP);

  document.body.appendChild(getDiv);
  return getDiv;
}
