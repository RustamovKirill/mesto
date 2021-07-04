export default class Api{
    constructor(config) {
        this.config = config
        this.url = config.baseUrl;
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
            return fetch(`${this.url}/users/me`, this.config).then(res => this.checkJSONRes(res));
        }
    // загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this.url}/cards`, this.config).then(res => this.checkJSONRes(res));
      }
    // редактирование профиля
    addUserInfo(values) {
        return fetch(`${this.url}/users/me`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify(values),
        }).then(res => this.checkJSONRes(res));
    }
    // добавленеи новой карточки
    addNewCards(values) {
        return fetch(`${this.url}/cards`, {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify(values),
          }).then(res => this.checkJSONRes(res));
    }
    // добавление аватарки
    addNewAvatar(value) {
        return fetch(`${this.url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify(value),
        }).then(res => this.checkJSONRes(res));
    }
    // проставляем лайки
    likeCard(cardId) {
        return fetch(`${this.url}/cards/likes/${cardId}`, {
          method: 'PUT',
          headers: this.headers,
        }).then(res => this.checkJSONRes(res));
    }
    // удаление карточек
    deleteCard(cardId) {
        return fetch(`${this.url}/cards/${cardId}`, {
          method: 'DELETE',
          headers: this.headers,
        }).then(res => this.checkJSONRes(res));
    }
    // снимаем лайк с карточки
    deleteLikeCard(cardId) {
        return fetch(`${this.url}/cards/likes/${cardId}`, {
          method: 'DELETE',
          headers: this.headers,
        }).then(res => this.checkJSONRes(res));
    }
}