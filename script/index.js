import FormValidator from './FormValidator.js';
import Card from './Card.js';
import 
{initialCards,
object,
formEdit, formAdd,
openFormEdit, closeFormEdit,
openFormAdd, closeFormAdd,
popupEdit, popupAdd, popupImage,
profileTitle, profileSubtitle, inputs, inputName, inputContent} from './constants.js';

initialCards.forEach((item) => {
  const card = new Card (item, '.template');
  const cardElement = card.renderCard();
  //Добавляем в DOM
  document.querySelector('.elements').prepend(cardElement);
});

//универсальная функция, которую в дальнейшем использую для открытия всех popup
function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closeClickEscape);
}
// навешиваем слушателя на попап, для закрытия кликом по overlay
const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach(popup => {
popup.addEventListener('click', closeClickOverlay);
});
//функция закрывающая popup, потем удаления модификатора класса popup_open
function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closeClickEscape);
}
//закрытие popup по нажатию на Escape
const closeClickEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openClass = document.querySelector('.popup_open');
    closePopup(openClass);
  }
}
//функция закрытия попап путем нажатия на overlay
function closeClickOverlay (evt) {
  if (evt.target.classList.contains('popup_open')) {
    closePopup(evt.target);
  } 
}

//функция открывающая popup и отображает значения, который изначально отображается на странице
function openPopupEdit() {
  inputName.value = profileTitle.textContent;
  inputContent.value = profileSubtitle.textContent;
  openPopup(popupEdit);
}

//функция отправляет изменения, которые были внесены в поля «Имя» и «О себе»
function handleProfileSumbit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputContent.value;
  closePopup(popupEdit);
}
//запуск функции form после обновления значения
inputs.addEventListener('submit', handleProfileSumbit);
//слушатель открытия формы
openFormEdit.addEventListener('click', () => {
  const validatorEditForm = new FormValidator (object, formEdit);
  validatorEditForm.enableValidation();
  openPopupEdit();
});
//дейсвие по нажатию на кнопку Х, закрытие формы
closeFormEdit.addEventListener('click', () => closePopup(popupEdit));
//открытие и закрытие popup-2 при нажатии на соответсвующие кнопки
openFormAdd.addEventListener('click', () => {
  const validatorAddForm = new FormValidator (object, formAdd);
  validatorAddForm.enableValidation();
  openPopup(popupAdd);
});
closeFormAdd.addEventListener('click', () => closePopup(popupAdd));

//функция добавления новой карточки на страницу 
function addNewCard(evt) {
  evt.preventDefault();
  //поля input для ввода информации для новой карточки
  const typeTitle = document.querySelector('.input__text_type_title'); 
  const typeLink = document.querySelector('.input__text_type_link');
  //информация введенная в поля input хранится в переменой
  const cardAdd = {name:typeTitle.value, link:typeLink.value};
  const newCard = new Card (cardAdd, '.template');
  const newCardElement = newCard.renderCard();
  document.querySelector('.elements').prepend(newCardElement);
  closePopup(popupAdd);
  typeTitle.value = '';
  typeLink.value = '';
}
//переменна блока input добавляющая новую карточку на страницу
const inputsAddCard = document.querySelector('.input_add-card');
inputsAddCard.addEventListener('submit', addNewCard);

//функция отвечает за открытие картинки весь размер на экран popup-3
export function openPopupImage(){
  openPopup(popupImage);
  popupImage.addEventListener('click', closeClickOverlay);
}
const closePopupImage = document.querySelector('.popup__button_type_close-image');
//закрытие при нажатии на крестик popup с картинкой на увеличенном экране
closePopupImage.addEventListener('click', () => closePopup(popupImage));
