const popup = document.querySelectorAll('.popup');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonClose = document.querySelectorAll('.popup__button-close');
const cardsButtonAdd = document.querySelector('.profile__button-add');
const cardButtonLike = document.querySelectorAll('.card__button-like');
const profileName =  document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const careerInput = document.querySelector('.popup__input_type_career');
//попапы
const popupProfile = document.querySelector('.popup__profile');
const popupCards = document.querySelector('.popup__cards');


//открытие попапа
function openedPopup(popup) {
    popup.classList.add('popup_opened');
    console.log('открытие');
}
//закрытие попапа
function closedPopup(popup) {
    popup.classList.remove('popup_opened');
    console.log('закрытие');
}
// все кнопки закрытия попапа 
popupButtonClose.forEach((btn) => {
    btn.addEventListener('click', function () { 
        closedPopup(popup);
    });
});

// попап блока профиль
function handleProfilePopup() {
    openedPopup(popupProfile);
    nameInput.value = profileName.textContent;
    careerInput.value = profileCareer.textContent;
}

//отправка формы блока профиль
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = careerInput.value;
    closedPopup(popupProfile);
}

//добавление карточек
function addCardsPopup() {
    openedPopup(popupCards);
}

//лайки карточек
cardButtonLike.forEach(function (buttonLikeActive) {
    buttonLikeActive.addEventListener("click", function () {
        buttonLikeActive.classList.toggle("card__button-like_active");
    });
  });

profileButtonEdit.addEventListener('click', handleProfilePopup);
cardsButtonAdd.addEventListener('click', addCardsPopup);
formElement.addEventListener('submit', handleFormSubmit);