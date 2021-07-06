import Popup from "./Popup.js";
export default class PopupDeleteImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.input');
    }

    setSubmitAction(action){
        this._submitHandler = action
    }
    _handleSubmit = evt => {
        evt.preventDefault()
        this._submitHandler()
    }

    open(){
        super.open()
        this._form.addEventListener('submit', this._handleSubmit)
    }
    
    close() {
        super.close()
        this._form.removeEventListener('submit', this._handleSubmit)
    }
}