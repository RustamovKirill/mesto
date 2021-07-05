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
formEdit, formAdd, formAvatar,
openFormEdit,
openFormAdd, openFormAvatar, templateSelector,
profileTitle, profileSubtitle, inputName, inputContent, elementsUserInfo, popupTypeDeleteImage, selectorAvatar} from '../script/utils/constants.js';
import PopupDeleteImage from "../script/components/PopupDeleteImage";

const userInfo = new UserInfo(elementsUserInfo)
const popupFullScreen = new PopupWithImage (selectorImageOverlay);
const popupDeleteImage = new PopupDeleteImage(popupTypeDeleteImage)
popupDeleteImage.setEventListeners()
const renderCards = new Section(selectorContainer)

// экземпляр класса Api
const api = new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/cohort-25`,
  headers: {
    authorization: 'cb2c5b35-47f8-4c5f-87cb-b887592d9733',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo().then(({name, about, avatar, _id}) => {
    const myId = _id
    userInfo.setUserInfo({name, about, avatar})

    //Функция создания новой карточки
    const createNewCard = (card) => {
        const newCard = new Card(
            templateSelector,
            {myId, ...card},
            popupFullScreen,
            //Callback удаления карточки
            function removeCard(cardId) {
                popupDeleteImage.open()
                popupDeleteImage.setSubmitAction(() => {
                    api.deleteCard(cardId)
                        .then(() => popupDeleteImage.close())
                        .then(() => newCard.remove())
                        .catch(err => console.log(err))
                })
            },
            function putLike(cardId) {
                api.likeCard(cardId)
                    .then((res) => {
                        newCard.querySelector('.element__likes-counter').textContent = res.likes.length
                        newCard.querySelector('.element__heart-button').classList.add('element__heart-button_active')
                    })
                    .catch(err => console.log(err))
            },
            function removeLike(cardId) {
                api.deleteLikeCard(cardId)
                    .then((res) => {
                        newCard.querySelector('.element__likes-counter').textContent = res.likes.length
                        newCard.querySelector('.element__heart-button').classList.remove('element__heart-button_active')
                    })
                    .catch(err => console.log(err))
            }
        ).getCard()
        return newCard
    }
    api.getInitialCards().then((data) => {
        renderCards.rendererItems({
            items: data.reverse(),
            renderer: (element) => {
                const newCard = createNewCard(element)
                renderCards.addItem(newCard)
            }
        })
        const popupAddCard = new PopupWithForm(selectorAddCard, (item) => {
            const submitText = document.querySelector(selectorAddCard).querySelector('.input__button-save')
            submitText.textContent = 'Создание...'
            api.addNewCards(item)
                .then((data) => {
                    submitText.textContent = 'Создать...'
                    renderCards.addItem(createNewCard(data))
                    popupAddCard.close()
                })
                .catch(e => console.log(e))
            popupAddCard.close();
        });

        const popupEditProfile = new PopupWithForm(selectorEditProfile, (item) => {
            const submitText = document.querySelector(selectorEditProfile).querySelector('.input__button-save')
            submitText.textContent = 'Сохранение...'
            api.addUserInfo(item)
                .then(data => {
                    submitText.textContent = 'Сохранить'
                    userInfo.setUserInfo(data)
                    popupEditProfile.close()
                })
                .catch(err => console.log(err))
        });

        const popupTypeAvatar = new PopupWithForm(selectorAvatar, item => {
            console.log(item)
            const submitText = document.querySelector(selectorAvatar).querySelector('.input__button-save')
            submitText.textContent = 'Сохранение...'
            api.addNewAvatar(item)
                .then((data) => {
                    submitText.textContent = 'Сохранить'
                    userInfo.setUserInfo(data)
                    popupTypeAvatar.close()
                })
                .catch(e => console.log(e))
        })

        openFormAdd.addEventListener('click', ()=> {
            // сбрасываем поля импутов, чтоб исключить появление текста для невалидных строк и отключаю кноку submit
            validatorAddForm.disableSubmitResetInput();
            popupAddCard.open();
        });

        openFormEdit.addEventListener('click', () => {
            // сбрасываем поля импутов, чтоб исключить появление текста для невалидных строк и отключаю кноку submit
            validatorEditForm.disableSubmitResetInput();
            popupEditProfile.open();
            const {name, about} = userInfo.getUserInfo();
            inputName.value = name;
            inputContent.value = about;
        });
        openFormAvatar.addEventListener('click', () => {
            validatorAvatarForm.disableSubmitResetInput()
            popupTypeAvatar.open();
        });

        const validatorEditForm = new FormValidator (validationConfig, formEdit);
        validatorEditForm.enableValidation();
        const validatorAddForm = new FormValidator (validationConfig, formAdd);
        validatorAddForm.enableValidation();
        const validatorAvatarForm = new FormValidator (validationConfig, formAvatar);
        validatorAvatarForm.enableValidation();
    })
})
