import FormValidator from './components/FormValidator.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import '../pages/index.css'; // импортировали стили проекта
import 
{initialCards,
object, submitButton,
formEdit, formAdd,
openFormEdit,
openFormAdd,
profileTitle, profileSubtitle, inputName, inputContent} from './utils/constants.js';


//функция отключения Submit
function disabledButton() {
  submitButton.forEach((button) =>{
  button.classList.add(object.disableSubmitButton);
  button.setAttribute('disabled', 'disabled')});
}

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


  const popupNewCard = new PopupWithForm('.popup_type_add-element', (item) => {
      const newСard = new Card(item.link, item.title, callBackFunction).renderCard();
      cardList.addItem(newСard);
      popupNewCard.close();
  });
openFormAdd.addEventListener('click', ()=> {
  popupNewCard.open();
  // отключаю кноку submit
  disabledButton();
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
  // отключаю кноку submit
  disabledButton();
});
newEditPopup.setEventLesteners();
popupFullScreen.setEventLesteners();
popupNewCard.setEventLesteners();

//блок валидации форм
const validatorEditForm = new FormValidator (object, formEdit);
  validatorEditForm.enableValidation();
const validatorAddForm = new FormValidator (object, formAdd);
  validatorAddForm.enableValidation();

