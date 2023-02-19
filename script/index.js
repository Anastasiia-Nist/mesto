const popup = document.querySelector('.popup');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonClose = document.querySelector('.popup__button-close');
const cardsButtonAdd = document.querySelector('.profile__button-add');
const profileName =  document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const careerInput = document.querySelector('.popup__input_type_career');

//открытие попапа
const openedPopup = () => {
    popup.classList.add('popup_opened');
}
//закрытие попапа
const closedPopup = () => {
    popup.classList.remove('popup_opened');
}
// попап блока профиль
const ProfilePopup = () => {
    openedPopup();
    nameInput.value = profileName.textContent;
    careerInput.value = profileCareer.textContent;
}

//отправка формы блока профиль
const handleFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = careerInput.value;
    closedPopup();
}
const CardsPopup = () => {
    openedPopup();
}

profileButtonEdit.addEventListener('click', ProfilePopup);
cardsButtonAdd.addEventListener('click', CardsPopup);
popupButtonClose.addEventListener('click', closedPopup);
formElement.addEventListener('submit', handleFormSubmit);