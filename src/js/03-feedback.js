import localStorage from './localstorage.js';

const feedbackFormEl = document.querySelector('.feedback-form');

const feedbackFormData = {};
const FEEDBACK_FORM_KEY = 'feedback-form-state';

console.log(feedbackFormEl);

fillFeedbackFormFields();

function fillFeedbackFormFields() {
  const feedbackFormDataFromLS = localStorage.load(FEEDBACK_FORM_KEY);

  if (feedbackFormDataFromLS === undefined) {
    return;
  }

  for (const key in feedbackFormDataFromLS) {
    feedbackFormEl.elements[key].value = feedbackFormDataFromLS[key];
  }
}

feedbackFormEl.addEventListener('input', onFeedbackFormFieldsInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormFieldsInput(event) {
  const feedbackFormField = event.target;
  const formFieldName = feedbackFormField.name;
  const formFieldValue = feedbackFormField.value;

  feedbackFormData[formFieldName] = formFieldValue;

  localStorage.save(FEEDBACK_FORM_KEY, feedbackFormData);

  console.log(feedbackFormData);
}

function onFeedbackFormSubmit(event) {
  event.preventDefault();

  localStorage.remove(FEEDBACK_FORM_KEY);
}
