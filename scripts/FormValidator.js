export class FormValidator {
  constructor(object, formElement) {
    this._submitSelector = object.submitSelector; //.form__button-save
    this._inputSelector = object.inputSelector; //.form__input
    this._inputErrorClass = object.inputErrorClass; //form__input-error_active
    this._inputInValide = object.inputInValide; //form__input_invalid
    this._formElement = formElement;
  }
  // валидация форм
  enableValidation() {
    this._setEventListeners();
  }

  // показываем ошибку
  _showError() {
    const errorElement = document.getElementById(
      `${this._inputElement.id}-error`
    ); // находим элемент ошибки по id
    this._inputElement.classList.add(this._inputInValide); // добавляем красный бордер
    errorElement.textContent = this._inputElement.validationMessage; // API получаем сообщение для span
    errorElement.classList.add(this._inputErrorClass); // добавляем класс form__input-error_active
  }

  // скрываем ошибку
  _hiddenError() {
    const errorElement = document.getElementById(
      `${this._inputElement.id}-error`
    ); // находим элемент ошибки по id
    this._inputElement.classList.remove(this._inputInValide); // удаляем красный бордер
    errorElement.classList.remove(this._inputErrorClass); // удаляем класс form__input-error_active
    errorElement.textContent = ""; // скрывавем span
  }

  // проверка на валидность
  _isValid(inputElement) {
    if (!this._inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hiddenError(inputElement);
    }
  }

  // переключатель кнопки в форме
  _toggleButtonState() {
    const isFormValid = this._formElement.checkValidity(); //API Вызов метода checkValidity() - статическая валидация ограничений (возвращает true/false)
    this._buttonElement = this._formElement.querySelector(
      `.${this._submitSelector}`
    );
    this._buttonElement.toggleAttribute(
      "disabled", // добавляем disabled
      !isFormValid // если валидация не пройдена
    );
  }

  _setEventListeners() {
    this._inputList = this._formElement.querySelectorAll(
      `.${this._inputSelector}`
    );
    this._inputList.forEach((inputElement) => {
      //слушатели на все инпуты
      inputElement.addEventListener("input", () => {
        this._inputElement = inputElement;
        this._isValid();
        this._toggleButtonState();
      });
      this._toggleButtonState(); // дизаблим кнопку сразу при открытии
    });
  }
}
