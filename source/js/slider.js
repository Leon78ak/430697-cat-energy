'use strict';

var slider = document.querySelector('.slider');
var slideBefore = slider.querySelector('.slider__image--before');
var slideAfter = slider.querySelector('.slider__image--after');
var toggleBefore = slider.querySelector('.slider__toggle--before');
var toggleAfter = slider.querySelector('.slider__toggle--after');
var sliderRangeToggle = slider.querySelector('.range-filter__range-toggle');
var rangeScale = slider.querySelector('.range-filter__range-scale');


var showSlide = function (evt) {
  if (evt.target === toggleAfter) {
    slideBefore.classList.add('hide-slide');
    slideAfter.classList.add('show-slide');

    rangeScale.classList.add('range-filter--move');
    toggleAfter.disabled = true;
    toggleBefore.disabled = false;

    sliderRangeToggle.style.left = '100%';
  }
  else if (evt.target === toggleBefore) {
    slideBefore.classList.remove('hide-slide');
    slideAfter.classList.remove('show-slide');

    rangeScale.classList.remove('range-filter--move');
    toggleAfter.disabled = false;
    toggleBefore.disabled = true;
    sliderRangeToggle.style.left = '';
  }
};

toggleAfter.addEventListener('click', showSlide);
toggleBefore.addEventListener('click', showSlide);


