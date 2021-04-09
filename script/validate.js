/*
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
  enableValidation(this._obj);
*/
const popupProfile = document.querySelector('#popup-profile'); /*поиск формы */
const editButton = document.querySelector('.profile__edit'); /*Кнопка редактирования*/
const closeButton = document.querySelector('#ProfileClosePopup'); /*Кнопка закрытия*/
const nameInput = document.querySelector('#input__popup-name'); /* 1 значение  */
const aboutInput = document.querySelector('#input__popup-about'); /*2 значение */
const nameProfile = document.querySelector('.profile__name'); /* поиск имени */
const aboutProfile = document.querySelector('.profile__about'); /* поиск о себе */
const form = document.querySelector('#form-profile') /* попап по форме */

// форма добавления карточек
const popupCard = document.querySelector('#popup-card'); // форма
const cardOpenButton = document.querySelector('.profile__add'); // кнопка добавления карточки
const cardCloseButton = document.querySelector('#CardClosePopup'); // кнопка закрытия
const inputCardAddName = document.querySelector('#input__popup-CardName'); // 1 значение
const inputCardAddPhoto = document.querySelector('#input__popup-CardImg'); // 2 значение 
const formCard = document.querySelector('#form-card');

//template
const cardTemplate = document.querySelector('#templatecard').content; //получаем заготовки для карточек
const cardContainer = document.querySelector('.cards'); //контейнер с карточками

const popupForm = document.querySelectorAll('.popup__form');

//массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const objects = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}  


 import Card from "./card.js" 

 initialCards.forEach(item => {
  cardContainer.prepend(new Card(cardTemplate, item).getCard())
 });

import FormValidator from "./validate.js"

const formList = Array.from(popupForm);
formList.forEach((formElement) => {
  new FormValidator(objects, formElement).enableValidation()
});


//закрытие на оверлэй
const closePopupOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

// закрытие на ESC
const closePopupEscape = (evt) => {
  const openPopup = document.querySelector('.popup_opened');
  if (evt.key === "Escape") {
    closePopup(openPopup);
  }
}

// открытие попапов
export const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEscape);
}

/* Закрытие popup */
export const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEscape);
}

editButton.addEventListener('click', function () {
  nameInput.value = nameProfile.textContent;
  aboutInput.value = aboutProfile.textContent;
  openPopup(popupProfile)
})

closeButton.addEventListener('click', function () {
  closePopup(popupProfile)
})

cardOpenButton.addEventListener('click', function () {
  openPopup(popupCard)
})

cardCloseButton.addEventListener('click', function () {
  closePopup(popupCard)
})

// Редактирование 
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  aboutProfile.textContent = aboutInput.value;
  closePopup(popupProfile);
}
form.addEventListener('submit', formSubmitHandler); 


// добавление на страницу новой карточки
function addCardForSumbitHandler (evt) {
  evt.preventDefault();
  const card = {}; 
    card.name = inputCardAddName.value;
    card.link = inputCardAddPhoto.value;
  cardContainer.prepend(new Card(cardTemplate, card).getCard())
  closePopup(popupCard);
  inputCardAddPhoto.value ='';
  inputCardAddName.value ='';
}
formCard.addEventListener('submit', addCardForSumbitHandler); 