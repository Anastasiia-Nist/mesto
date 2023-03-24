export class FormValidator {
  constructor(object, formElement) {
    this._submitSelector = object.submitSelector; //.form__button-save
    this._inputSelector = object.inputSelector; //.form__input
    this._inputErrorClass = object.inputErrorClass; //form__input-error_active
    this._inputInValide = object.inputInValide; //form__input_invalid
    this._formElement = formElement;
    this._inputList = this._formElement.querySelectorAll(`.${this._inputSelector}`); //список все инпутов
   // this._spanList = this._formElement.querySelectorAll(".form__input-error"); //список всех спанов
    this._buttonElement = this._formElement.querySelector(`.${this._submitSelector}`); //form__button-save
  }
  // валидация форм
  enableValidation() {
    this._setEventListeners();
  }
  // функция очистки всех инпутов от ошибок, когда пользователь закрыл попап с невалидной формой
  hiddenAllErrors() {
    // this._inputList.forEach((input) => { 
    //   input.classList.remove(this._inputInValide);
    // });
    // this._spanList.forEach((span) => {
    //   span.classList.remove(this._inputErrorClass);
    // });
    this._inputList.forEach((inputElement) => {
      this._hiddenError(inputElement);
    });
  }
  
  // показываем ошибку
  _showError(inputElement) {
    const errorElement = document.getElementById(
      `${inputElement.id}-error`
    ); // находим id элемента ошибки
    inputElement.classList.add(this._inputInValide); // добавляем красный бордер
    errorElement.textContent = inputElement.validationMessage; // API получаем сообщение для span
    errorElement.classList.add(this._inputErrorClass); // добавляем класс form__input-error_active
  }

  // скрываем ошибку
  _hiddenError(inputElement) {
    const errorElement = document.getElementById(
      `${inputElement.id}-error`
    ); // находим id элемента ошибки
    inputElement.classList.remove(this._inputInValide); // удаляем красный бордер
    errorElement.classList.remove(this._inputErrorClass); // удаляем класс form__input-error_active
    errorElement.textContent = ""; // скрывавем span
  }

  // проверка на валидность
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hiddenError(inputElement);
    }
  }

  // переключатель кнопки в форме
  _toggleButtonState() {
    const isFormValid = this._formElement.checkValidity(); //API Вызов метода checkValidity() - статическая валидация ограничений (возвращает true/false)
    this._buttonElement.toggleAttribute(
      "disabled", // добавляем disabled
      !isFormValid // если валидация не пройдена
    );
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      //слушатели на все инпуты
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
      this._toggleButtonState(); // дизаблим кнопку сразу при открытии
    });
  }
}
