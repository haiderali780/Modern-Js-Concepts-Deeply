'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//ADDING_COOKIES(SELECTING_CREATING_DELETING_ELEMENTS)
const header = document.querySelector('.header');
const cookieMessage = document.createElement('div');
cookieMessage.classList.add('cookie-message');
cookieMessage.innerHTML =
  'We have use your functionality and add it to the cookies <button class="btn btn--close--cookie">Got it!</button>';
header.append(cookieMessage);
document
  .querySelector('.cookie-message')
  .addEventListener('click', function () {
    cookieMessage.remove();
  });

  