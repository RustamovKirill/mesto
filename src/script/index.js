import FormValidator from '../pages/FormValidator.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import '../pages/index.css'; // импортировали стили проекта
import 
{initialCards,
validationConfig,
selectorImageOverlay, selectorAddCard, selectorEditProfile, selectorContainer,
formEdit, formAdd,
openFormEdit,
openFormAdd,
profileTitle, profileSubtitle, inputName, inputContent} from './utils/constants.js';

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


  const popupNewCard = new PopupWithForm(selectorAddCard, (item) => {
    createCard(item)
    // закрытие popup после submit
    popupNewCard.close();
  });
openFormAdd.addEventListener('click', ()=> {
  // сбрасываем поля импутов, чтоб исключить появление текста для невалидных строк и отключаю кноку submit
  validatorAddForm.disableSubmitResetInput();
  popupNewCard.open();
  
});


// экземпляр редактированя профиля
const userInfo = new UserInfo({
  userName: profileTitle,
  userContent:  profileSubtitle
});

const newEditPopup = new PopupWithForm(selectorEditProfile, (data) => {
  userInfo.setUserInfo(data); 
  newEditPopup.close(); 
});
openFormEdit.addEventListener('click', () => {
   // сбрасываем поля импутов, чтоб исключить появление текста для невалидных строк и отключаю кноку submit
  validatorEditForm.disableSubmitResetInput();
  newEditPopup.open();
  const {name, content} = userInfo.getUserInfo();
  inputName.value = name;
  inputContent.value = content;
});
newEditPopup.setEventLesteners();
popupFullScreen.setEventLesteners();
popupNewCard.setEventLesteners();

//блок валидации форм
const validatorEditForm = new FormValidator (validationConfig, formEdit);
  validatorEditForm.enableValidation();
const validatorAddForm = new FormValidator (validationConfig, formAdd);
  validatorAddForm.enableValidation();
