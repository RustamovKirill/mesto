export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__button');
        this.close = this.close.bind(this);
    }
    _handleEscapeClose = evt => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handleClickOverlay = evt => {
        if (evt.target.classList.contains('popup_open')) {
            this.close();
        } 
    }

    setEventListener() {
        this._buttonClose.addEventListener('click', this.close);
        document.addEventListener('click', this._handleClickOverlay);
        document.addEventListener('keydown', this._handleEscapeClose);
    }
    open() {
        this.setEventListener()
        this._popup.classList.add('popup_open');
    }
    
    _removeEventListeners() {
        this._buttonClose.removeEventListener('click', this.close);
        document.removeEventListener('click', this._handleClickOverlay);
        document.removeEventListener('keydown', this._handleEscapeClose);
    }
    close() {
        this._removeEventListeners();
        this._popup.classList.remove('popup_open');
    }
}
