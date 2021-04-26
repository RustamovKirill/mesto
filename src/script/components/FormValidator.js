export default class FormValidator {
    constructor(obj, formValidate) {
        this._obj = obj;
        this._formValidate= formValidate;
    }
    _showError(inputElement) {
        const errorElement = this._formValidate.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._obj.inputError);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._obj.errorClass);
    };
    _hideError(inputElement) {
        const errorElement = this._formValidate.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._obj.inputError);
        errorElement.classList.remove(this._obj.errorClass);
    };
    _allInputsEmpty(allInputs) {
        return !allInputs.some(inputElement => inputElement.value.length > 0);
    };
    _checkInvalidInput(allInputs) {
        return allInputs.some(inputElement => !inputElement.validity.valid);
    };
    switchButton(allInputs, buttonElement) {
         if (this._checkInvalidInput(allInputs) || this._allInputsEmpty(allInputs)) {
            buttonElement.classList.add(this._obj.disableSubmitButton);
            buttonElement.setAttribute('disabled', true);
         } else {
            buttonElement.classList.remove(this._obj.disableSubmitButton);
            buttonElement.removeAttribute('disabled'); 
        }
    };
    _checkValidate(inputElement) {
        if (inputElement.validity.valid) {
     // если поле валидно, убираем ошибку и подчеркивание
            this._hideError(inputElement, this._obj);
        } else {
     // если поле не валидное, выводим ошибку и подчеркиваем красным
            this._showError(inputElement, this._obj);
        }
    };
    _inputsListeners(){
         // получаем все импуты в переменной allInputs
           const allInputs = Array.from(this._formValidate.querySelectorAll(this._obj.inputSelector));
         // кнопка сохранить, добавить
           const buttonElement = this._formValidate.querySelector(this._obj.submitButton);
         // проходим по всем импутам методом forEach и навешиваем обработчи событий
           allInputs.forEach(inputElement => {
             inputElement.addEventListener('input', () => {
                  // проверяем валидно ли состояние поля, если не валидно, то отключаем кнопку
                 this._checkValidate(inputElement);
                  // переключаем кнопку
                 this.switchButton(allInputs, buttonElement);
                });
             //вызываем функцию, чтобы кнопка добавить была не активна при открытии формы
             this.switchButton(allInputs, buttonElement);
            
            });
        };
     enableValidation() {
        this._inputsListeners();
    }
    
}
