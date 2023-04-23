export class Card {
  constructor(
    data,
    template,
    handleCardClick,
    handleOpenPopupDelete,
    handleLikeCard,
    handleDislikeCard,
    userID,
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
    this._userID = userID;
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
    this._counter = this._newCard.querySelector(".card__button-like-counter");
    this._likeBtn = this._newCard.querySelector(".card__button-like");
    this._trashBtn = this._newCard.querySelector(".card__button-trash");

    // передать данные
    newCardImg.src = this._link;
    newCardImg.alt = this._name;
    newCardTitle.textContent = this._name;

    // показать количество лайков при загрузке
    this._counter.textContent = this._likes.length;

    // отображать мои лайки
    if (
      this._likes.filter((like) => like._id === this._userID)
        .length > 0
    ) {
      this._likeBtn.classList.add("card__button-like_active");
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
    this._trashBtn.addEventListener("click", () => {
      this._handleOpenPopupDelete(this);
    });

    this._likeBtn.addEventListener("click", () => {
      if (this._likeBtn.classList.contains("card__button-like_active")) {
        this._handleDislikeCard(this);
        
      } else {
        this._handleLikeCard(this);
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
  _toggleLike() {
    this._likeBtn.classList.toggle("card__button-like_active");
  }
  // проверить ID, удалить "корзину" не у моей карточки
  _isOwner() {
    if (this._ownerId !== this._userID) {
      this._trashBtn.remove();
    }
  }
}
