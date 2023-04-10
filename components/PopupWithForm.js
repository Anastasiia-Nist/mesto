import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.form = popupSelector.querySelector(".form");
    this.inputList = this.form.querySelectorAll(".form__input");
  }

  _getInputValues() {
    // собирает значения всех инпутов в форме
    this.inputsValues = {};
    this.inputList.forEach((input) => {
      this.inputsValues[input.name] = input.value;
    });
    return this.inputsValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleFormSubmit(this._getInputValues()); // вставляем значения инпутов конкретной формы
    });
  }

  close() {
    super.close();
    this.form.reset();
  }
}
