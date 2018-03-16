'use strict';

var slider = document.querySelector('.slider');
var slideBefore = slider.querySelector('.slider__image--before');
var slideAfter = slider.querySelector('.slider__image--after');
var toggleBefore = slider.querySelector('.slider__toggle--before');
var toggleAfter = slider.querySelector('.slider__toggle--after');
var sliderThumb = slider.querySelector('.range-filter__range-toggle');
var rangeScale = slider.querySelector('.range-filter__range-scale');
var sliderRange = slider.querySelector('.range-filter');
var SLIDER_THUMB_OFFSET = 13;


var showSlide = function (evt) {
  if (evt.target === toggleAfter) {
    slideBefore.classList.add('hide-slide');
    slideAfter.classList.add('show-slide');

    rangeScale.classList.add('range-filter--move');
    toggleAfter.disabled = true;
    toggleBefore.disabled = false;

    sliderThumb.style.left = '100%';
  }
  else if (evt.target === toggleBefore) {
    slideBefore.classList.remove('hide-slide');
    slideAfter.classList.remove('show-slide');

    rangeScale.classList.remove('range-filter--move');
    toggleAfter.disabled = false;
    toggleBefore.disabled = true;
    sliderThumb.style.left = '';
  }
};

toggleAfter.addEventListener('click', showSlide);
toggleBefore.addEventListener('click', showSlide);

var getCoords = function (elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  }
};

sliderThumb.addEventListener('mousedown', function (evt) {

  evt.preventDefault();

  var thumbCoords = getCoords(sliderThumb);
  var rangeCoords = getCoords(sliderRange);
  var shiftX = evt.pageX - thumbCoords.left;

  var onMouseMove = function (moveEvt) {

    moveEvt.preventDefault();

    var newLeft = moveEvt.pageX - shiftX - rangeCoords.left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    var rightEdge = sliderRange.offsetWidth - sliderThumb.offsetWidth + SLIDER_THUMB_OFFSET;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    sliderThumb.style.left = newLeft + 'px';

    var sliderThumbValue = Math.floor(newLeft / rightEdge * 100) + '%';
    slideAfter.style.width = sliderThumbValue;
  }

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
});
