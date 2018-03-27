'use strict'

var form = document.querySelector('.form');
var inputFields = form.querySelectorAll('.form__input');
var submit = form.querySelector('.form__submit');


/**
 * проверяет валидность поля формы
 * @param  {Element} input поле формы для валидации
 */
var validateInput = function (evt) {
  // debugger;
  var input = evt.target;
  if (!input.value) {
    input.classList.add('form__input--error');
  }
};

var removeValidation = function (input) {
  if (input.classList.contains('form__input--error')) {
    input.classList.remove('form__input--error');
  }
};

submit.addEventListener('click', function () {
  event.preventDefault();

  debugger;
  for (var i = 0; i < inputFields.length; i++) {
    var input = inputFields[i];
    //  if (!input.value) {
    //   console.log('field is blank', inputFields[i]);
    // }
    removeValidation(input);

    validateInput(input);
  }
});

form.addEventListener('focus', function (evt) {
  evt.preventDefault();
  validateInput(evt);
}, true);
