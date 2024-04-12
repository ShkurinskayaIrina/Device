const catalogBlock = document.querySelector('.catalog');
const catalogBnt = catalogBlock.querySelector('.catalog__button');
const catalogList = catalogBlock.querySelector('.catalog__list');

catalogBlock.classList.remove('catalog--nojs');

catalogBnt.addEventListener('click', () => {
  catalogBlock.classList.toggle('catalog--close');
  catalogBlock.classList.toggle('catalog--open');
})
