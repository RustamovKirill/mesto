let openForm = document.querySelector('#open-form'); //переменная кнопки открытия popup
let closeForm = document.querySelector('.popup__button'); //переменная кнопки закрытия popup
let saveButton = document.querySelector('.input__button-save'); //переменная кнопки сохранить
let popup = document.querySelector('.popup'); //переменная с блоком popup
let profileTitle = document.querySelector('.profile__title'); //поле с именем
let profileSubtitle = document.querySelector('.profile__subtitle');//поле с описанием

//функция запускающая popup
function openPopup() {
    popup.classList.add('popup_open');
    document.querySelector('.input__text_type_name').value = profileTitle.textContent;
    document.querySelector('.input__text_type_content').value = profileSubtitle.textContent;
}
//функция закрывающая popup
function closePopup() {
    popup.classList.remove('popup_open');
}
document.querySelector('.input').addEventListener('submit', function (event) {
    event.preventDefault();
    profileTitle.textContent = document.querySelector('.input__text_type_name').value;
    profileSubtitle.textContent = document.querySelector('.input__text_type_content').value;
});
// обработка нажатия кнопкой Enter
saveButton.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        closePopup();
    }
});
openForm.addEventListener('click', openPopup); //дейсвие по нажатию на кнопку открытия ручка
closeForm.addEventListener('click', closePopup); //дейсвие по нажатию на кнопку Х, закрытие формы
saveButton.addEventListener('click', closePopup);//дейсвие по нажатию на кнопку Сохранить