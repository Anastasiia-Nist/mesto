import { initialCards, validationOptions } from "./arrays.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

//попапы
const popups = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup-profile");
const popupCards = document.querySelector(".popup-cards");
const popupImage = document.querySelector(".popup-image");
// попап большой картинки
const cardImage = document.querySelector(".popup-image__large-image");
const cardName = document.querySelector(".popup-image__title-image");

//форма User
const profileName = document.querySelector(".profile__name");
const profileCareer = document.querySelector(".profile__career");
const profileForm = document.forms.UserInfoForm;
const nameInput = document.querySelector(".form__input_type_name");
const careerInput = document.querySelector(".form__input_type_career");

// карточки
const cardList = document.querySelector(".cards");

// форма добавления карточек
const cardForm = document.forms.CardForm;
const cardInput = document.querySelector(".form__input_card_name");
const urlInput = document.querySelector(".form__input_card_img");

//кнопки
const profileButtonEdit = document.querySelector(".profile__button-edit");
const cardsButtonAdd = document.querySelector(".profile__button-add");
const btnSabmitCardForm = cardForm.querySelector(`.${validationOptions.submitSelector}`)


//открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}
//закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape); //оптимизация удаление слушателя
}

//попап с большой картинкой
function openImagePopup(name, link) {
  openPopup(popupImage);
  cardImage.src = link;
  cardImage.alt = name;
  cardName.textContent = name;
}

// попап блока User
function openProfilePopup() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  careerInput.value = profileCareer.textContent;
  profileFormValid.hiddenAllErrors();
}

//отправка формы блока User (редактирование имени и карьеры)
function handleUserFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCareer.textContent = careerInput.value;
  closePopup(popupProfile);
}

//отправка формы блока Cards (добавление карточки)
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(cardInput.value, urlInput.value, "#template-card", openImagePopup);
  cardList.prepend(newCard.createCard()); // добавление новой карточки из формы
  closePopup(popupCards);
  evt.target.reset();
  //btnSabmitCardForm.setAttribute("disabled", true) //дизаблим кнопку
  cardFormValid.toggleButtonState() //дизаблим кнопку правильно)
}

//открытие попапа User
profileButtonEdit.addEventListener("click", openProfilePopup);

//открытие попапа с формой добавления карточек
cardsButtonAdd.addEventListener("click", function () {
  openPopup(popupCards);
});

//отправка формы блока User
profileForm.addEventListener("submit", handleUserFormSubmit);

//отправка формы блока Cards
cardForm.addEventListener("submit", handleCardFormSubmit);

// закрытие попапов при клике на оверлей и на все Х
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__button-close")) {
      closePopup(popup);
    }
  });
});

// закрытие попапов нажатием esc
function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

// добавление карточек из "коробки"
for (let i = 0; i < initialCards.length; i++) {
  const newCard = new Card(
    initialCards[i].name,
    initialCards[i].link,
    "#template-card",
    openImagePopup
  );
  cardList.append(newCard.createCard());
}

// валидация
const profileFormValid = new FormValidator(validationOptions, profileForm);
profileFormValid.enableValidation();

const cardFormValid = new FormValidator(validationOptions, cardForm);
cardFormValid.enableValidation();
