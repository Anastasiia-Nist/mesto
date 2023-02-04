let popup = document.querySelector('.popup');
let profileButtonEdit = document.querySelector('.profile__button-edit');
let popupButtonClose = document.querySelector('.popup__button-close');
let profileName =  document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_details_name');
let careerInput = document.querySelector('.popup__input_details_career');

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
