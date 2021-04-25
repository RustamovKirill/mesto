
export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__button');
    }
    _handleEscapeClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handleClickOverlay(evt) {
        if (evt.target.classList.contains('popup_open')) {
            this.close()
        } 
    }

    setEventLesteners() {
        document.addEventListener('keydown', (evt) => this._handleEscapeClose(evt))
        this._popup.addEventListener('click', (evt) => this._handleClickOverlay(evt))
        this._buttonClose.addEventListener('click', (evt) => this.close(evt))
    }
    open() {
        this._popup.classList.add('popup_open');
        //this.setEventLesteners();
    }

    removeEventListeners() {
        document.removeEventListener('keydown', () => this._handleEscapeClose);
        this._popup.removeEventListener('click', () => this._handleClickOverlay);
        this._buttonClose.removeEventListener('click', () => this.close);
    }
    close() {
        this.removeEventListeners();
        this._popup.classList.remove('popup_open');
    }
}