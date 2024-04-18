const carouselBlock = document.querySelector('.carousel');
const paginationBlock = carouselBlock.querySelector('.pagination');

const carouselItems = carouselBlock.querySelectorAll('.carousel__item');
const paginationList = [...document.querySelectorAll('.pagination__button')];

const checkPagination = (id) => {
  const  paginationCurrent = paginationBlock.querySelector('.pagination__button--current');
  paginationCurrent.classList.remove('pagination__button--current');
  paginationList[id].classList.add('pagination__button--current');
}

const checkSlider = (id) => {
  const sliderCurrent = carouselBlock.querySelector('.slider--current');

  sliderCurrent.classList.remove('slider--current');
  carouselItems[id].classList.add('slider--current');
  const sliderNumberBlock = carouselItems[id].querySelector('.slider__number');

  let sliderNumberCount = id + 1;
  if (sliderNumberCount < 10) {
    sliderNumberCount = (`00${sliderNumberCount}`).slice(-2);
  }

  sliderNumberBlock.textContent = sliderNumberCount;
}

const checkImg = (evt) => {
  const sliderCurrent = carouselBlock.querySelector('.slider--current');
  const imgCurrent = sliderCurrent.querySelector('.slider__item--current');

  const imgList = sliderCurrent.querySelectorAll('.slider__item');

  let currentId = 0;
  let currentImgNew = imgList[currentId];

  for (let id = 0; id < imgList.length; id++) {
    if (imgList[id] == imgCurrent) {
      if (evt.currentTarget.classList.contains('carousel__button--next')) {
        currentId = id + 1;
      } else {
        currentId = id - 1;
      }

      if (currentId >= imgList.length) {
        currentId = 0;
      }

      if (currentId < 0) {
        currentId = imgList.length - 1;
      }

      currentImgNew = imgList[currentId];
      break;
    }
  }

  imgCurrent.classList.remove('slider__item--current');
  currentImgNew.classList.add('slider__item--current');
}

const onPaginationClick = (evt) => {
  if (paginationList.indexOf(evt.target) >= 0) {
    const idPagination = paginationList.indexOf(evt.target);

    checkPagination(idPagination);
    checkSlider(idPagination);
  }
}

paginationBlock.addEventListener('click', onPaginationClick);

const carouselControls = carouselBlock.querySelectorAll('.carousel__button');

carouselControls.forEach((control) => {
  control.addEventListener('click', checkImg);
});
