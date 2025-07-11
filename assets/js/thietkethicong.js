// Lặp qua các tag <a> và hidden text tương ứng để thiết lập sự kiện click
for (let i = 1; i <= 9; i++) {
    let link = document.getElementById(`link${i}`);
    let hiddenText = document.getElementById(`hiden_text${i}`);

    // Thiết lập sự kiện click cho mỗi tag <a>
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Ngừng chuyển hướng khi nhấn vào tag <a>

        var hasClickedClass = link.classList.contains("clicked");

        // Ẩn hoặc hiển thị hidden text tương ứng
        if (hiddenText.style.display === "block") {
            hiddenText.style.display = "none";
        } else {
            hiddenText.style.display = "block";
        }

        // Thay đổi màu nền của vùng chứa bằng cách thêm hoặc xóa class tương ứng
        if (hasClickedClass) {
            link.classList.remove("clicked");
        } else {
            link.classList.add("clicked");
        }
    });
}

