const boton = document.querySelector('.boton');
const ul = document.querySelector('ul');

boton.addEventListener('click', function () {
    ul.classList.toggle('activar');
});