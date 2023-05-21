import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {}

const refs = {
  formEl: document.querySelector('form'),
  emailEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};



// refs.formEl.addEventListener('input', onInput);
refs.formEl.addEventListener('submit', onFormSubmit);
refs.textareaEl.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea()


function onFormSubmit(e) {
    e.preventDefault();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    if (refs.emailEl.value !== '' && refs.textareaEl.value !== '') {
// formData[e.target.name] = e.target.value
// console.log(formData) 
    console.log({ email: refs.emailEl.value, name: refs.textareaEl.value });
     refs.formEl.reset();  
  } else {
    alert('Будь ласка заповніть всі поля форми');
    }
    
};

function onTextareaInput (event) {
    const message = event.target.value
    localStorage.setItem(LOCALSTORAGE_KEY, message)

}

function populateTextarea () {
   const saveMessage = localStorage.getItem(LOCALSTORAGE_KEY)
    if (saveMessage) {
        refs.textareaEl.value = saveMessage
    }
}

// function onInput(e) {
//     // Працює на будь яке поле в формі і записує значення з поля у наш обєкт formData
// formData[e.target.name] = e.target.value
// console.log(formData) 
// }