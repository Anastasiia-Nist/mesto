let popup = document.querySelector('.popup');
let profile__button_edit = document.querySelector('.profile__button-edit');
let popup__button_close = document.querySelector('.popup__button-close');

function showPopup() {
    popup.classList.toggle('popup_opened');
}

profile__button_edit.addEventListener('click', showPopup);
popup__button_close.addEventListener('click', showPopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
let popup__button_save = document.querySelector('.popup__button-save');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-career');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
    let profileName =  document.querySelector('.profile__name');
    let profileCareer = document.querySelector('.profile__career');
    // Выберите элементы, куда должны быть вставлены значения полей
    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;
     // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
popup__button_save.addEventListener('click', showPopup);