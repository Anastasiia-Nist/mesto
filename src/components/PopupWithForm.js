import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popup, handleFormSubmit }) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._form = popup.querySelector(".form");
    this._inputList = this._form.querySelectorAll(".form__input");
  }

  _getInputValues() {
    // собирает значения всех инпутов в форме
    this._inputsValues = {};
    this._inputList.forEach((input) => {
      this._inputsValues[input.name] = input.value;
    });
    return this._inputsValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues()); // передаем this._getInputValues() как аргумент data функции handleFormSubmit 
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
