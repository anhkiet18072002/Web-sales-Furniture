function loadHTML(url, element) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(`${element}`).innerHTML = data;
    });
}

function loadCSS(url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  document.head.appendChild(link);
}
function loadIcon(url) {
  var link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = url;
  link.sizes = "16x16";
  document.head.appendChild(link);
}
function loadJS(url) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  document.head.appendChild(script);
}

loadIcon(
  "https://theme.hstatic.net/1000280685/1000722794/14/favicon.png?v=1307"
);
loadHTML("./header.html", "header");
loadHTML("./footer.html", "footer");
loadCSS("../assets/css/header.css");
loadCSS("../assets/css/footer.css");
loadJS("../assets/js/header.js");
