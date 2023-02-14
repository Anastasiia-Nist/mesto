const popup = document.querySelector('.popup');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonClose = document.querySelector('.popup__button-close');
const profileName =  document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const careerInput = document.querySelector('.popup__input_type_career');

//открытие попапа
function openedPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    careerInput.value = profileCareer.textContent;
}
//закрытие попапа
function closedPopup() {
    popup.classList.remove('popup_opened');
}

//отправка формы
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = careerInput.value;
    closedPopup();
}

profileButtonEdit.addEventListener('click', openedPopup);
popupButtonClose.addEventListener('click', closedPopup);
formElement.addEventListener('submit', handleFormSubmit);
