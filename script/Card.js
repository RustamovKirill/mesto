import {openPopupImage} from './index.js';
export default class Card{
  constructor(data, cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
  }
  _getTemplate() {
      const cardElement = document.querySelector('.template').content
      .querySelector('.element')
      .cloneNode(true);

      return cardElement;
  }
  renderCard () {
      this._element = this._getTemplate();
      this._element.querySelector('.element__image').src = this._link;
      this._element.querySelector('.element__image').alt = this._name;
      this._element.querySelector('.element__title').textContent = this._name;
      //обработчики событий
      this._setEventListeners();
      return this._element;
  }
  _removeCard() {
    this._element.closest('.element').remove();
  }
  //действие при нажатие на лайк
  _toggleLike() {
    this._element.querySelector('.element__heart-button')
    .classList.toggle('element__heart-button_active');
  }
  //открытие картинки overlay
  _handleOpenPopup() {
    const imagePlace = document
    .querySelector('.popup__image');
    const imageSubtitle = document
    .querySelector('.popup__subtitle-image');
    imagePlace.src = this._link;
    imageSubtitle.textContent = this._name;
  }
  
  _setEventListeners() {
    //слушатель клика по картинке
    this._element.querySelector('.element__image')
    .addEventListener('click', () => {
      openPopupImage();
      this._handleOpenPopup();
    });
    //слушатель события на кнопке лайк
    this._element.querySelector('.element__heart-button')
    .addEventListener('click', () => {
      this._toggleLike();
    });
    this._element.querySelector('.element__basket-button')
    .addEventListener('click', () => {
      this._removeCard();
    });
  }
}
