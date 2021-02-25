let openForm = document.querySelector('#open-form'); //переменная кнопки открытия popup
let closeForm = document.querySelector('.popup__button');//переменная кнопки закрытия popup
let popup = document.querySelector('.popup');//объявляем переменную с блоком popup
//переменная с полем имени, тут будет отображаться текст веденный в поле textName
let profileTitle = document.querySelector('.profile__title');
//переменная с полем, где будет отображться информация записанная в переменную textSubtitle
let profileSubtitle = document.querySelector('.profile__subtitle');
//переменная содержащая значения в блоке с классом input
let inputs = document.querySelector('.input');
//объявляем переменную с полем ввода имени
let textName = document.querySelector('.input__text_type_name');
//объявляем переменную с полем ввода описания
let textSubtitle = document.querySelector('.input__text_type_content');

//функция открывающая popup и отображает значения, которые отображаються на странице
function openPopup(event) {
    popup.classList.add('popup_open');
    textName.value = profileTitle.textContent;
    textSubtitle.value = profileSubtitle.textContent;
}
//функция закрывающая popup, потем удаления модификатора класса popup_open
function closePopup() {
    popup.classList.remove('popup_open');
}
//функция отправляет изменения, которые были внесены в поля «Имя» и «О себе»
function form(event) {
    event.preventDefault();
    profileTitle.textContent = textName.value;
    profileSubtitle.textContent = textSubtitle.value;
    closePopup();
}
inputs.addEventListener('submit', form);//запуск функии form после обновления значения 
openForm.addEventListener('click', openPopup); //слушатель открытия формы
closeForm.addEventListener('click', closePopup); //дейсвие по нажатию на кнопку Х, закрытие формы