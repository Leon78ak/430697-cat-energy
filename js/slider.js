'use strict';

var slider = document.querySelector('.slider');
var sliderImages = document.querySelector('.slider__images');
var slideBefore = slider.querySelector('.slider__image--before');
var slideAfter = slider.querySelector('.slider__image--after');
var toggleBefore = slider.querySelector('.slider__toggle--before');
var toggleAfter = slider.querySelector('.slider__toggle--after');
var sliderThumb = slider.querySelector('.range-filter__range-toggle');
var rangeScale = slider.querySelector('.range-filter__range-scale');
var sliderRange = slider.querySelector('.range-filter');
var SLIDER_THUMB_OFFSET = 24;

var MOBILE_WIDTH = 320;

var isToggleAfter = function (evt) {
  debugger;
  if (evt.target === toggleAfter) {
    slideAfter.style.width = '100%';
    if (sliderImages.clientWidth <= MOBILE_WIDTH) {
      slideBefore.style.width = '0';
    }
    rangeScale.classList.add('range-filter--move');
    toggleAfter.disabled = true;
    toggleBefore.disabled = false;

    sliderThumb.style.left = '100%';
  }
}

var isToggleBefore = function (evt) {
  debugger;
  if (evt.target === toggleBefore) {
    slideBefore.style.width = '100%';
    slideAfter.style.width = '0';

    rangeScale.classList.remove('range-filter--move');
    toggleAfter.disabled = false;
    toggleBefore.disabled = true;
    sliderThumb.style.left = '';
  }
};

toggleAfter.addEventListener('click', isToggleAfter);
toggleBefore.addEventListener('click', isToggleBefore);

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
      toggleAfter.disabled = false;
      toggleBefore.disabled = true;
    }

    var rightEdge = sliderRange.offsetWidth - sliderThumb.offsetWidth + SLIDER_THUMB_OFFSET;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
      toggleAfter.disabled = true;
      toggleBefore.disabled = false;
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
