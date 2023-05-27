import throttle from 'lodash.throttle';
import localStorage from './localstorage.js';

const feedbackFormEl = document.querySelector('.feedback-form');

const feedbackFormData = {};
const FEEDBACK_FORM_KEY = 'feedback-form-state';

fillFeedbackFormFields();

function fillFeedbackFormFields() {
  const feedbackFormDataFromLS = localStorage.load(FEEDBACK_FORM_KEY);

  if (feedbackFormDataFromLS === undefined) {
    return;
  }

  for (const key in feedbackFormDataFromLS) {
    if (feedbackFormDataFromLS.hasOwnProperty(key)) {
      feedbackFormEl.elements[key].value = feedbackFormDataFromLS[key];
      feedbackFormData[key] = feedbackFormDataFromLS[key];
    }
  }
}

feedbackFormEl.addEventListener(
  'input',
  throttle(onFeedbackFormFieldsInput, 500)
);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormFieldsInput(event) {
  const feedbackFormField = event.target;
  const formFieldName = feedbackFormField.name;
  const formFieldValue = feedbackFormField.value;

  feedbackFormData[formFieldName] = formFieldValue;

  localStorage.save(FEEDBACK_FORM_KEY, feedbackFormData);
}

function onFeedbackFormSubmit(event) {
  event.preventDefault();

  // console.log(feedbackFormData);

  feedbackFormObjectKeys = Object.keys(feedbackFormData);

  for (const key of feedbackFormObjectKeys) {
    console.log(key);
  }

  // event.currentTarget.reset();
  // localStorage.remove(FEEDBACK_FORM_KEY);
}
