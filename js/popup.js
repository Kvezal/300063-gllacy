var buttonOpen = document.querySelector('.main-contacts .btn');
var modal = document.querySelector('.feedback-form');
var modalBackground = document.querySelector('.overlay');
var buttonClose = modal.querySelector('.close');

var login = modal.querySelector('input[type="text"]');
var email = modal.querySelector('input[type="email"]');
var comment = modal.querySelector('textarea');

buttonOpen.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.add('content-show');
  modalBackground.classList.add('overlay-appear');
  login.focus();
});

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27) {
    if(modal.classList.contains('content-show'))
    modal.classList.remove('content-show');
    modalBackground.classList.remove('overlay-appear');
    modal.classList.remove('feedback-form-invalid');
    } else if(event.keyCode === 13) {
      if(!login.value || !email.value || !comment.value) {
        modal.classList.remove('feedback-form-invalid');
        modal.offsetWidth = modal.offsetWidth;
        event.preventDefault();
        modal.classList.add('feedback-form-invalid');
      };
    };
});

buttonClose.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.remove('content-show');
  modalBackground.classList.remove('overlay-appear');
  modal.classList.remove('feedback-form-invalid');
});

modal.addEventListener('submit', function(event) {
  if(!login.value || !email.value || !comment.value) {
    modal.classList.remove('feedback-form-invalid');
    modal.offsetWidth = modal.offsetWidth;
    event.preventDefault();
    modal.classList.add('feedback-form-invalid');
  }
});

ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [59.938536, 30.3224549],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Gllacy',
      balloonContent: 'Раздаем мороженки'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/ice_cream_icon.png',
      iconImageSize: [218, 142],
      iconImageOffset: [-28, -142]
    });
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myPlacemark);
});


