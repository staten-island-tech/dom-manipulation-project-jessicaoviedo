const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-grey-box"),
  points: document.querySelectorAll(".point"), //node list
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "grey";
  text.textContent = " and now this is a list of avengers";
  text.style.fontSize = "40px";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  DOMSelectors.points.forEach((point) => {
    point.addEeventListener;
    "click",
      function () {
        point.textContent("hello");
      };
  });
}

const qsa = (els) => document.querySelectorAll(els);

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
console.log(associates);

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
