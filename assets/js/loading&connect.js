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
loadHTML("./loading.html", "div.loading");
loadHTML("./connect.html", "div.offline-message");
loadCSS("../assets/css/loading&connect.css");

window.addEventListener("load", function () {
  checkOnlineStatus();

  // Kiểm tra trạng thái kết nối mạng mỗi 2 giây
  setInterval(checkOnlineStatus, 2000);

  // Tắt loading page sau khi trang web đã được tải hoàn toàn
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".content-show").style.display = "block"; // Hiển thị nội dung trang web
});

function checkOnlineStatus() {
  const offlineMessage = document.querySelector("#offline-message");
  const content = document.querySelector(".content-show");

  if (navigator.onLine) {
    offlineMessage.classList.remove("show");
    content.style.display = "block"; // Hiển thị nội dung trang web
  } else {
    offlineMessage.classList.add("show");
    content.style.display = "none"; // Ẩn nội dung trang web
  }
}

function closeOfflineMessage() {
  const offlineMessage = document.querySelector("#offline-message");
  offlineMessage.classList.remove("show");
}
