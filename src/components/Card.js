export class Card {
  constructor(
    data,
    template,
    handleCardClick,
    handleOpenPopupDelete,
    handleLikeCard,
    handleDislikeCard
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._handleOpenPopupDelete = handleOpenPopupDelete;
    this._handleLikeCard = handleLikeCard;
    this._handleDislikeCard = handleDislikeCard;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
  }

  //создать карточку
  createCard() {
    // клонировать template
    this._newCard = document
      .querySelector(this._template)
      .content.querySelector(".card")
      .cloneNode(true);
    // переменные для карточки
    const newCardImg = this._newCard.querySelector(".card__img");
    const newCardTitle = this._newCard.querySelector(".card__name");
    const counter = this._newCard.querySelector(".card__button-like-counter");
    // передать данные
    newCardImg.src = this._link;
    newCardImg.alt = this._name;
    newCardTitle.textContent = this._name;
    // показать количество лайков при загрузке
    counter.textContent = this._likes.length;
    // отображать мои лайки
    if (this._likes.filter(like => like._id === "8aabda33a800114d8d67f69a").length > 0) {
      const likeBtn = this._newCard.querySelector(".card__button-like");
      likeBtn.classList.add("card__button-like_active");
    }

    //запустить функцию слушатели
    this._setEventListeners();
    //проверить ID
    this._isOwner();
    //вернуть карточку
    return this._newCard;
  }

  //слушатели
  _setEventListeners() {
    const counter = this._newCard.querySelector(".card__button-like-counter");
    const likeBtn = this._newCard.querySelector(".card__button-like");
    const trashBtn = this._newCard.querySelector(".card__button-trash");

    trashBtn.addEventListener("click", () => {
      this._handleOpenPopupDelete(this);
    });

    likeBtn.addEventListener("click", () => {
      this._toggleLike(likeBtn);
      if (likeBtn.classList.contains("card__button-like_active")) {
        this._handleLikeCard(this._cardId, counter);
      } else {
        this._handleDislikeCard(this._cardId, counter);
      }
    });
    
    this._newCard
      .querySelector(".card__img")
      .addEventListener("click", () =>
        this._handleCardClick(this._name, this._link)
      );
  }

  // удалить карточку
  deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  // переключатель лайков
  _toggleLike(likeBtn) {
    likeBtn.classList.toggle("card__button-like_active");
  }
  // проверить ID, удалить "корзину" не у моей карточки
  _isOwner() {
    const trashButton = this._newCard.querySelector(".card__button-trash");
    if (this._ownerId !== "8aabda33a800114d8d67f69a") {
      trashButton.remove();
    }
  }
}
