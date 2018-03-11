'use strict';

var slider = document.querySelector('.results');
var resultsBefore = slider.querySelector('.results__before');
var resultsAfter = slider.querySelector('.results__after');
var toggleBefore = slider.querySelector('.results__toggle--before');
var toggleAfter = slider.querySelector('.results__toggle--after');
var resultsRangeToggle = slider.querySelector('.range-filter__range-toggle');
var rangeScale = slider.querySelector('.range-filter__range-scale');


var showSlide = function (evt) {
  if (evt.target === toggleAfter) {
    resultsAfter.classList.add('results-show-slide');
    rangeScale.classList.add('range-filter--move');
    toggleAfter.disabled = true;
    toggleBefore.disabled = false;

    resultsRangeToggle.style.left = '100%';
  }
  else if (evt.target === toggleBefore) {
    resultsAfter.classList.remove('results-show-slide');
    rangeScale.classList.remove('range-filter--move');
    toggleAfter.disabled = false;
    toggleBefore.disabled = true;
    resultsRangeToggle.style.left = '';
  }
};

toggleAfter.addEventListener('click', showSlide);
toggleBefore.addEventListener('click', showSlide);


