import FormValidator from '../script/components/FormValidator.js';
import Card from '../script/components/Card.js';
import Section from '../script/components/Section.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';
import Api from '../script/components/Api.js';
import './index.css'; // импортировали стили проекта
import 
{initialCards,
validationConfig,
selectorImageOverlay, selectorAddCard, selectorEditProfile, selectorContainer,
formEdit, formAdd,
openFormEdit,
openFormAdd,
profileTitle, profileSubtitle, inputName, inputContent} from '../script/utils/constants.js';

// экземпляр класса Api
const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    authorization: '7cd3c8f5-5eec-4d82-828a-e3126113c61b',
    'Content-Type': 'application/json'
  }
});


const popupFullScreen = new PopupWithImage (selectorImageOverlay);
// callback открытия картинки в overlay
function callBackFunction(link, name) {
  popupFullScreen.open(link, name);
}
// ф-ция создания карточки
function createCard(item) {
  const card = new Card (item.link, item.name, callBackFunction).renderCard();
    return card
}
// ф-ция добавления карточки
function addCardToDom(card) {
  cardList.addItem(card);
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    
    const card = createCard(item); //вызов  ф-ции создания карточки
    addCardToDom(card); //вызов  ф-ции добавления карточки
  }
}, selectorContainer);
cardList.rendererItems();


  const popupAddCard = new PopupWithForm(selectorAddCard, (item) => {
    const card = createCard(item); //вызов  ф-ции создания карточки
    addCardToDom(card); //вызов  ф-ции добавления карточки

    // закрытие popup после submit
    popupAddCard.close();
  });
openFormAdd.addEventListener('click', ()=> {
  // сбрасываем поля импутов, чтоб исключить появление текста для невалидных строк и отключаю кноку submit
  validatorAddForm.disableSubmitResetInput();
  popupAddCard.open();
  
});


// экземпляр редактированя профиля
const userInfo = new UserInfo({
  userName: profileTitle,
  userContent:  profileSubtitle
});

const popupEditProfile = new PopupWithForm(selectorEditProfile, (data) => {
  userInfo.setUserInfo(data); 
  popupEditProfile.close(); 
});
openFormEdit.addEventListener('click', () => {
   // сбрасываем поля импутов, чтоб исключить появление текста для невалидных строк и отключаю кноку submit
  validatorEditForm.disableSubmitResetInput();
  popupEditProfile.open();
  const {title, content} = userInfo.getUserInfo();
  inputName.value = title;
  inputContent.value = content;
});
popupEditProfile.setEventListener();
popupFullScreen.setEventListener();
popupAddCard.setEventListener();

//блок валидации форм
const validatorEditForm = new FormValidator (validationConfig, formEdit);
  validatorEditForm.enableValidation();
const validatorAddForm = new FormValidator (validationConfig, formAdd);
  validatorAddForm.enableValidation();
///////////////////////////////////
function updateQuote() {
  let quoteElement = document.querySelector('.profile__subtitle');
fetch('https://api.kanye.rest')
.then((res) => {
    return res.json(); // возвращаем результат работы метода и идём в следующий then
  })
.then((data) => {
  quoteElement.textContent = data.quote;
})
  
}
document.querySelector('.profile__avatar').addEventListener('click', updateQuote)
//////////////////////////////

  /*
  const popupFullScreen = new PopupWithImage (selectorImageOverlay);
// callback открытия картинки в overlay
function callBackFunction(link, name) {
  popupFullScreen.open(link, name);
}
// ф-ция создания карточки
function createCard(item) {
  const card = new Card (item.link, item.name, callBackFunction).renderCard();
    return card
}
// ф-ция добавления карточки
function addCardToDom(card) {
  cardList.addItem(card);
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    
    const card = createCard(item); //вызов  ф-ции создания карточки
    addCardToDom(card); //вызов  ф-ции добавления карточки
  }
}, selectorContainer);
cardList.rendererItems();


  const popupAddCard = new PopupWithForm(selectorAddCard, (item) => {
    const card = createCard(item); //вызов  ф-ции создания карточки
    addCardToDom(card); //вызов  ф-ции добавления карточки

    // закрытие popup после submit
    popupAddCard.close();
  });
openFormAdd.addEventListener('click', ()=> {
  // сбрасываем поля импутов, чтоб исключить появление текста для невалидных строк и отключаю кноку submit
  validatorAddForm.disableSubmitResetInput();
  popupAddCard.open();
  
});


// экземпляр редактированя профиля
const userInfo = new UserInfo({
  userName: profileTitle,
  userContent:  profileSubtitle
});

const popupEditProfile = new PopupWithForm(selectorEditProfile, (data) => {
  userInfo.setUserInfo(data); 
  popupEditProfile.close(); 
});
openFormEdit.addEventListener('click', () => {
   // сбрасываем поля импутов, чтоб исключить появление текста для невалидных строк и отключаю кноку submit
  validatorEditForm.disableSubmitResetInput();
  popupEditProfile.open();
  const {title, content} = userInfo.getUserInfo();
  inputName.value = title;
  inputContent.value = content;
});
popupEditProfile.setEventListener();
popupFullScreen.setEventListener();
popupAddCard.setEventListener();

//блок валидации форм
const validatorEditForm = new FormValidator (validationConfig, formEdit);
  validatorEditForm.enableValidation();
const validatorAddForm = new FormValidator (validationConfig, formAdd);
  validatorAddForm.enableValidation();
  */