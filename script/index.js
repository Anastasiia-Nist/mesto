const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//
const CARDS_LIST = document.querySelector(".cards");
const CARD = document.querySelector("#card");
const TEMPLATE_CARD = document.querySelector("#template-card");
const CARD_INFO = document.querySelector(".card__info");

//попапы
const popup = document.querySelector(".popup");
const popupProfile = document.querySelector(".popup__profile");
const popupCards = document.querySelector(".popup__cards");
const popupImage = document.querySelector(".popup__image");

//кнопки
const profileButtonEdit = document.querySelector(".profile__button-edit");
const popupButtonCloseProfile = document.querySelector(".popup__button-close-profile");
const popupButtonCloseCards = document.querySelector(".popup__button-close-cards");
const popupButtonCloseImage = document.querySelector(".popup__button-close-image");
const cardsButtonAdd = document.querySelector(".profile__button-add");

//форма User
const profileName = document.querySelector(".profile__name");
const profileCareer = document.querySelector(".profile__career");
const formProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__input_type_name");
const careerInput = document.querySelector(".popup__input_type_career");

// форма добавления карточек
const formCards = document.querySelector(".popup__form-cards");

const cardInput = document.querySelector(".popup__input_card_name");
const urlInput = document.querySelector(".popup__input_card_img");
// попап большой картинки
const cardImage = document.querySelector(".popup__image-large");
const cardName = document.querySelector(".popup__image-title");

//открытие попапа
function openedPopup(popup) {
  popup.classList.add("popup_opened");
}
//закрытие попапа
function closedPopup(popup) {
  popup.classList.remove("popup_opened");
}

// попап блока User
function handleProfilePopup() {
  openedPopup(popupProfile);
  nameInput.value = profileName.textContent;
  careerInput.value = profileCareer.textContent;
}

//отправка формы блока User
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCareer.textContent = careerInput.value;
  closedPopup(popupProfile);
}

//добавление 6 карточек из массива initialCards на страничку

function createCard(name, link) {
  const defaultCard = TEMPLATE_CARD.content.querySelector(".card");
  const newCard = defaultCard.cloneNode(true);

  const newCardImg = newCard.querySelector(".card__img");
  const newCardTitle = newCard.querySelector(".card__name");

  newCardImg.src = link;
  newCardImg.alt = name;

  newCardTitle.textContent = name;

  //лайки и корзина
  const newCardLikeButton = newCard.querySelector(".card__button-like");
  const newCardTrashButton = newCard.querySelector(".card__button-trash");

  function likeCard() {
    newCardLikeButton.classList.toggle("card__button-like_active");
  }

  function deleteCard() {
    newCard.remove();
  }
  
  //попап с большой картинкой
  function openImage() {
    openedPopup(popupImage);
    cardImage.src = link;
    cardImage.alt = name;
    cardName.textContent = name;
  }

  //слушатели на карточке
  newCardLikeButton.addEventListener("click", likeCard);
  newCardTrashButton.addEventListener("click", deleteCard);
  newCardImg.addEventListener("click", openImage);

  return newCard;
}

function addAllCard() {
  initialCards.forEach((card) => {
    const newCard = createCard(card.name, card.link);
    CARDS_LIST.append(newCard);
  });
}

addAllCard();

//открытие попапа User
profileButtonEdit.addEventListener("click", handleProfilePopup);

//открытие попапа с формой добавления карточек
cardsButtonAdd.addEventListener("click", function () {
  openedPopup(popupCards);
});

//отправка формы User
formProfile.addEventListener("submit", handleFormSubmit);

//отправка формы добавления карточек
formCards.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCard = createCard(cardInput.value, urlInput.value);
  CARDS_LIST.prepend(newCard);
  closedPopup(popupCards);
  evt.target.reset();
});

// все кнопки X закрытия попапа
popupButtonCloseProfile.addEventListener("click", function () {
  closedPopup(popupProfile);
});
popupButtonCloseCards.addEventListener("click", function () {
  closedPopup(popupCards);
});
popupButtonCloseImage.addEventListener("click", function () {
  closedPopup(popupImage);
});
