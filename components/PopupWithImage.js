import { cardImage, cardName } from "./../utils/constants.js";
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open(name, link) {
    cardImage.src = link;
    cardImage.alt = name;
    cardName.textContent = name;
    super.open();
  }
}
