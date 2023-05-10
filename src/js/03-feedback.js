import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const STORAGE = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};
const formData = {
  email: '',
  message: '',
};
populateTextarea();
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem(STORAGE);
  e.currentTarget.reset();
  console.log(formData);
});
function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE, stringifiedData);
}
function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE));
  if (savedMessage === null) {
    return;
  }

  refs.textarea.value = savedMessage.message || '';
  refs.input.value = savedMessage.email || '';
  formData.email = savedMessage.email || '';
  formData.message = savedMessage.message || '';
}
