//кнопки
const openFormEdit = document.querySelector('#open-form'); //переменная кнопки открытия popup
const closeFormEdit = document.querySelector('.popup__button_type_close-edit');//переменная кнопки закрытия popup
//переменные 3х popup
const popupEdit = document.querySelector('.popup_type_edit-prifile');//объявляем переменную с блоком popup
const popupAdd = document.querySelector('.popup_type_add-element');//объявил переменную popup, которая добавляет карточку
const popupImage = document.querySelector('.popup_type_show-image');//переменная блока popup с картинкой на весь экран
//кнопки закрытия и открытия
const openFormAdd = document.querySelector('.profile__add-button');//кнопка для открытия формы для добавления карточки с картинкой и названием
const closeFormAdd = document.querySelector('.popup__button_type_close-add');

//переменная с полем имени, тут будет отображаться текст веденный в поле textName
const profileTitle = document.querySelector('.profile__title');
//переменная с полем, где будет отображться информация записанная в переменную textSubtitle
const profileSubtitle = document.querySelector('.profile__subtitle');
//переменная содержащая значения в блоке с классом input
const inputs = document.querySelector('.input');
//переменна блока input добавляющая новую карточку на страницу
const inputsAddCard = document.querySelector('.input_add-card');
//объявляем переменную с полем ввода имени
const inputName = document.querySelector('.input__text_type_name');
//объявляем переменную с полем ввода описания
const inputContent = document.querySelector('.input__text_type_content');
//переменная контейнера с карточками
const elements = document.querySelector('.elements');
//переменная template контейнера
const templateContainer = document.querySelector('.template').content;

//универсальная функция, которую в дальнейшем переиспозьем для открытия всех popup
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
//вызвали функцию переключения состояния кнопки submit,
//чолбы проверять при каждом открытиттpopup
  const buttonSave = popupEdit.querySelector(obj.submitButton);
  const inputsForm = Array.from(popupEdit.querySelectorAll(obj.inputSelector));
  switchButton(inputsForm, buttonSave, obj);
  openPopupEdit();
});
//дейсвие по нажатию на кнопку Х, закрытие формы
closeFormEdit.addEventListener('click', () => closePopup(popupEdit));
//открытие и закрытие popup-2 при нажатии на соответсвующие кнопки
openFormAdd.addEventListener('click', () => {
//вызвали функцию переключения состояния кнопки submit,
//чолбы проверять при каждом открытиттpopup
  const buttonSave = popupAdd.querySelector(obj.submitButton);
  const inputsForm = Array.from(popupAdd.querySelectorAll(obj.inputSelector));
  switchButton(inputsForm, buttonSave, obj);
  openPopup(popupAdd);
});


closeFormAdd.addEventListener('click', () => closePopup(popupAdd));

//функция добавления новой карточки на страницу 
function addNewCard(evt) {
  const typeTitle = document.querySelector('.input__text_type_title');// две переменные поля ввода 
  const typeLink = document.querySelector('.input__text_type_link');//в popup, в которых передаеться информация полей
  evt.preventDefault();
  //переменная хранит информацию внесенную в поля ввода 2го popup
  const cardAdd = {name:typeTitle.value, link:typeLink.value};
  addCard(cardAdd);
  closePopup(popupAdd);
//делам пустые значения полей ввода при повторном откритии popup формы для внесения новой карточки
  typeTitle.value = '';
  typeLink.value = '';
}
inputsAddCard.addEventListener('submit', addNewCard);

//удаления карточек, при нажатии на корзину
function deleteCard(evt) {
  evt.target.closest('.element').remove()
}
//добавление лайка и удление
function handleLikeClick(evt) {
  evt.target.classList.toggle('element__heart-button_active');
}

//функция отвечает за открытие картинки весь размер на экран popup-3
function openPopupImage(element){
  openPopup(popupImage);
  popupImage.addEventListener('click', closeClickOverlay);
  const imgPlace = document.querySelector('.popup__image');
  const subTitleImg = document.querySelector('.popup__subtitle-image');
  imgPlace.src = element.link;
  imgPlace.alt = element.name;
  subTitleImg.textContent = element.name;
}
//массив с неизменным числом карточек
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
//рендер карточек на страницу сайта
function renderCards(element) {
  const initialCardsElement = templateContainer.cloneNode(true);
  const elImage = initialCardsElement.querySelector('.element__image');
  initialCardsElement.querySelector('.element__title').textContent = element.name;
  elImage.src = element.link;
  elImage.alt = element.name;
  //переменная кнопки лайк
  const like = initialCardsElement.querySelector('.element__heart-button');
  //переменная кнопки удаления карточки со страницы
  const delButton = initialCardsElement.querySelector('.element__basket-button');
  const clickImage = initialCardsElement.querySelector('.element__image');
  clickImage.addEventListener('click', () => openPopupImage(element));//действие при нажатии на картинку
  like.addEventListener('click', handleLikeClick);//действие по нажатию на сердечко
  delButton.addEventListener('click', deleteCard);//действие при нажатие на корзину
  //elements.prepend(initialCardsElement);
  return initialCardsElement;
}
function addCard(element){
  elements.prepend(renderCards(element));
}
initialCards.forEach(addCard);
//закрытие popup картинки 
const closePopupImage = document.querySelector('.popup__button_type_close-image');
//закрытие при нажатии на крестик popup с картинкой на увеличенном экране
closePopupImage.addEventListener('click', () => closePopup(popupImage));
