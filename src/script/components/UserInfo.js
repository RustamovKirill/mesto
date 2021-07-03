export default class UserInfo {
  constructor(data) {
    this._data = data
  }
// метод возвращающий объект с данными пользователя
  getUserInfo() {
    return {
      name: this._data.name.textContent,
      about: this._data.about.textContent
    };
  };
// метод принимающий данные пользователя и добавляющий их на страницу
  setUserInfo(data) {
    this._data.name.textContent = data.name,
    this._data.about.textContent = data.about
  };
};