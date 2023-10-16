const burgerMenu = document.querySelector('.header__burger');
const iconBurger = document.querySelector('.header__burger-menu-icon');
const closeIconBurger = document.querySelector('.header__burger-icon-close');
const blackBg = document.querySelector('.div-for-blackout');

document.onclick = function (e) {
  if (!e.target.closest('.wrapper__header-container')) {
    burgerMenu.classList.remove('header__burger_active');
    // blackBg.classList.toggle('blackout');
  }
};

iconBurger.onclick = function () {
  burgerMenu.classList.toggle('header__burger_active');
  // blackBg.classList.toggle('blackout');
};

closeIconBurger.onclick = function () {
  burgerMenu.classList.remove('header__burger_active');
  // blackBg.classList.remove('blackout');
};

// blackBg.onclick = function () {
//   burgerMenu.classList.remove('open-menu');
//   // blackBg.classList.remove('blackout');
// };
