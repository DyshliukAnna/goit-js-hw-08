import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
let userData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

const refs = {
  formEl: document.querySelector('form'),
  emailEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onFormInput, 500));

reload();

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: refs.emailEl.value, message: refs.textareaEl.value });
  if (refs.emailEl.value !== '' || refs.textareaEl.value !== '') {
    localStorage.removeItem(LOCALSTORAGE_KEY);
    refs.formEl.reset();
    userData = {};
  } else {
    alert('Будь ласка заповніть всі поля форми');
  }
}

function onFormInput() {
  userData = { email: refs.emailEl.value, message: refs.textareaEl.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
}

function reload() {
  if (userData) {
    refs.emailEl.value = userData.email || '';
    refs.textareaEl.value = userData.message || '';
  }
}
// function populateTextarea() {
//   const saveMessage = localStorage.getItem(LOCALSTORAGE_KEY);
//   if (saveMessage) {
//     refs.textareaEl.value = saveMessage;
//   }

// function onInput(e) {
//     // Працює на будь яке поле в формі і записує значення з поля у наш обєкт formData
// formData[e.target.name] = e.target.value
// console.log(formData)
// }
