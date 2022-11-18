const DOMSelectors = {
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
});

DOMSelectors.form.insertAdjacentHTML("beforeend", `cards`);
