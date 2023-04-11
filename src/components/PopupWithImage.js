import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector(".popup-image__large-image");
    this._popupImageDescription = this._popup.querySelector(".popup-image__title-image");

}
  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageDescription.textContent = name;
    super.open();
  }
}
