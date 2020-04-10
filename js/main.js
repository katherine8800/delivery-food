const cartButton = document.querySelector('#cartButton');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');

cartButton.addEventListener('click', function (event) {
  toggleModal()
})

close.addEventListener('click', function (event) {
  toggleModal()
})

function toggleModal() {
  modal.classList.toggle('is-open');
}

new WOW().init();