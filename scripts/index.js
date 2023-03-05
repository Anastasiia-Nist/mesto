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
const formProfile = document.querySelector(".form-profile");
const nameInput = document.querySelector(".form__input_type_name");
const careerInput = document.querySelector(".form__input_type_career");

// карточки
const cardList = document.querySelector(".cards");
const template = document.querySelector("#template-card");

// форма добавления карточек
const formCards = document.querySelector(".form-cards");

const cardInput = document.querySelector(".form__input_card_name");
const urlInput = document.querySelector(".form__input_card_img");
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
  popupProfile.addEventListener("mousedown", (evt) => {
    closePopupOnClickOnOverlay(evt);
  });
}

//отправка формы блока User (редактирование имени и карьеры)
function handleUserFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCareer.textContent = careerInput.value;
  closePopup(popupProfile);
}

//добавление новой карточки
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
    popupImage.addEventListener("mousedown", (evt) => {
      closePopupOnClickOnOverlay(evt);
    });
  }

  //слушатели на карточке
  newCardLikeButton.addEventListener("click", likeCard);
  newCardTrashButton.addEventListener("click", deleteCard);
  newCardImg.addEventListener("click", openImagePopup);

  return newCard;
}

//добавление 6 карточек из массива initialCards на страничку
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
  popupCards.addEventListener("mousedown", (evt) => {
    closePopupOnClickOnOverlay(evt);
  });
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

// закрытие попапов при клике на оверлей
function closePopupOnClickOnOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget);
  }
}

// закрытие попапов нажатием esc
function closePopupEscape() {
  window.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      const popups = Array.from(document.querySelectorAll(".popup"));
      popups.forEach((elem) => {
        if (elem.classList.contains("popup_opened")) {
          closePopup(elem);
        }
      });
    }
  });
}
closePopupEscape();

// опции валидации
const validationOptions = {
  formSelector: ".form",
  submitSelector: ".form__button-save",
  inputSelector: ".form__input",
  inputSectionSelector: ".form__section",
  inputErrorSelector: ".form__input-error",
  inputErrorClass: "form__input-error_active",
  inputInValide: "form__input_invalid"
};
// вызов функции валидации
enableValidation(validationOptions);

// слушатель на все формы в html
const forms = Array.from(document.querySelectorAll(".form"));

forms.forEach((form) => {
  const submitButton = form.querySelector(".form__button-save");
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    form.reset(); // очистка полей
    disableButton(submitButton); // неактивная кнопка сохранить/создать
  });
});
