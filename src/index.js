// index.js

import "./styles/index.css";

const newWish = document.querySelector(".new-wish");
const popupNewWish = document.querySelector(".popup-type-new-wish");

const editProfileButton = document.querySelector(".edit-profile-button");

const popups = document.querySelectorAll(".popup");

const editProfilePopup = document.querySelector(".popup-edit-profile");
const profileEditForm = document.forms["edit-profile-form"];
const overlay = document.querySelector(".overlay");

function showPopup(popup) {
  popup.classList.add("popup_is-opened");
  overlay.classList.add("overlay-active");
  document.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closePopup(popup);
    }
    document.addEventListener("keydown", escHandler);
  });
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  overlay.classList.remove("overlay-active");
}

newWish.addEventListener("click", () => {
  showPopup(popupNewWish);
});

editProfileButton.addEventListener("click", () => {
  showPopup(editProfilePopup);
});

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-button")) {
      closePopup(popup);
    }
  });
});

// --------------------------------------------------

const userName = document.querySelector(".user-name");
const inputName = editProfilePopup.querySelector(".popup__input_type_name");

function handlesFormSubmit(event) {
  event.preventDefault();
  const name = inputName.value;
  userName.textContent = name;
  closePopup(editProfilePopup);
}

editProfilePopup.addEventListener("submit", handlesFormSubmit);

editProfileButton.addEventListener("click", () => {
  inputName.value = userName.textContent;
});

// --------------------------------------------------

const cardList = document.querySelector(".card-list");
const newWishForm = document.forms["new-wish-form"];
const nameWish = newWishForm.elements["name"];
const priceWish = newWishForm.elements["price"];
const linkImageWish = newWishForm.elements["image-link"];
const buyLinkWish = newWishForm.elements["buy-link"];
const emptyListCard = document.querySelector(".empty-list-active");

const addWishButton = newWishForm.querySelector(".new-wish-popup__save-button");

function createCard(data, removeCard) {
  const cardTemplate = document.querySelector(".card-template").content;
  const cardClone = cardTemplate.cloneNode(true);
  const cardTitle = cardClone.querySelector(".card-template__name");
  const cardPrice = cardClone.querySelector(".card-template__price");
  const cardImage = cardClone.querySelector(".card-template__image");
  const cardLink = cardClone.querySelector(".card-template__link");
  const deleteButton = cardClone.querySelector(".delete-button");
  deleteButton.addEventListener("click", removeCard);
  cardTitle.textContent = data.name;
  cardPrice.textContent = data.price;
  cardImage.src = data.imageLink;
  cardImage.alt = data.name;
  cardLink.href = data.buyLink;

  if (!data.name || !data.price || !data.imageLink || !data.buyLink) {
    alert("Не все поля заполнены. Невозможно создать карточку.");
    return "";
  }

  clearForm();

  return cardClone;
}

addWishButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const card = {
    name: nameWish.value,
    price: priceWish.value,
    imageLink: linkImageWish.value,
    buyLink: buyLinkWish.value,
  };
  const cardElement = createCard(card, removeCard);
  cardList.prepend(cardElement);

  emptyListCard.classList.add("card-hidden");

  closePopup(popupNewWish);
});

// --------------------------------------------------

function removeCard(event) {
  event.target.closest(".card-template__item").remove();
  if (cardList.childElementCount === 1) {
    emptyListCard.classList.remove("card-hidden");
  }
}

// --------------------------------------------------

function clearForm() {
  nameWish.value = "";
  priceWish.value = "";
  linkImageWish.value = "";
  buyLinkWish.value = "";
}

// --------------------------------------------------

function escHandler(event) {
  if (event.key === "Escape") {
    console.log(event.key)
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}

