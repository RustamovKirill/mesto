export default class Card{
  constructor({myId, link, name, likes, owner, _id}, handleCardClick, removeCard, putLike, removeLike) {
    console.log(owner)
    this._myId = myId;
    this._link = link;
    this._name = name;
    this._likes = likes;
    this._ownCardId = owner._id;
    this._cardId = _id
    this._handleCardClick = handleCardClick
    this._removeCard = removeCard
    this._putLike = putLike
    this._removeLike = removeLike;
  }
  _getTemplate() {
    const cardElement = document.querySelector('.template')
    .content.querySelector('.element').cloneNode(true);

    return cardElement;
  }
  renderCard() {
    this._element = this._getTemplate();
    //обработчики событий
    this._setEventListeners();
    this._image = this._element.querySelector('.element__image');
    this._title = this._element.querySelector('.element__title');
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    this._element.querySelector('.element__likes-counter').textContent = this._likes.length
    this._likes.forEach(like => {
      if(like._id === this._myId){
        this._element.querySelector('.element__heart-button').classList.add('element__heart-button_active')
      }
    })
    //Показываем корзины только у своих карточек
    if(this._myId === this._ownCardId){
      this._element.querySelector('.element__basket-button').classList.add('element__basket-button_on')
    }
    return this._element;
  }
  // _removeCard() {
  //   this._element.closest('.element').remove();
  // }
  // //действие при нажатие на лайк
  // _toggleLike() {
  //   this._element.querySelector('.element__heart-button')
  //   .classList.toggle('element__heart-button_active');
  // }
  _setEventListeners() {
    //слушатель клика по картинке
    this._element.querySelector('.element__image')
    .addEventListener('click', () => {
    this._handleCardClick.open(this._link, this._name)
    });
    //слушатель события на кнопке лайк
    this._likeButton = this._element.querySelector('.element__heart-button');
    this._likeButton.addEventListener('click', () => !this._likeButton.classList.contains('element__heart-button_active')
          ? this._putLike(this._cardId)
          : this._removeLike(this._cardId)
    );
    this._delButton = this._element.querySelector('.element__basket-button');
    this._delButton.addEventListener('click', () => {
    this._removeCard(this._cardId);
    });
  }
  getCard(){
    this._element = this.renderCard();
    this._setEventListeners();
    return this._element
  }
}
/*
export default class Card{
  constructor(link, name, callBackFunction) {
    this._link = link;
    this._name = name;
    this._callBackFunction = callBackFunction;
  }
  _getTemplate() {
    const cardElement = document.querySelector('.template')
    .content.querySelector('.element').cloneNode(true);

    return cardElement;
  }
  renderCard() {
    this._element = this._getTemplate();
    //обработчики событий
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    
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
  _setEventListeners() {
    //слушатель клика по картинке
    this._element.querySelector('.element__image')
    .addEventListener('click', () => {
    this._callBackFunction(this._link, this._name)  
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
}*/