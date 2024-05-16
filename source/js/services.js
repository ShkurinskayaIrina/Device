const servicesBlock = document.querySelector('.services');
const servicesList = servicesBlock.querySelector('.services__list');
const servicesBtbList = [...servicesBlock.querySelectorAll('.services__button')];
const servicesDescription = servicesBlock.querySelectorAll('.services__description');

const checkServiceDescription = (id) => {
  const servicesDescriptionCurrent = servicesBlock.querySelector('.services__description--current');
  servicesDescriptionCurrent.classList.remove('services__description--current');
  servicesDescription[id].classList.add('services__description--current');
}

const onServicesListClick = (evt) => {
  if (evt.target && evt.target.tagName === 'BUTTON') {
    const idActiveElement = servicesBtbList.indexOf(evt.target);
    console.log(idActiveElement);

    const serviceCurrent = servicesBlock.querySelector('.services__item--current');
    if (serviceCurrent) {
      serviceCurrent.classList.remove('services__item--current');
      evt.target.parentElement.classList.add('services__item--current');
      checkServiceDescription(idActiveElement);
    }
  }
}

servicesList.addEventListener('click', onServicesListClick);
