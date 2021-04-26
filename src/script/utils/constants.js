export const initialCards = [
    {
      name: 'Лондон',
      link: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Нью-Йорк',
      link: 'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1879&q=80'
    },
    {
      name: 'Санкт-Петербург',
      link: 'https://i.pinimg.com/736x/01/3a/88/013a888675cb788f182ef1f71e86454d.jpg'
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
 export const validationConfig = {
    formSelector: '.input',
    inputSelector: '.input__text',
    submitButton: '.input__button-save',
    disableSubmitButton: 'input__button-save_disabled',
    inputError: 'input__text_error',
    errorClass: 'error_visible'
  }
  // Селекторы
export const selectorImageOverlay = '.popup_type_show-image';
export const selectorAddCard = '.popup_type_add-element';
export const selectorEditProfile = '.popup_type_edit-profile';
export const selectorContainer = '.elements';
  // Формы
export const formEdit = document.querySelector('.input_edit-profile');
export const formAdd = document.querySelector('.input_add-card');
  //кнопки popupEdit
export const openFormEdit = document.querySelector('.profile__edit-button');
export const closeFormEdit = document.querySelector('.popup__button_type_close-edit');
  //кнопки popupAdd
export const openFormAdd = document.querySelector('.profile__add-button');
export const closeFormAdd = document.querySelector('.popup__button_type_close-add');
  //переменные 3х popup
export const popupEdit = document.querySelector('.popup_type_edit-profile');
export const popupAdd = document.querySelector('.popup_type_add-element');
export const popupImage = document.querySelector('.popup_type_show-image');
//поля input для ввода информации для новой карточки
export const typeTitle = document.querySelector('.input__text_type_title'); 
export const typeLink = document.querySelector('.input__text_type_link');
//переменные inputs
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const inputs = document.querySelector('.input');
export const inputName = document.querySelector('.input__text_type_name');
export const inputContent = document.querySelector('.input__text_type_content');
//export const submitButton = document.querySelectorAll('.input__button-save');
