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
    modal.classList.remove('feenback-form-invalid');
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
