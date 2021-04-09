export const initialCards = [
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
      name: 'Санкт-Петербург',
      link: 'https://images.unsplash.com/photo-1558682324-9763f8ac00c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1556&q=80'
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
 export const object = {
    formSelector: '.input',
    inputSelector: '.input__text',
    submitButton: '.input__button-save',
    disableSubmitButton: 'input__button-save_disabled',
    inputError: 'input__text_error',
    errorClass: 'error_visible'
  }
  //формы
export const formEdit = document.querySelector('.input_edit-profile');
export const formAdd = document.querySelector('.input_add-card');
  //кнопки popupEdit
export const openFormEdit = document.querySelector('#open-form');
export const closeFormEdit = document.querySelector('.popup__button_type_close-edit');
  //кнопки popupAdd
export const openFormAdd = document.querySelector('.profile__add-button');
export const closeFormAdd = document.querySelector('.popup__button_type_close-add');
  //переменные 3х popup
export const popupEdit = document.querySelector('.popup_type_edit-prifile');
export const popupAdd = document.querySelector('.popup_type_add-element');
export const popupImage = document.querySelector('.popup_type_show-image');
//переменные inputs
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const inputs = document.querySelector('.input');
export const inputName = document.querySelector('.input__text_type_name');
export const inputContent = document.querySelector('.input__text_type_content');