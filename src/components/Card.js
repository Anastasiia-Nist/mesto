export class Card {
  constructor({name, link}, template, handleCardClick) {
    this._name = name;
    this._link = link;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  //создать карточку
  createCard() {
    this._newCard = document
      .querySelector(this._template)
      .content.querySelector(".card")
      .cloneNode(true); // клонировать template
    // переменные для карточки
    const newCardImg = this._newCard.querySelector(".card__img");
    const newCardTitle = this._newCard.querySelector(".card__name");
    // передать данные
    newCardImg.src = this._link;
    newCardImg.alt = this._name;
    newCardTitle.textContent = this._name;

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
      .addEventListener("click", () =>
        this._handleCardClick(this._name, this._link)
      );
  }

  // удалить карточку
  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  // переключатель лайков
  _toggleLike() {
    this._newCard
      .querySelector(".card__button-like")
      .classList.toggle("card__button-like_active");
  }
}
