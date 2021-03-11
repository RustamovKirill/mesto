const openFormEdit = document.querySelector('#open-form'); //переменная кнопки открытия popup
const closeFormEdit = document.querySelector('.popup__button_type_close-edit');//переменная кнопки закрытия popup
const popupEdit = document.querySelector('.popup_type_edit-prifile');//объявляем переменную с блоком popup
const popupAdd = document.querySelector('.popup_type_add-element');//объявил переменную popup, которая добавляет карточку
const popupImage = document.querySelector('.popup_type_show-image');//переменная блока popup с картинкой на весь экран
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
const textName = document.querySelector('.input__text_type_name');
//объявляем переменную с полем ввода описания
const textSubtitle = document.querySelector('.input__text_type_content');
//переменная контейнера с карточками
const elements = document.querySelector('.elements');
//переменная template контейнера
const templateContainer = document.querySelector('.template').content;

//универсальная функция, которую в дальнейшем переиспозьем для открытия всех popup
function openAllPopup(block) {
  block.classList.add('popup_open');
}

//функция открывающая popup и отображает значения, который изначально отображается на странице
function openPopupEdit(evt) {
  textName.value = profileTitle.textContent;
  textSubtitle.value = profileSubtitle.textContent;
  openAllPopup(popupEdit);
}
//функция закрывающая popup, потем удаления модификатора класса popup_open
function closePopupEdit() {
  popupEdit.classList.remove('popup_open');
}
//функция отправляет изменения, которые были внесены в поля «Имя» и «О себе»
function form(evt) {
  evt.preventDefault();
  profileTitle.textContent = textName.value;
  profileSubtitle.textContent = textSubtitle.value;
  closePopupEdit();
}
//запуск функции form после обновления значения
inputs.addEventListener('submit', form);
//слушатель открытия формы
openFormEdit.addEventListener('click', openPopupEdit);
//дейсвие по нажатию на кнопку Х, закрытие формы
closeFormEdit.addEventListener('click', closePopupEdit);

//функции открытия, закрытия 2го popup
function openPopupAdd() {
 openAllPopup(popupAdd);
}
openFormAdd.addEventListener('click', openPopupAdd);

function closePopupAdd() {
  popupAdd.classList.remove('popup_open');
}
closeFormAdd.addEventListener('click', closePopupAdd);

//функция добавления новой карточки на странице
function addNewCard(event) {
  const typeTitle = document.querySelector('.input__text_type_title');// две переменные поля ввода 
  const typeLink = document.querySelector('.input__text_type_link');//в popup, в которых передаеться информация полей
  event.preventDefault();
  //переменная хранит информацию внесенную в поля ввода 2го popup
  const cardAdd = {name:typeTitle.value, link:typeLink.value}
  
  renderCards(cardAdd);
  closePopupAdd();
//делам пустые значения полей ввода при повторном откритии popup формы для внесения новой карточки
  typeTitle.value = '';
  typeLink.value = '';
}
inputsAddCard.addEventListener('submit', addNewCard);

//функция удаления карточек
function deleteCard(evt) {
  const target = evt.target;
  const delForm = target.closest('.element');
  delForm.remove();
}
//
function addClass(evt) {
  evt.target.classList.toggle('element__heart-button_active');
}
//функция отвечает за открытие картинки весь размер на экран
function openPopupImage(element){
  const imgPlace = document.querySelector('.popup__image');
  const subTitleImg = document.querySelector('.popup__subtitle-image');
  imgPlace.src = element.link;
  imgPlace.alt = element.name;
  subTitleImg.textContent = element.name;
  openAllPopup(popupImage);
}
//
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
  
  initialCardsElement.querySelector('.element__image').src = element.link;
  initialCardsElement.querySelector('.element__title').textContent = element.name;
  initialCardsElement.querySelector('.element__image').alt = element.name;
  //переменная кнопки лайк
  const like = initialCardsElement.querySelector('.element__heart-button');
  //переменная кнопки удаления карточки со страницы
  const delButton = initialCardsElement.querySelector('.element__basket-button');
  const clickImage = initialCardsElement.querySelector('.element__image');
  clickImage.addEventListener('click', function() {openPopupImage(element)});
  like.addEventListener('click', addClass);//действие по нажатию на сердечко
  delButton.addEventListener('click', deleteCard);//действие при нажатие на корзину
  elements.prepend(initialCardsElement);
}
initialCards.forEach(renderCards);
//закрытие попап картинки 
const closePopupImage = document.querySelector('.popup__button_type_close-image');
function closeImage() {
  popupImage.classList.remove('popup_open');
}
closePopupImage.addEventListener('click', closeImage);
