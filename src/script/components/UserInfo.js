export default class UserInfo {
  constructor({ userName, userContent }) {
    this._title = userName;
    this._content = userContent;
  };
// метод возвращающий объект с данными пользователя
  getUserInfo() {
    return {
      title: this._title.textContent,
      content: this._content.textContent
    };
  };
// метод принимающий данные пользователя и добавляющий их на страницу
  setUserInfo(data) {
    this._title.textContent = data.title;
    this._content.textContent = data.content;
  };
};