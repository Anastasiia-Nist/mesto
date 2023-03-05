// показать текст ошибки
const showError = (errorElement, message, inputErrorClass) => {
  errorElement.textContent = `${message}`;
  errorElement.classList.add(inputErrorClass);
};
// спрятать текст ошибки
const hiddenError = (errorElement, inputErrorClass) => {
  errorElement.textContent = "";
  errorElement.classList.remove(inputErrorClass);
};

// функция проверки на валидность
const setInputState = (inputElement, isValid, options) => {
  const {inputSectionSelector, inputErrorSelector, inputErrorClass, inputInValide} = options;
  const inputSectionElement = inputElement.closest(inputSectionSelector); //находим ближайшего родителя с классом form__section у инпута
  const errorElement = inputSectionElement.querySelector(inputErrorSelector); //в родителе ищем класс form__input-error
  if (isValid) {
    // если форма валидна, isValid === true
    hiddenError(errorElement, inputErrorClass, inputInValide); //скрываем span с классами form__input-error и form__input-error_active
    inputElement.classList.remove(inputInValide); // удаляем красный бордер
  } else {
    //если нет
    showError(errorElement, inputElement.validationMessage, inputErrorClass, inputInValide); // показываем span с классами form__input-error и form__input-error_active
    inputElement.classList.add(inputInValide); // добавляем красный бордер
  }
};

// добавление disabled к нопке сохранить/создать
const disableButton = (buttonElement) => {
  buttonElement.setAttribute("disabled", true);
};
// удаление disabled у кнопки сохранить/создать
const enableButton = (buttonElement) => {
  buttonElement.removeAttribute("disabled");
};

// переключение кнопки сохранить/создать
const toggleButtonState = (inputs, submitElement) => {
  const formIsValid = inputs.every(
    (inputElement) => inputElement.validity.valid
  ); // вернёт false, если хотя бы один элемент будет false
  // проверка на валидность формы
  if (formIsValid) {
    enableButton(submitElement);
  } else {
    disableButton(submitElement);
  }
};

// переключение span
const toggleInputState = (inputElement, options) => {
  const isValid = inputElement.validity.valid; // получаем значение isValid
  setInputState(inputElement, isValid, options); //запускаем проверку на валидность с полученым значением isValid
};

//навешиваем слушатели на все инпуты
const setEventListeners = (form, options) => {
  const submitElement = form.querySelector(options.submitSelector);
  const inputs = Array.from(form.querySelectorAll(options.inputSelector));
  // перебираем все инпуты
  inputs.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      // навешиваем слушатель на каждый инпут
      toggleInputState(inputElement, options); // запускаем переключатель span
      toggleButtonState(inputs, submitElement); // запускаем переключатель кнопки
    });
  });
  toggleButtonState(inputs, submitElement); // дизаблим кнопку сразу при открытии попапа
};

// функция валидации
const enableValidation = ({
  formSelector,
  submitSelector,
  inputSelector,
  inputSectionSelector,
  inputErrorSelector,
  inputErrorClass,
  inputInValide,
}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    setEventListeners(form, {
      submitSelector,
      inputSelector,
      inputSectionSelector,
      inputErrorSelector,
      inputErrorClass,
      inputInValide,
    });
  });
};
