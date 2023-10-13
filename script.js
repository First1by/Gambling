const burgerMenu = document.querySelector('.burger-menu');
const iconBurger = document.querySelector('.burger-icon');
const closeIconBurger = document.querySelector('.icon-close-burger');
const blackBg = document.querySelector('.div-for-blackout');

iconBurger.onclick = function () {
  burgerMenu.classList.toggle('open-menu');
  blackBg.classList.toggle('blackout');
};

closeIconBurger.onclick = function () {
  burgerMenu.classList.remove('open-menu');
  blackBg.classList.remove('blackout');
};

blackBg.onclick = function () {
  burgerMenu.classList.remove('open-menu');
  blackBg.classList.remove('blackout');
  currentCard.classList.add('hidden');
};
