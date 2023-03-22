import {openPopup, popupImage} from "./index.js"; //необходимы переменные для открытия попапа с картинкой

export class Card {
  constructor(name, link, template) {
    this._name = name;
    this._link = link;
    this._template = template;
  }

  //создать карточку
  createCard() {
    this._newCard = document.querySelector(this._template).content.querySelector(".card").cloneNode(true); // клонировать template
    // передать данные
    this._newCard.querySelector(".card__img").src = this._link;
    this._newCard.querySelector(".card__img").alt = this._name;
    this._newCard.querySelector(".card__name").textContent = this._name;

    //запустить функцию слушатели
    this._setEventListeners();
    //вернуть карточку
    return this._newCard;
  }

  //слушатели
  _setEventListeners() {
    this._newCard
      .querySelector(".card__button-trash")
      .addEventListener("click", () => this._deleteCard());
    this._newCard
      .querySelector(".card__button-like")
      .addEventListener("click", () => this._toggleLike());
      this._newCard
      .querySelector(".card__img")
      .addEventListener("click", () => this._openImagePopup());
  }

  // удалить карточку
  _deleteCard() {
    this._newCard.remove();
  }

  // переключатель лайков
  _toggleLike() {
    this._newCard.querySelector(".card__button-like").classList.toggle("card__button-like_active");
  }
  
  // открытие попапа с картинкой
  _openImagePopup() {
    openPopup(popupImage);
    document.querySelector(".popup-image__large-image").src = this._link;
    document.querySelector(".popup-image__large-image").alt = this._name;
    document.querySelector(".popup-image__title-image").textContent = this._name;
  }
}
