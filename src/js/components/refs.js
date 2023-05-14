export const refs = {
  //Мобильное меню
  mobileMenu: document.querySelector('.js-mobileMenu'),
  burger: document.querySelector('.js-burger'),
  burgerCloseIcon: document.querySelector('.js-burgerClose'),
  burgerMenuIcon: document.querySelector('.js-burgerMenu'),
  //
  booksHandler: document.querySelector('.books__handler'),
  categoryTitle: document.querySelector('.books__title'),
  scrollTopBtn: document.querySelector('.btn-top'),
  scrollTopTarget: document.querySelector('#top-target'),
  //Авторизация
  regForm: document.querySelector('.js-regForm'),
  logOutButton: document.querySelector('.js-logOutButton'),
  //Header`s elements
  elmsNonAuth: document.querySelectorAll('.js-elmsNonAuth'),
  elmsAuth: document.querySelectorAll('.js-elmsAuth'),
  userName: document.querySelectorAll('.js-userName'),

  allCategoriesList: document.querySelector('.categories__list'),
  suppList: document.querySelector('.support__list'),
  // кнопки Sign-In,Sign-Up
  signInBtn: document.querySelector('.sign-in__Btn'),
  signUpBtn: document.querySelector('.buttons-auth__sign'),
  loginModal: document.querySelector('.modal-overlay'),
  bodyRef: document.querySelector('body'),
  shopList: document.querySelector('.shopping-list'),
  // Модалка
  closeModal: document.querySelector('.modal__btn-close'),
  addBtn: document.querySelector('.btn-add-list'),
  modalWindow: document.querySelector('[data-modal]'),
  bookCard: document.querySelector('.card__thumb'),
  backdrop: document.querySelector('.backdrop'),
};
