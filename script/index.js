import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Popup from './Popup.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';
const template = '.element'
import 
{initialCards,
object, submitButton,
formEdit, formAdd,
typeTitle, typeLink,
openFormEdit, closeFormEdit,
openFormAdd, closeFormAdd,
popupEdit, popupAdd, popupImage,
profileTitle, profileSubtitle, inputs, inputName, inputContent} from './constants.js';

//блок валидации форм
const validatorEditForm = new FormValidator (object, formEdit);
  validatorEditForm.enableValidation();
const validatorAddForm = new FormValidator (object, formAdd);
  validatorAddForm.enableValidation();
////////////////////////////////////////

///////////////////////////////////////////////////////
const popupFullScreen = new PopupWithImage ('.popup_type_show-image');
// callback открытия картинки в overlay
function callBackFunction(link, name) {
  popupFullScreen.open(link, name);
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card (item.link, item.name, callBackFunction);
    const cardElement = card.renderCard();
    cardList.addItem(cardElement);
  }
},'.elements');
cardList.rendererItems();

//////////////////////////////////////
/*Ошибка где то в этом месте*/
  const popupNewCard = new PopupWithForm('.popup_type_add-element', (item) => {
      const newСard = new Card(item.link, item.name, template, callBackFunction).renderCard();
      cardList.addItem(newСard);
      popupNewCard.close();
  });
openFormAdd.addEventListener('click', ()=> {
  popupNewCard.open();
});


// экземпляр редактированя профиля
const userInfo = new UserInfo({
  userName: profileTitle,
  userContent:  profileSubtitle
});

const newEditPopup = new PopupWithForm('.popup_type_edit-profile', (data) => {
  userInfo.setUserInfo(data); 
  newEditPopup.close(); 
});
openFormEdit.addEventListener('click', () => {
  newEditPopup.open();
  const {name, content} = userInfo.getUserInfo();

  inputName.value = name;
  inputContent.value = content;
});
newEditPopup.setEventLesteners();
popupFullScreen.setEventLesteners();
popupNewCard.setEventLesteners();






