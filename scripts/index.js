//попапы
const popupProfile = document.querySelector(".popup-profile");
const popupCards = document.querySelector(".popup-cards");
const popupImage = document.querySelector(".popup-image");

//кнопки
const profileButtonEdit = document.querySelector(".profile__button-edit");
const popupProfileButtonClose = document.querySelector(".popup__button-close-profile");
const popupCardsButtonClose = document.querySelector(".popup__button-close-cards");
const popupImageButtonClose = document.querySelector(".popup__button-close-image");
const cardsButtonAdd = document.querySelector(".profile__button-add");

//форма User
const profileName = document.querySelector(".profile__name");
const profileCareer = document.querySelector(".profile__career");
const formProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__input_type_name");
const careerInput = document.querySelector(".popup__input_type_career");

// карточки
const cardList = document.querySelector(".cards");
const template = document.querySelector("#template-card");

// форма добавления карточек
const formCards = document.querySelector(".popup__form-cards");

const cardInput = document.querySelector(".popup__input_card_name");
const urlInput = document.querySelector(".popup__input_card_img");
// попап большой картинки
const cardImage = document.querySelector(".popup-image__large-image");
const cardName = document.querySelector(".popup-image__title-image");

//открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
//закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// попап блока User
function openProfilePopup() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  careerInput.value = profileCareer.textContent;
}

//отправка формы блока User (редактирование имени и карьеры)
function handleUserFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCareer.textContent = careerInput.value;
  closePopup(popupProfile);
}

//добавление 6 карточек из массива initialCards на страничку

function createCard(name, link) {
  const defaultCard = template.content.querySelector(".card");
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
  function openImagePopup() {
    openPopup(popupImage);
    cardImage.src = link;
    cardImage.alt = name;
    cardName.textContent = name;
  }

  //слушатели на карточке
  newCardLikeButton.addEventListener("click", likeCard);
  newCardTrashButton.addEventListener("click", deleteCard);
  newCardImg.addEventListener("click", openImagePopup);

  return newCard;
}

function addInitialCard() {
  initialCards.forEach((card) => {
    const newCard = createCard(card.name, card.link);
    cardList.append(newCard);
  });
}

addInitialCard();

//отправка формы блока Cards (добавление карточки)
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = createCard(cardInput.value, urlInput.value);
  cardList.prepend(newCard);
  closePopup(popupCards);
  evt.target.reset();
}

//открытие попапа User
profileButtonEdit.addEventListener("click", openProfilePopup);

//открытие попапа с формой добавления карточек
cardsButtonAdd.addEventListener("click", function () {
  openPopup(popupCards);
});

//отправка формы блока User
formProfile.addEventListener("submit", handleUserFormSubmit);

//отправка формы блока Cards
formCards.addEventListener("submit", handleCardFormSubmit);

// все кнопки X закрытия попапа
popupProfileButtonClose.addEventListener("click", function () {
  closePopup(popupProfile);
});
popupCardsButtonClose.addEventListener("click", function () {
  closePopup(popupCards);
});
popupImageButtonClose.addEventListener("click", function () {
  closePopup(popupImage);
});
