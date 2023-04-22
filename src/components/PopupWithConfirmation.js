import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
  constructor(popup, verificationDelete) {
    super(popup);
    this._button = popup.querySelector(".popup__button-yes");
    this._verificationDelete = verificationDelete;
  }
  getValues(card) {
    return (this._card = card);
  }
  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener("click", () => {
      this._verificationDelete(this._card);
    });
  }
}
