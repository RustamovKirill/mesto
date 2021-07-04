export default class Api{
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    }
    // дейсвие при появление ошибки
    _checkJSONRes(res) {
        if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        }
    // получение информации о пользователе с сервера
    getUserInfo() {
            return fetch(`${this.url}/users/me`, {
                method: 'GET',
                headers: this.headers
            }).then(res => this._checkJSONRes(res));
        }

    // получение карточек с сервера
    getInitialCards() {
        return fetch(`${this.url}/cards`, {
          method: 'GET',
          headers: this._headers
        }).then(res => this._checkJSONRes(res));
      }
    // редактирование профиля
    addUserInfo(name, about) {
        return fetch(`${this.url}/users/me`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
            name,
            about
          }),
        }).then(res => this._checkJSONRes(res));
    }
    // добавленеи новой карточки
    addNewCards(name, link) {
        return fetch(`${this.url}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            name,
            link,
          }),
          }).then(res => this._checkJSONRes(res));
    }
    // добавление аватарки
    addNewAvatar(link) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
            avatar: link,
          }),
        }).then(res => this._checkJSONRes(res));
    }
    // проставляем лайки
    likeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/like/${cardId}`, {
          method: 'PUT',
          headers: this.headers,
        }).then(res => this._checkJSONRes(res));
    }
    // удаление карточек
    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this.headers,
        }).then(res => this._checkJSONRes(res));
    }
    // снимаем лайк с карточки
    deleteLikeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/like/${cardId}`, {
          method: 'DELETE',
          headers: this.headers,
        }).then(res => this._checkJSONRe(res));
    }
}