const DOMSelectors = {
  display: document.querySelector("#display"),
  form: document.querySelector("#form"),
  albumname: document.getElementById("albumname"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
};

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  let albumname = DOMSelectors.albumname.value;
  let artist = DOMSelectors.artist.value;
  let url = DOMSelectors.url.value;
  console.log(albumname);
  console.log(artist);
  console.log(url);

  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="card-box">
  <h2 class="card-albumtitle">${albumname}</h2>
  <h3 class="card-artist">${artist}</h3>
  <img class="albumimg" src="${url}" alt="this is the album cover">
  <button class="rmv-button">REMOVE</button>
  </div>`
  );

  clearvalues();

  rmvbutton();
});

function clearvalues() {
  DOMSelectors.albumname.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
}

function rmvbutton() {
  const rmv = document.querySelectorAll(".rmv-button");
  rmv.forEach((element) => {
    element.addEventListener("click", function (btn) {
      btn.target.parentElement.remove();
    });
  });
}
