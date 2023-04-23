import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popup, handleFormSubmit }) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._form = popup.querySelector(".form");
    this._inputList = this._form.querySelectorAll(".form__input");
    this._submitButton = this._form.querySelector(".button-save")
  }

  _getInputValues() {
    // собирает значения всех инпутов в форме
    this._inputsValues = {};
    this._inputList.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });
    return this._inputsValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      // бывшая функция renderLoading
      const initialText = this._submitButton.textContent;
      this._submitButton.textContent = 'Сохранение...';
      this._handleFormSubmit(this._getInputValues())// передаем this._getInputValues() как аргумент data функции handleFormSubmit 
        .then(() => this.close())
        .finally(() => {
          this._submitButton.textContent = initialText;
        }) 
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
