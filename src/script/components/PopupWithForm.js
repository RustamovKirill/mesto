import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, callBack) {
        super(popupSelector);
        this._callBack = callBack;
        this._form = this._popup.querySelector('.input');
        
    }
    _getInputValues() {
        this._inputs = this._form.querySelectorAll('.input__text');
        this._objectInputs = {};
        this._inputs.forEach(input => {
          this._objectInputs[input.name] = input.value;
        });
        console.log(this._objectInputs);
        return this._objectInputs;
    }
   
    setEventListener() {
        super.setEventListener();
        this._form.addEventListener('submit', this._submitHandler);
    }
    
    _submitHandler = event => {
        event.preventDefault();
        //Вызываем колбек 
        this._callBack(this._getInputValues());
      }
    close () {
        super.close();
        this._form.reset();
        this._form.removeEventListener('submit',this._submitHandler);
    }
}
