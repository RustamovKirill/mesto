import FormValidator from '../script/components/FormValidator.js';
import Card from '../script/components/Card.js';
import Section from '../script/components/Section.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';
import './index.css'; // импортировали стили проекта
import 
{initialCards,
validationConfig,
selectorImageOverlay, selectorAddCard, selectorEditProfile, selectorContainer,
formEdit, formAdd,
openFormEdit,
openFormAdd,
profileTitle, profileSubtitle, inputName, inputContent} from '../script/utils/constants.js';

const popupFullScreen = new PopupWithImage (selectorImageOverlay);
// callback открытия картинки в overlay
function callBackFunction(link, name) {
  popupFullScreen.open(link, name);
}
// ф-ция создания карточки
function createCard(item) {
  const card = new Card (item.link, item.name, callBackFunction).renderCard();
    //const cardElement = card.renderCard();
    //cardList.addItem(card);
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


  /*
import FormValidator from '../script/components/FormValidator.js';
import Card from '../script/components/Card.js';
import Section from '../script/components/Section.js';
import PopupWithImage from '../script/components/PopupWithImage.js';
import PopupWithForm from '../script/components/PopupWithForm.js';
import UserInfo from '../script/components/UserInfo.js';
import './index.css'; // импортировали стили проекта
import 
{initialCards,
validationConfig,
selectorImageOverlay, selectorAddCard, selectorEditProfile, selectorContainer,
formEdit, formAdd,
openFormEdit,
openFormAdd,
profileTitle, profileSubtitle, inputName, inputContent} from '../script/utils/constants.js';

const popupFullScreen = new PopupWithImage (selectorImageOverlay);
// callback открытия картинки в overlay
function callBackFunction(link, name) {
  popupFullScreen.open(link, name);
}
// ф-ция создания карточки
function createCard(item) {
  const card = new Card (item.link, item.name, callBackFunction).renderCard();
    //const cardElement = card.renderCard();
    cardList.addItem(card);
} 

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    createCard(item)
  }
}, selectorContainer);
cardList.rendererItems();


  const popupAddCard = new PopupWithForm(selectorAddCard, (item) => {
    createCard(item)
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
popupEditProfile.setEventLesteners();
popupFullScreen.setEventLesteners();
popupAddCard.setEventLesteners();

//блок валидации форм
const validatorEditForm = new FormValidator (validationConfig, formEdit);
  validatorEditForm.enableValidation();
const validatorAddForm = new FormValidator (validationConfig, formAdd);
  validatorAddForm.enableValidation();

  */