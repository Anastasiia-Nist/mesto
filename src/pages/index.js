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
  popupTrash,
  popupAvatar,
  avatar,
  avatarForm,
} from "../utils/constants.js";

import { validationOptions } from "../utils/arrays.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { Api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
// API
const dataApi = {
  authorization: "3bc753b1-d1b4-4fd5-b226-ffa03d509b4a",
};
//API
const api = new Api(dataApi);
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

const avatarFormValid = new FormValidator(validationOptions, avatarForm);
avatarFormValid.enableValidation();

//открытие попапа User
profileButtonEdit.addEventListener("click", () => {
  popupUser.open();
  profileFormValid.toggleButtonState();
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
  handleFormSubmit: (data) => {
    renderLoading(true, profileForm.querySelector(".form__button-save")); //UX
    api
      .patchUserInfo(data)
      .then(() => {
        profileInfo.setUserInfo(data.name, data.career);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, profileForm.querySelector(".form__button-save"));
      });
  },
});

popupProfileForm.setEventListeners();

// функция создания карточки
const createCard = (data, template) => {
  const card = new Card(
    data,
    template,
    handleCardClick,
    () => handleOpenpopupDelete(card),
    handleLikeCard,
    handleDislikeCard
  );
  return card.createCard();
};

//отрисовка template (добавление карточек из коробки)
const initialCardsList = new Section(
  {
    renderer: (item) => {
      const initialsCard = createCard(item, "#template-card", handleCardClick);
      initialCardsList.addItem(initialsCard);
    },
  },
  cardList
);
// добавление аватара из сервера при загрузке страницы
api
  .getUserInfo()
  .then((result) => {
    avatar.src = result.avatar;
    profileInfo.setUserInfo(result.name, result.about);
  })
  .catch((err) => {
    console.log(err);
  });
// добавление карточек из сервера при загрузке страницы
api
  .getInitialCards()
  .then((result) => {
    initialCardsList.generateCard(result);
  })
  .catch((err) => {
    console.log(err);
  });

// добавление новой карточки из формы
const popupCreateCardForm = new PopupWithForm({
  popup: popupCards,
  handleFormSubmit: (item) => {
    renderLoading(true, cardForm.querySelector(".form__button-save")); //UX
    api
      .postNewCard(item)
      .then((result) => {
        const newCard = createCard(result, "#template-card", handleCardClick);
        initialCardsList.addItem(newCard);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, cardForm.querySelector(".form__button-save"));
      });
  },
});
popupCreateCardForm.setEventListeners();

// удаление карточки
const verificationDelete = (card) => {
  api
    .deleteCard(card._cardId)
    .then(() => {
      card.deleteCard();
      popupDeleteForm.close();
    })
    .catch((err) => {
      console.log(err);
    });
};
const popupDeleteForm = new PopupWithConfirmation(
  popupTrash,
  verificationDelete
);
popupDeleteForm.setEventListeners();

// проверка перед удалением карточки
const handleOpenpopupDelete = (card) => {
  popupDeleteForm.open();
  popupDeleteForm.getValues(card); // сбор данных карты, которую решил удалить пользователь
};

const handleLikeCard = (cardId, counter) => {
  api
    .likeCard(cardId)
    .then((result) => {
      counter.textContent = result.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleDislikeCard = (cardId, counter) => {
  api
    .dislikeCard(cardId)
    .then((result) => {
      counter.textContent = result.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
};

// попап аватар
const popupAvatarForm = new PopupWithForm({
  popup: popupAvatar,
  handleFormSubmit: (item) => {
    renderLoading(true, avatarForm.querySelector(".form__button-save")); //UX
    api
      .patchUserAvatar(item)
      .then(() => {
        avatar.src = item.link;
        popupAvatarForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, avatarForm.querySelector(".form__button-save"));
      });
  },
});

avatar.addEventListener("click", () => {
  popupAvatarForm.open();
  avatarFormValid.toggleButtonState();
  avatarFormValid.hiddenAllErrors()
});

popupAvatarForm.setEventListeners();

// UX
const renderLoading = (isLoading, submitButton) => {
  if (isLoading) {
    if (submitButton.textContent.length >= 9) {
      submitButton.textContent = "Сохранение...";
    } else {
      submitButton.textContent = "Создание...";
    }
  } else {
    if (submitButton.textContent.length >= 12) {
      submitButton.textContent = "Сохранить";
    } else {
      submitButton.textContent = "Создать";
    }
  }
};
