'use strict'

var form = document.querySelector('.form');
var inputs = form.querySelectorAll('.form__input');
var submit = form.querySelector('.form__submit');
var inputName = form.querySelector('input[type="text"]');
var inputNumber = form.querySelector('input[type="number"]');

var validateInput = function (input) {
  if (input.validity.valueMissing) {
    input.setCustomValidity('Обязательное поле для заполнения');
    input.classList.add('error');
  }
  else if (input.validity.tooShort) {
    input.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    input.classList.add('error');
  }
  else if (input.validity.rangeUnderflow) {
    input.setCustomValidity('Минимальное значение веса ' + input.getAttribute('min'));
    input.classList.add('error');
  }
  else if (input.validity.rangeOverflow) {
    input.setCustomValidity('Максимальное значение веса ' + input.getAttribute('max'));
    input.classList.add('error');
  }
  else if (input.validity.patternMismatch) {
    input.setCustomValidity('Наберите номер в правильном формате');
    input.classList.add('error');
  }
  else {
    input.setCustomValidity('');
    input.classList.remove('error');
  }
};

form.addEventListener('invalid', function (evt) {
  var input = evt.target;
  validateInput(input);
}, true);

form.addEventListener('input', function (evt) {
  var input = evt.target;
  input.setCustomValidity('');
  input.classList.remove('error');
});
