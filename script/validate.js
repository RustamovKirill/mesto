//функции показа и скрытия ошибок при проверкке валидности
const showError = (formElement, inputElement, obj) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(obj.inputError);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(obj.errorClass);
};
const hideError = (formElement, inputElement, obj) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(obj.inputError);
    errorElement.classList.remove(obj.errorClass);
};

// функции проверки на валидность инпутов
const allInputsEmpty = (allInputs) => {
    return !allInputs.some(inputElement => inputElement.value.length > 0);
};
const checkInvalidInput = (allInputs) => {
    return allInputs.some(inputElement => !inputElement.validity.valid);
};

// функция преключения состояния кнопки, на вход берем все инпутся и кнопки
const switchButton = (allInputs, buttonElement, obj) => {
    if (checkInvalidInput(allInputs) || allInputsEmpty(allInputs)) {
        buttonElement.classList.add(obj.disableSubmitButton);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(obj.disableSubmitButton);
        buttonElement.removeAttribute('disabled'); 
    }
};
 // проверяем валидность формы
const checkValidate = (formElement, inputElement, obj) => {
    if (inputElement.validity.valid) {
 // если поле валидно, убираем ошибку и подчеркивание
        hideError(formElement, inputElement, obj);
    } else {
 // если поле не валидное, выводим ошибку и подчеркиваем красным
        showError(formElement, inputElement, obj);
    }
};
// обрабатываем одну форму
const inputsListeners = (formElement, obj) => {
// получаем все импуты в переменной allInputs
   const allInputs = Array.from(formElement.querySelectorAll(obj.inputSelector));
// кнопка сохранить, добавить
   const buttonElement = formElement.querySelector(obj.submitButton);
// проходим по всем импутам методом forEach и навешиваем обработчи событий
   allInputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
   // проверяем валидно ли состояние поля, если не валидно, то отключаем кнопку
    checkValidate(formElement, inputElement, obj);
   // переключаем кнопку
    switchButton(allInputs, buttonElement, obj);
    });
   //вызываем функцию, чтобы кнопка добавить была не активна при открытии формы
    switchButton(allInputs, buttonElement, obj);
  });
};
// включаем валидацию для форм
const enableValidation = (obj) => {
// создаем массив form
    const allForms = Array.from(document.querySelectorAll(obj.formSelector));
// проходим по всему массиву методом forEach
    allForms.forEach(formElement => {
        formElement.addEventListener('submit', (evt) =>{
            evt.preventDefault();
        });
     // навесили обрабтчики событий на форму
        inputsListeners(formElement, obj);
    });
};
// объект содержащий все используемые при валидации классы
const obj = {
    formSelector: '.input',
    inputSelector: '.input__text',
    submitButton: '.input__button-save',
    disableSubmitButton: 'input__button-save_disabled',
    inputError: 'input__text_error',
    errorClass: 'error_visible'
  };
  enableValidation(obj);