export default class Api{
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    }
    
    checkJSONRes(res) {
        if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        }
    // загрузка информации о пользователе с сервера
    getUserInfo() {
            return fetch(`${this.url}/users/me`, {
                method: 'GET',
                headers: this.headers
            }).then(res => this.checkJSONRes(res));
        }

    // загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this.url}/cards`, {
          method: 'GET',
          headers: this._headers
        }).then(res => this.checkJSONRes(res));
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
        }).then(res => this.checkJSONRes(res));
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
          }).then(res => this.checkJSONRes(res));
    }
    // добавление аватарки
    addNewAvatar(link) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
            avatar: link,
          }),
        }).then(res => this.checkJSONRes(res));
    }
    // проставляем лайки
    likeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/like/${cardId}`, {
          method: 'PUT',
          headers: this.headers,
        }).then(res => this.checkJSONRes(res));
    }
    // удаление карточек
    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this.headers,
        }).then(res => this.checkJSONRes(res));
    }
    // снимаем лайк с карточки
    deleteLikeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/like/${cardId}`, {
          method: 'DELETE',
          headers: this.headers,
        }).then(res => this.checkJSONRe(res));
    }
}