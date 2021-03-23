const showError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('input__text_error');
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add('error_visible');
};
const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('input__text_error');
    errorElement.classList.remove('error_visible');
};
// проверка на валидность строк
const allInputsEmpty = (allInputs) => {
    return !allInputs.some(inputElement => inputElement.value.length > 0);
};

const checkInvalidInput = (allInputs) => {
    return allInputs.some(inputElement => !inputElement.validity.valid);
};
// функция преключения состояния кнопки, на вход берем все инпутся и кнопки
const switchButton = (allInputs, buttonElement) => {
    if (checkInvalidInput(allInputs) || allInputsEmpty(allInputs)) {
        buttonElement.classList.add('input__button-save_disabled');
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove('input__button-save_disabled');
        buttonElement.removeAttribute('disabled'); 
    }
};

 // проверяем валидность формы
const checkValidate = (formElement, inputElement) => {
    if (inputElement.validity.valid) {
 // если поле валидно, убираем ошибку и подчеркивание
        hideError(formElement, inputElement);
    } else {
 // если поле не валидное, выводим ошибку и подчеркиваем красным
        showError(formElement, inputElement);
    }
};
// обрабатываем одну форму
const inputsListeners = (formElement) => {
// получаем все импуты в переменной allInputs
   const allInputs = Array.from(formElement.querySelectorAll('.input__text'));
// кнопка сохранить, добавить
   const buttonElement = formElement.querySelector('.input__button-save');
// проходим по всем импутам методом forEach и навешиваем обработчи событий
   allInputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
   // проверяем валидно ли состояние поля, если не валидно, то отключаем кнопку
    checkValidate(formElement, inputElement);
   // переключаем кнопку
    switchButton(allInputs, buttonElement);
    });
   //вызываем функцию, чтобы кнопка добавить была не активна при открытии формы
    switchButton(allInputs, buttonElement);
  });
};
// включаем валидацию для форм
const enableValidation = () => {
// создаем массив из form
    const allForms = Array.from(document.querySelectorAll('.input'));
// проходим по всему массиву методом forEach
    allForms.forEach(formElement => {
        formElement.addEventListener('submit', (evt) =>{
            evt.preventDefault();
        });
     // навесили обрабтчики событий на форму
        inputsListeners(formElement);
    });
};
enableValidation();