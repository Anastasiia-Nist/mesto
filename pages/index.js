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
  cardInput,
  urlInput,
} from "./../utils/constants.js";

import { initialCards, validationOptions } from "./../utils/arrays.js";
import { Card } from "./../components/Card.js";
import { FormValidator } from "./../components/FormValidator.js";
import { Popup } from "./../components/Popup.js";
import { PopupWithImage } from "./../components/PopupWithImage.js";
import { UserInfo } from "./../components/UserInfo.js";
import { PopupWithForm } from "./../components/PopupWithForm.js";
import { Section } from "./../components/Section.js";

// попапы
const popupUser = new Popup(popupProfile);
popupUser.setEventListeners();

const popupPicture = new PopupWithImage(popupImage);
popupPicture.setEventListeners();

const popupCard = new Popup(popupCards);
popupCard.setEventListeners();

//
const ProfileInfo = new UserInfo(profileName, profileCareer);

// валидация
const profileFormValid = new FormValidator(validationOptions, profileForm);
profileFormValid.enableValidation();

const cardFormValid = new FormValidator(validationOptions, cardForm);
cardFormValid.enableValidation();

//открытие попапа User
profileButtonEdit.addEventListener("click", () => {
  popupUser.open();
  const { name, career } = ProfileInfo.getUserInfo();
  nameInput.value = name; // profileForm.name.value = name;
  careerInput.value = career; // profileForm.career.value = career;
  profileFormValid.hiddenAllErrors();
});

//открытие попапа с формой добавления карточек
cardsButtonAdd.addEventListener("click", () => {
  popupCard.open();
});

const popupProfileForm = new PopupWithForm({
  popupSelector: popupProfile,
  handleFormSubmit: ({ name, career }) => {
    ProfileInfo.setUserInfo(name, career);
    popupProfileForm.close();
  },
});

popupProfileForm.setEventListeners();

//отрисовка template (добавление карточек из коробки)
const cardTemplate = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(
        initialCards[item].name,
        initialCards[item].link,
        "#template-card",
        popupPicture.open.bind(popupPicture)
      );
      cardTemplate.addItem(newCard.createCard());
    },
  },
  cardList
);
cardTemplate.generateCard();



const popupCreateCardForm = new PopupWithForm({
  popupSelector: popupCards,
  handleFormSubmit: () => {
    const newCard = new Card(
      cardInput.value,
      urlInput.value,
      "#template-card",
      popupPicture.open.bind(popupPicture)
    );
    cardList.prepend(newCard.createCard());
    popupCreateCardForm.close();
    cardFormValid.toggleButtonState();

    // const cardNewTemplate = new Section(
    //   {
    //     items: {cardInput, urlInput},
    //     renderer: (item) => {
    //       const newCard = new Card(
    //         cardInput.value,
    //         urlInput.value,
    //         "#template-card",
    //         popupPicture.open.bind(popupPicture)
    //       );
    //       cardList.prepend(newCard.createCard());
    //     },
    //   },
    //   cardList
    // );
    // cardNewTemplate.generateCard();
  },
});

popupCreateCardForm.setEventListeners();

// //отправка формы блока User (редактирование имени и карьеры)
// function handleUserFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileCareer.textContent = careerInput.value;
//   popupUser.close();
// }

// //отправка формы блока Cards (добавление карточки)
// function handleCardFormSubmit(evt) {
//   evt.preventDefault();
//   const newCard = new Card(cardInput.value, urlInput.value, "#template-card", openImagePopup);
//   cardList.prepend(newCard.createCard()); // добавление новой карточки из формы
//   closePopup(popupCards);
//   evt.target.reset();
//   //btnSabmitCardForm.setAttribute("disabled", true) //дизаблим кнопку
//   cardFormValid.toggleButtonState() //дизаблим кнопку правильно)
// }

// //отправка формы блока User
// profileForm.addEventListener("submit", handleUserFormSubmit);

// //отправка формы блока Cards
// cardForm.addEventListener("submit", handleCardFormSubmit);

// // добавление карточек из "коробки"
// for (let i = 0; i < initialCards.length; i++) {
//   const newCard = new Card(
//     initialCards[i].name,
//     initialCards[i].link,
//     "#template-card",
//     popupPicture.open.bind(popupPicture)
//   );
//   cardList.append(newCard.createCard());
// }
