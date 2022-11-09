const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

DOMSelectors.box.insertAdjacentHTML("beforeend", `<h1>we are an H1</h1>`);

/* const qsa = (els) => document.querySelectorAll(els);

const allAvengers = qsa(".avenger");
console.log(allAvengers);

const allAvengersArray = Array.from(allAvengers);

const originalAvengers = allAvengersArray.filter((node) => {
  if (node.classList[1] === "original") {
    return true;
  }
  return false;
});
console.log(originalAvengers);

const associatesArray = Array.from(qsa(".associate"));
const associates = associatesArray.map((item) => item.innerHTML);
console.log(associates); */

/* const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "this is now a bigger red box";
  text.style.fontSize = "40px";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text); */
