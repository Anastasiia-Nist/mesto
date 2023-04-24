import "./index.css";

import {
  popupProfile,
  popupCards,
  popupImage,
  profileName,
  profileCareer,
  profileForm,
  cardForm,
  cardList,
  profileButtonEdit,
  cardsButtonAdd,
  popupTrash,
  popupAvatar,
  avatar,
  avatarForm,
  dataApi,
} from "../utils/constants.js";

import { validationOptions } from "../utils/arrays.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { Api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

// переменная для хранения ID пользователя
let userID;

//API
const api = new Api(dataApi);

// попапы
const popupPicture = new PopupWithImage(popupImage);
popupPicture.setEventListeners();

const profileInfo = new UserInfo(profileName, profileCareer, avatar);

// валидация
const profileFormValid = new FormValidator(validationOptions, profileForm);
profileFormValid.enableValidation();

const cardFormValid = new FormValidator(validationOptions, cardForm);
cardFormValid.enableValidation();

const avatarFormValid = new FormValidator(validationOptions, avatarForm);
avatarFormValid.enableValidation();

// API добавление информации при загрузке страницы из сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([infoUser, infoCard]) => {
    userID = infoUser._id;
    profileInfo.setUserInfo(infoUser);
    initialCardsList.generateCard(infoCard);
  })
  .catch((err) => {
    console.log(err);
  });

//открытие попапа User
profileButtonEdit.addEventListener("click", () => {
  popupProfileForm.open();
  profileFormValid.toggleButtonState();
  popupProfileForm.setInputValues(profileInfo.getUserInfo()); //крутая подсказка! Спасибо)
  profileFormValid.hiddenAllErrors();
});

// API форма редактирования профиля
const popupProfileForm = new PopupWithForm({
  popup: popupProfile,
  handleFormSubmit: (data) => {
    return api
      .patchUserInfo(data)
      .then((result) => {
        profileInfo.setUserInfo(result);
        popupProfileForm.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

popupProfileForm.setEventListeners();

//открытие попапа с формой добавления карточек
cardsButtonAdd.addEventListener("click", () => {
  popupCreateCardForm.open();
  cardFormValid.toggleButtonState();
});

// функция открытия попапа с картинкой
const handleCardClick = (name, link) => {
  popupPicture.open(name, link);
};

// функция создания карточки
const createCard = (data, template) => {
  const card = new Card(
    data,
    template,
    handleCardClick,
    () => handleOpenpopupDelete(card),
    handleLikeCard,
    handleDislikeCard,
    userID
  );
  return card.createCard();
};

// отрисовка template (добавление карточек из коробки)
const initialCardsList = new Section(
  {
    renderer: (item) => {
      const initialsCard = createCard(item, "#template-card", handleCardClick);
      initialCardsList.addItem(initialsCard);
    },
  },
  cardList
);

// API добавление новой карточки из формы
const popupCreateCardForm = new PopupWithForm({
  popup: popupCards,
  handleFormSubmit: (item) => {
    return api
      .postNewCard(item)
      .then((result) => {
        const newCard = createCard(result, "#template-card", handleCardClick);
        initialCardsList.addItem(newCard);
        popupCreateCardForm.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
popupCreateCardForm.setEventListeners();

// API удаление карточки
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

// API лайк и дизлайк карточки
const handleLikeCard = (card) => {
  api
    .likeCard(card._cardId)
    .then((result) => {
      card.toggleLike();
      card._counter.textContent = result.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleDislikeCard = (card) => {
  api
    .dislikeCard(card._cardId)
    .then((result) => {
      card.toggleLike();
      card._counter.textContent = result.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
};

// API попап аватар
const popupAvatarForm = new PopupWithForm({
  popup: popupAvatar,
  handleFormSubmit: (item) => {
    return api
      .patchUserAvatar(item)
      .then(() => {
        profileInfo.getUserAvatar(item);
        popupAvatarForm.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

avatar.addEventListener("click", () => {
  popupAvatarForm.open();
  avatarFormValid.toggleButtonState();
  avatarFormValid.hiddenAllErrors();
});

popupAvatarForm.setEventListeners();
