export class Api {
  constructor(dataApi) {
    this._authorization = dataApi.authorization;
  }
  //
  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то сломалось. Ошибка: ${res.status}`);
  }

  //загружаем информацию о юзере с сервера
  getUserInfo() {
    return fetch("https://nomoreparties.co/v1/cohort-64/users/me/", {
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkResult);
  }
  //загружаем карточки с сервера
  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/", {
      headers: {
        authorization: this._authorization,
      },
    }).then(this._checkResult);
  }
  // отправляем данные юзера на сервер
  patchUserInfo(data) {
    return fetch("https://nomoreparties.co/v1/cohort-64/users/me/", {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.career,
      }),
    }).then(this._checkResult);
  }
  // отправляем данные карточки на сервер
  postNewCard(data) {
    return fetch("https://nomoreparties.co/v1/cohort-64/cards/", {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResult);
  }

  //удалени карточки
  deleteCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-64/cards/${cardId}/`,
      {
        method: "DELETE",
        headers: {
          authorization: this._authorization,
        },
      }
    ).then(this._checkResult);
  }
  // лайк и дизлайк
  likeCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-64/cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: {
          authorization: this._authorization,
        },
      }
    ).then(this._checkResult);
  }

  dislikeCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-64/cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: {
          authorization: this._authorization,
        },
      }
    ).then(this._checkResult);
  }
  // добавление аватара
  patchUserAvatar(item) {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-64/users/me/avatar",
      {
        method: "PATCH",
        headers: {
          authorization: this._authorization,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: item.link,
        }),
      }
    ).then(this._checkResult);
  }

  
}
