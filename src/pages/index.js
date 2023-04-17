import "./index.css";

import {
  popupProfile,
  popupCards,
  popupImage,
  profileName,
  profileCareer,
  profileForm,
  cardForm,
  nameInput,
  careerInput,
  cardList,
  profileButtonEdit,
  cardsButtonAdd,
} from "../utils/constants.js";

import { initialCards, validationOptions } from "../utils/arrays.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";

// попапы
const popupUser = new Popup(popupProfile);
popupUser.setEventListeners();

const popupPicture = new PopupWithImage(popupImage);
popupPicture.setEventListeners();

const popupCard = new Popup(popupCards);
popupCard.setEventListeners();

//
const profileInfo = new UserInfo(profileName, profileCareer);

// валидация
const profileFormValid = new FormValidator(validationOptions, profileForm);
profileFormValid.enableValidation();

const cardFormValid = new FormValidator(validationOptions, cardForm);
cardFormValid.enableValidation();

//открытие попапа User
profileButtonEdit.addEventListener("click", () => {
  popupUser.open();
  const { name, career } = profileInfo.getUserInfo();
  nameInput.value = name; // profileForm.name.value = name;
  careerInput.value = career; // profileForm.career.value = career;
  profileFormValid.hiddenAllErrors();
});

//открытие попапа с формой добавления карточек
cardsButtonAdd.addEventListener("click", () => {
  popupCard.open();
  cardFormValid.toggleButtonState();
});

// функция открытия попапа с картинкой
const handleCardClick = (name, link) => {
  popupPicture.open(name, link);
};

// форма редактирования профиля 
const popupProfileForm = new PopupWithForm({
  popup: popupProfile,
  handleFormSubmit: ({ name, career }) => {
    profileInfo.setUserInfo(name, career);
  },
});

popupProfileForm.setEventListeners();

// функция создания карточки
const createCard = (data, template, handleCardClick) => {
  const card = new Card(data, template, handleCardClick);
  return card.createCard();
};

//отрисовка template (добавление карточек из коробки)
const initialCardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const initialsCard = createCard(
        item,
        "#template-card",
        handleCardClick
      );
      initialCardsList.addItem(initialsCard);
    },
  },
  cardList
);

initialCardsList.generateCard();

// добавление новой карточки из формы
const popupCreateCardForm = new PopupWithForm({
  popup: popupCards,
  handleFormSubmit: (data) => {
    const newCard = createCard(
      data,
      "#template-card",
      handleCardClick
    );
    initialCardsList.addItem(newCard);
  }, 
});
popupCreateCardForm.setEventListeners();
