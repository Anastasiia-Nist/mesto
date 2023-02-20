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
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
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

//попапы
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup__profile');
const popupCards = document.querySelector('.popup__cards');
//кнопки
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupButtonCloseProfile = document.querySelector('.popup__button-close-profile');
const popupButtonCloseCards = document.querySelector('.popup__button-close-cards');
const cardsButtonAdd = document.querySelector('.profile__button-add');
const cardButtonLike = document.querySelector('.card__button-like');

const profileName =  document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');

const formProfile = document.querySelector('.popup__form-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const careerInput = document.querySelector('.popup__input_type_career');

const formCards = document.querySelector('.popup__form-cards');



//открытие попапа
function openedPopup(popup) {
    popup.classList.add('popup_opened');
    console.log('открытие');
}
//закрытие попапа
function closedPopup(popup) {
    popup.classList.remove('popup_opened');
    console.log('закрытие');
}

// все кнопки закрытия попапа 
popupButtonCloseProfile.addEventListener('click', function() {
    closedPopup(popupProfile);
});
popupButtonCloseCards.addEventListener('click', function() {
  closedPopup(popupCards);
});


// попап блока User
function handleProfilePopup() {
    openedPopup(popupProfile);
    nameInput.value = profileName.textContent;
    careerInput.value = profileCareer.textContent;
}

//отправка формы блока User
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = careerInput.value;
    closedPopup(popupProfile);
}

//добавление карточек
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card__template').content;
const card = document.querySelector(".card");
const cardName = document.querySelector(".card__name"); //название картинки
const linkImageAdd = document.querySelector(".card__img"); //ссылка на картинку

//
function addCard(el) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardName = el.name;
    const cardLink = el.link;
    const cardImg = document.querySelector('.card__img');
    cardElement.querySelector(".card__name").textContent = cardName;
    cardImg.src = cardLink;
    cardsContainer.append(cardElement);
  }

  const addNewCard = (item) => {
    cardsContainer.prepend(addCard(item));
  };

  formCards.addEventListener("submit", (evt) => {
    evt.preventDefault();
    addNewCard(
      (item = {
        name: cardName.value,
        link: linkImageAdd.value,
      })
    );
    // cardsBlock;
    evt.target.reset();
    closedPopup(popupCards);
  });

//лайки карточек
const likeActive = () => {
  cardButtonLike.classList.toggle("card__button-like_active");
};

profileButtonEdit.addEventListener('click', handleProfilePopup);//открытие попапа User
cardsButtonAdd.addEventListener("click", function () {
    openedPopup(popupCards);
  }); //открытие попапа с карточками
formProfile.addEventListener('submit', handleFormSubmit);//отправка формы User
