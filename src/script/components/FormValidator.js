export default class FormValidator {
    constructor(validationConfig, formValidate) {
        this._validationConfig = validationConfig;
        this._formValidate= formValidate;
        // получаем все импуты в переменной allInputs
        this._allInputs = Array.from(this._formValidate.querySelectorAll(this._validationConfig.inputSelector));
        this._buttonElement = this._formValidate.querySelector(this._validationConfig.submitButton);
    }
    _showError(inputElement) {
        const errorElement = this._formValidate.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._validationConfig.inputError);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._validationConfig.errorClass);
    };
    _hideError(inputElement) {
        const errorElement = this._formValidate.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._validationConfig.inputError);
        errorElement.classList.remove(this._validationConfig.errorClass);
        inputElement.textContent = '';
    };
    _allInputsEmpty() {
        return !this._allInputs.some(inputElement => inputElement.value.length > 0);
    };
    _checkInvalidInput() {
        return this._allInputs.some(inputElement => !inputElement.validity.valid);
    };
    switchButton() {
         if (this._checkInvalidInput() || this._allInputsEmpty()) {
            this._buttonElement.classList.add(this._validationConfig.disableSubmitButton);
            this._buttonElement.setAttribute('disabled', true);
         } else {
            this._buttonElement.classList.remove(this._validationConfig.disableSubmitButton);
            this._buttonElement.removeAttribute('disabled');
        }
    };
    // метод отвечающий за отчистку импутов от ошибок и отключение submit
    disableSubmitResetInput() {
        this._allInputs.forEach(inputElement => {
            this._hideError(inputElement)
        });
        this._buttonElement.classList.add(this._validationConfig.disableSubmitButton);
        this._buttonElement.setAttribute('disabled', true);
    }
    
    _checkValidate(inputElement) {
        if (inputElement.validity.valid) {
     // если поле валидно, убираем ошибку и подчеркивание
            this._hideError(inputElement, this._validationConfig);
        } else {
     // если поле не валидное, выводим ошибку и подчеркиваем красным
            this._showError(inputElement, this._validationConfig);
        }
    };
    _inputsListeners(){
         // кнопка сохранить, добавить
        //   const buttonElement = this._formValidate.querySelector(this._validationConfig.submitButton);
         // проходим по всем импутам методом forEach и навешиваем обработчи событий
         this._allInputs.forEach(inputElement => {
             inputElement.addEventListener('input', () => {
                  // проверяем валидно ли состояние поля, если не валидно, то отключаем кнопку
                 this._checkValidate(inputElement);
                  // переключаем кнопку
                 this.switchButton(this._buttonElement);
                });
             //вызываем функцию, чтобы кнопка добавить была не активна при открытии формы
             //this.switchButton(allInputs, buttonElement);
            
            });
        };
     enableValidation() {
        this._inputsListeners();
    }
    
}
