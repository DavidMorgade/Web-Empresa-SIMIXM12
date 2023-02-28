'use strict';
/// Elementos del DOM
const body = document.querySelector('body');
const btnHeader = document.querySelector('.header__button');
const header = document.querySelector('.header');
const backdrop = document.querySelector('.backdrop');
const desplegableEnlace = document.querySelectorAll('.desplegable__enlace');
const formulario = document.querySelector('.formulario');
// Espera a que el documento inicie la app
document.addEventListener('DOMContentLoaded', () => {
  initApp(); // Función que se encarga de iniciar todo el resto de las funciones
});

// Función que ejecuta el resto de funciones
const initApp = () => {
  eventListeners();
};

////////////////////////////////Crear elementos de la UI//////////////////////////////////////////////
const crearMenuMobile = () => {
  backdrop.style.display = 'block'; // sacamos el backdrop con css
  const contenedor = document.createElement('div'); // creamos el contenedor de la modal
  contenedor.classList.add('desplegable');
  // unica forma que he encontrado de restaurar el body en caso de que se clickee un link en mobile
  contenedor.addEventListener('click', quitarMenu);
  contenedor.innerHTML = `
  <ul class="desplegable__lista">
    <li class="desplegable__item"
      ><a href="#producto" class="desplegable__enlace">Producto</a></li
    >
    <li class="desplegable__item"
      ><a href="#opiniones" class="desplegable__enlace">Opiniones</a></li
    >
    <li class="desplegable__item"
      ><a href="#precio" class="desplegable__enlace">Precio</a></li
    >
    <li class="desplegable__item"
      ><a href="#nosotros" class="desplegable__enlace">¿Quienes Somos?</a></li
    >
    <li class="desplegable__item"
      ><a href="#contacto" class="desplegable__enlace">Contacto</a></li
    >
  </ul>
  `; // estructura de la modal
  header.appendChild(contenedor); // la añadimos al header
  setTimeout(() => {
    contenedor.style.transform = 'scaleY(1)';
  }, 100);
  btnHeader.classList.add('header__button--effect');
  // Aqui topamos el body para que no se pueda hacer scroll cuando tenemos abierto el menu
  body.style.height = '100%';
  body.style.overflowY = 'hidden';
};
//// Quitar el menu desplegable
const quitarMenu = () => {
  const desplegable = document.querySelector('.desplegable');
  header.removeChild(desplegable); // quitamos la ventana modal
  backdrop.style.display = 'none'; // escondemos el backdrop
  btnHeader.classList.remove('header__button--effect');
  // volvemos al estado normal del body
  body.style.height = 'auto';
  body.style.overflowY = 'scroll';
};

///////////////////////////////Eventos en la interfaz////////////////////////////////////////////
const eventListeners = () => {
  btnHeader.addEventListener('click', () => {
    crearMenuMobile();
  });
  backdrop.addEventListener('click', () => {
    quitarMenu();
  });
  formulario.addEventListener('click', (e) => {
    e.preventDefault();
  });
};

// Swiper opiniones

const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'none',
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  spaceBetween: 100,
  autoplay: {
    delay: 5000,
  },
  // Diferente numero de slides dependiendo del tamaño de la pantalla
  breakpoints: {
    990: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
