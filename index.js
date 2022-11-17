const DOMSelectors = {
  form: document.querySelector("#form"),
  title: document.querySelector("title"),
  artist: document.getElementById("artist"),
  url: document.querySelectorAll("url"),
};

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  let title = DOMSelectors.title.submit;
  let artist = DOMSelectors.artist.submit;
  let url = DOMSelectors.url.submit;
});
