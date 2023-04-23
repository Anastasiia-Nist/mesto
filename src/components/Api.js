export class Api {
  constructor(dataApi) {
    this._baseUrl = dataApi.baseUrl;
    this._headers = dataApi.headers;
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
    return fetch(`${this._baseUrl}users/me/`, {
      headers: this._headers,
    }).then(this._checkResult);
  }
  //загружаем карточки с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}cards/`, {
      headers: this._headers,
    }).then(this._checkResult);
  }
  // отправляем данные юзера на сервер 
  patchUserInfo(data) {
    return fetch(`${this._baseUrl}users/me/`, {
      method: "PATCH",
      headers: this._headers,

      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkResult);
  }
  // отправляем данные карточки на сервер 
  postNewCard(data) {
    return fetch(`${this._baseUrl}cards/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResult);
  }

  //удалени карточки
  deleteCard(cardId) {
    return fetch(
      `${this._baseUrl}cards/${cardId}/`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then(this._checkResult);
  }
  // лайк и дизлайк
  likeCard(cardId) {
    return fetch(
      `${this._baseUrl}cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: this._headers,
      }
    ).then(this._checkResult);
  }

  dislikeCard(cardId) {
    return fetch(
      `${this._baseUrl}cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then(this._checkResult);
  }
  // добавление аватара 
  patchUserAvatar(item) {
    return fetch(
      `${this._baseUrl}users/me/avatar`,
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: item.link,
        }),
      }
    ).then(this._checkResult);
  }

  
}
