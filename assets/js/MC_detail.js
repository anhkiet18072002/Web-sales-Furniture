window.addEventListener("load", (event) => {
  selectPackage("basic");
});

let selectedPackage = null;
const packageInfo = {
  basic: {
    heading: "EZ CONCEPT - Gói cơ bản",
    subheading: "Gói nội thất cơ bản",
    image: "../assets/images/MConcept/detail/img_7.jpeg",
    bill: "../assets/images/MConcept/detail/detail_7.png",
    basePrice: 22828000,
  },
  standard: {
    heading: "EZ CONCEPT - Gói tiêu chuẩn",
    subheading: "Gói nội thất tiêu chuẩn",
    image: "../assets/images/MConcept/detail/img_8.jpeg",
    bill: "../assets/images/MConcept/detail/detail_8.png",
    basePrice: 39228000,
  },
  premium: {
    heading: "EZ CONCEPT - Gói cao cấp",
    subheading: "Gói nội thất cao cấp",
    image: "../assets/images/MConcept/detail/img_9.webp",
    bill: "../assets/images/MConcept/detail/detail_9.png",
    basePrice: 55828000,
  },
  deluxe: {
    heading: "EZ CONCEPT - Gói hoàn thiện",
    subheading: "Gói nội thất hoàn thiện",
    image: "../assets/images/MConcept/detail/img_10.webp",
    bill: "../assets/images/MConcept/detail/detail_10.png",
    basePrice: 88416000,
  },
};

function selectPackage(package) {
  if (selectedPackage) {
    selectedPackage.classList.remove("selected");
  }
  selectedPackage = document.getElementById(package);
  selectedPackage.classList.add("selected");

  const packageHeading = document.getElementById("package-heading");
  packageHeading.textContent = packageInfo[package].heading;
  const packageDescription = document.getElementById("package-subheading");
  packageDescription.textContent = packageInfo[package].subheading;
  const Image = document.getElementById("package-image");
  Image.src = packageInfo[package].image;
  const Bill = document.getElementById("package-bill");
  Bill.src = packageInfo[package].bill;
  updatePrice();
}

function updatePrice() {
  const beds = parseInt(document.getElementById("beds").value);
  const kitchen = parseInt(document.getElementById("kitchen").value);

  let totalPrice = packageInfo[selectedPackage.id].basePrice;

  if (beds === 2) {
    totalPrice += (totalPrice * 5) / 100;
  } else if (beds === 3) {
    totalPrice += (totalPrice * 7.5) / 100;
  }

  if (kitchen === 1) {
    totalPrice *= 1.5;
  }

  const priceElement = document.getElementById("package-price");
  priceElement.textContent = totalPrice.toLocaleString() + "đ";
}
