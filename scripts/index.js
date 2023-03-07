//попапы
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector(".popup-profile");
const popupCards = document.querySelector(".popup-cards");
const popupImage = document.querySelector(".popup-image");

//кнопки
const profileButtonEdit = document.querySelector(".profile__button-edit");
const cardsButtonAdd = document.querySelector(".profile__button-add");

//форма User
const profileName = document.querySelector(".profile__name");
const profileCareer = document.querySelector(".profile__career");
const profileForm = document.forms.UserInfoForm;
const nameInput = document.querySelector(".form__input_type_name");
const careerInput = document.querySelector(".form__input_type_career");

// карточки
const cardList = document.querySelector(".cards");
const template = document.querySelector("#template-card");

// форма добавления карточек
const cardForm = document.forms.CardForm;

const cardInput = document.querySelector(".form__input_card_name");
const urlInput = document.querySelector(".form__input_card_img");
// попап большой картинки
const cardImage = document.querySelector(".popup-image__large-image");
const cardName = document.querySelector(".popup-image__title-image");

//открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape);
}
//закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape);
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

  function toggleLike() {
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
  newCardLikeButton.addEventListener("click", toggleLike);
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
});

//отправка формы блока User
profileForm.addEventListener("submit", handleUserFormSubmit);

//отправка формы блока Cards
cardForm.addEventListener("submit", handleCardFormSubmit);

// закрытие попапов при клике на оверлей и на все Х
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__button-close')) {
        closePopup(popup)
      }
  })
})

// закрытие попапов нажатием esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

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
