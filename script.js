//открытие и закрытие попапа
let popup = document.querySelector('.popup');
let profile__button_edit = document.querySelector('.profile__button-edit');
let popup__button_close = document.querySelector('.popup__button-close');

function showPopup() {
    popup.classList.toggle('popup_opened');
}

profile__button_edit.addEventListener('click', showPopup);
popup__button_close.addEventListener('click', showPopup);

//отправка формы и редактирование profile
let formElement = document.querySelector('.popup__form');
let popup__button_save = document.querySelector('.popup__button-save');

let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-career');


function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    let profileName =  document.querySelector('.profile__name');
    let profileCareer = document.querySelector('.profile__career');

    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;
   
}

formElement.addEventListener('submit', handleFormSubmit);
popup__button_save.addEventListener('click', showPopup);