//Slide show
// Tạo một div với lớp "carousel-inner"
const carouselInner = document.createElement("div");
carouselInner.className = "carousel-inner";

// Danh sách các hình ảnh
const imageSources = [
  "../assets/images/landingpage/slideshow/img_slider_2.webp",
  "../assets/images/landingpage/slideshow/img_slider_3.webp",
  "../assets/images/landingpage/slideshow/img_slider_4.webp",
  "../assets/images/landingpage/slideshow/img_slider_5.webp",
  "../assets/images/landingpage/slideshow/img_slider_6.webp",
];

// Tạo các phần tử item cho carousel
for (let i = 0; i < imageSources.length; i++) {
  const item = document.createElement("div");
  item.className = "carousel-item";
  if (i === 0) {
    item.className += " active";
  }

  const img = document.createElement("img");
  img.src = imageSources[i];
  img.className = "d-block w-100";
  img.alt = "...";

  item.appendChild(img);
  carouselInner.appendChild(item);
}

// Thêm "carousel-inner" vào div chứa carousel (có id là "Slideshow")
const slideshowContainer = document.getElementById("Slideshow");
slideshowContainer.appendChild(carouselInner);
//Category
// Create and add the category carousel

// filter
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".project");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = button.id;
      if (filter === "all") {
        projects.forEach((project) => (project.style.display = "block"));
      } else {
        projects.forEach((project) => {
          if (project.classList.contains(filter)) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      }
    });
  });
});

$(document).ready(function () {
  $(".filter-button").click(function () {
    const filter = $(this).attr("id");
    $(".filter-button").removeClass("active"); // Loại bỏ lớp "active" từ tất cả các nút
    $(this).addClass("active"); // Thêm lớp "active" cho nút được chọn

    if (filter === "all") {
      $(".project").addClass("show");
    } else {
      $(".project").removeClass("show");
      $(".project." + filter).addClass("show");
    }
  });
});
//popup
const mconcept_shows = document.querySelectorAll("#mconcept-show");
const closeBtn = document.querySelector(".js-close-btn");
const modal = document.querySelector(".js-modal");
const modal_container = document.querySelector(".js-modal-container");

function showVideoPopup() {
  modal.classList.add("open");
}
function closeVideoPopup() {
  modal.classList.remove("open");
}
closeBtn.addEventListener("click", closeVideoPopup);
for (const mconcept_show of mconcept_shows) {
  mconcept_show.addEventListener("click", showVideoPopup);
}
modal.addEventListener("click", closeVideoPopup);
modal_container.addEventListener("click", closeVideoPopup);

// Khởi tạo Swiper với hiệu ứng parallax
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

$(document).ready(function () {
  // Số lượng sản phẩm bạn muốn hiển thị ban đầu
  var initialVisibleItems = 6;
  var count = 0;

  // Ẩn các sản phẩm vượt quá số lượng ban đầu
  $(".project:gt(" + (initialVisibleItems - 1) + ")").addClass("hidden");

  // Xử lý sự kiện khi nút "Xem thêm" được nhấp
  $(".btn-more").click(function (event) {
    if (count == 0) {
      event.preventDefault();
      // Hiển thị tất cả các sản phẩm
      $(".project.hidden").removeClass("hidden");
      count += 1;
    } else {
      // Chuyển hướng đến trang mới
      window.location.href = $(this).attr("href");
    }
  });
});
