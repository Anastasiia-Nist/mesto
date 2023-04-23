//попапы
export const popupProfile = document.querySelector(".popup-profile");
export const popupCards = document.querySelector(".popup-cards");
export const popupImage = document.querySelector(".popup-image");
export const popupTrash = document.querySelector(".popup-trash");
export const popupAvatar = document.querySelector(".popup-avatar");
export const avatar = document.querySelector(".profile__avatar");
export const avatarForm = document.forms.AvatarForm;

// попап большой картинки
export const cardImage = document.querySelector(".popup-image__large-image");
export const cardName = document.querySelector(".popup-image__title-image");

//форма User
export const profileName = document.querySelector(".profile__name");
export const profileCareer = document.querySelector(".profile__career");
export const profileForm = document.forms.UserInfoForm;
export const nameInput = document.querySelector(".form__input_type_name");
export const careerInput = document.querySelector(".form__input_type_career");

// карточки
export const cardList = document.querySelector(".cards");

// форма добавления карточек
export const cardForm = document.forms.CardForm;

//кнопки
export const profileButtonEdit = document.querySelector(".profile__button-edit");
export const cardsButtonAdd = document.querySelector(".profile__button-add");

// API
export const dataApi = {
    baseUrl: "https://nomoreparties.co/v1/cohort-64/",
    headers: {
        authorization: "3bc753b1-d1b4-4fd5-b226-ffa03d509b4a",
        "Content-Type": "application/json",
      },
  };