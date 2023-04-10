export class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
  }
  open() {
    this.popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
  }

  close() {
    this.popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt)); //оптимизация удаление слушателя
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    // закрытие попапов при клике на оверлей и на все Х
    this.popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
      if (evt.target.classList.contains("popup__button-close")) {
        this.close();
      }
    });
  }
}
