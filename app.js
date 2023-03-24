// List

const list = document.querySelector(".main--list");
const hamburgerButton = document.querySelector(".hamburger");
const shadow = document.querySelector(".shadow");

hamburgerButton.addEventListener("click", function () {
  list.classList.toggle("hidden");
  shadow.classList.toggle("hidden");
  hamburgerButton.classList.toggle("close");

  if (!cartField.classList.contains("hidden")) {
    cartField.classList.add("hidden");
  }
});

// Counter

const sign = document.querySelectorAll(".sign");
const amount = document.querySelector(".counter");

let counter = 0;

sign.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("plus")) {
      counter++;
      amount.textContent = counter;
    } else if (item.classList.contains("minus")) {
      if (counter > 0) {
        counter--;
        amount.textContent = counter;
      }
    }
  });
});

// Cart

const shoppingCart = document.querySelector(".cart--icon");
const productAmount = document.querySelector(".product--amount");
const cartField = document.querySelector(".cart");
const addButton = document.querySelector(".add");
const cartContainer = document.querySelector(".cart--product--container");

addButton.addEventListener("click", function () {
  const cartContentFilled = `
  <div class="cart--product--description">        
    <img
      src="images/image-product-1.jpg"
      alt="Sneakers"
      class="cart--product--image"
    />
    <h3>
      Fall Limited Edition Sneakers $125.00 x
      <a class="cart--amount">${counter}</a> <a class="total--amount">$${(
    counter * 125
  ).toFixed(2)}
      </a>
    </h3>
    <img src="images/icon-delete.svg" alt="Delete" class="delete" />
    <button class="checkout">Checkout</button>
  </div>
  `;

  const cartContentEmpty = `<h1 class="empty">Your cart is empty.</h1>`;

  if (counter > 0) {
    cartContainer.innerHTML = cartContentFilled;
    productAmount.textContent = counter;
    productAmount.classList.remove("hidden");
    counter = 0;
    amount.textContent = counter;
  }

  const deleteButton = document.querySelector(".delete");

  deleteButton?.addEventListener("click", function () {
    cartContainer.innerHTML = cartContentEmpty;
    productAmount.textContent = counter;
    productAmount.classList.add("hidden");
  });
});

shoppingCart.addEventListener("click", function () {
  cartField.classList.toggle("hidden");
});

// Gallery

const arrows = document.querySelectorAll(".arrow");
const productImage = document.querySelector(".product--image");

let currentImageIndex = 1;

// Mobile gallery
arrows.forEach(function (item) {
  item.addEventListener("click", function () {
    if (item.classList.contains("next")) {
      currentImageIndex++;
      if (currentImageIndex > 4) {
        currentImageIndex = 1;
      }
    } else if (item.classList.contains("previous")) {
      currentImageIndex--;
      if (currentImageIndex < 1) {
        currentImageIndex = 4;
      }
    }
    productImage.src = `images/image-product-${currentImageIndex}.jpg`;
  });
});

// Desktop Gallery

const smallImages = document.querySelectorAll(".small--image");

smallImages.forEach(function (item, index) {
  if (index === 0) {
    item.classList.add("active");
  }
  item.addEventListener("click", function () {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    const image = item;
    image.classList.add("active");

    productImage.src = image.src;
  });
});

// Lightbox Gallery

const lightbox = document.querySelector(".lightbox");
const lightboxClose = document.querySelector(".lightbox--close");
const lightboxImages = document.querySelectorAll(".lightbox--images");
const lightboxProductImage = document.querySelector(
  ".lightbox--product--image"
);
const lightboxArrows = document.querySelectorAll(".lightbox--arrow");

let itemIndex;
let currentItemIndex;

productImage.addEventListener("click", function () {
  if (window.innerWidth > 880) {
    lightbox.classList.remove("hidden");
  } else {
    lightbox.classList.add("hidden");
  }

  lightboxImages.forEach(function (item, index) {
    if (index === 0) {
      item.classList.add("lightbox--active");
    }

    item.addEventListener("click", function () {
      itemIndex = index + 1;
      currentItemIndex = itemIndex;

      const lightboxActive = document.querySelector(".lightbox--active");
      if (lightboxActive) {
        lightboxActive.classList.remove("lightbox--active");
      }
      item.classList.add("lightbox--active");

      lightboxProductImage.src = item.src;
    });

    lightboxClose.addEventListener("click", function () {
      lightbox.classList.add("hidden");
      item.classList.remove("lightbox--active");
    });
  });
});

lightboxArrows.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    if (!currentItemIndex) {
      currentItemIndex = 1;
    }

    if (arrow.classList.contains("lightbox--next")) {
      currentItemIndex++;
      if (currentItemIndex > 4) {
        currentItemIndex = 1;
      }
    } else if (arrow.classList.contains("lightbox--previous")) {
      currentItemIndex--;
      if (currentItemIndex < 1) {
        currentItemIndex = 4;
      }
    }

    lightboxProductImage.src = `images/image-product-${currentItemIndex}.jpg`;
  });
});
