const DOMSelectors = {
  submit: document.querySelector("#form"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
};

DOMSelectors.submit.addEventListener("click", function (e) {
  let input = DOMSelectors.submit.value;
  e.preventDefault();
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  console.log(e);
});

/* const title = "";
console.log(DOMSelectors.title);
const StarWars = {
  title: "star wars",
};

function makeCard() {
  //make the card
  //get delete button
  //querySelectorAll returns node list
  //for each btuton add event listener
  //function(e) event.target
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
}); */

//const DOMSelectors = {
//title: document.getElementById("title"),
//artist: document.getElementById("artist"),
//url: document.getElementById("url"),
//display: document.getElementById("display"),
//};

/* DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
}); */

// step 1- get data from user, take the data save to it a variable
// step 2- create an object from that
// step 3 - push that data into html

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
