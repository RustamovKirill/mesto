export default class UserInfo {
  constructor({ userName, userContent }) {
    this._name = userName;
    this._content = userContent;
  };
// метод возвращающий объект с данными пользователя
  getUserInfo() {
    return {
      name: this._name.textContent,
      content: this._content.textContent
    };
  };
// метод принимающий данные пользователя и добавляющий их на страницу
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._content.textContent = data.content;
  };
};