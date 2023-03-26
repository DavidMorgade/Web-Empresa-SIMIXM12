'use strict';
/// Elementos del DOM
const body = document.querySelector('body');
const footer = document.querySelector('.footer');
const btnHeader = document.querySelector('.header__button');
const header = document.querySelector('.header');
const backdrop = document.querySelector('.backdrop');
const desplegableEnlace = document.querySelectorAll('.desplegable__enlace');
const formulario = document.querySelector('.formulario');
const banderas = document.querySelector('#flags');
const textosACambiar = document.querySelectorAll('[data-section]')

// establecemos el idioma inicial
let idioma = localStorage.getItem('idioma') || 'en';

// Espera a que el documento inicie la app
document.addEventListener('DOMContentLoaded', () => {
  initApp(); // Función que se encarga de iniciar todo el resto de las funciones
});

// Función que ejecuta el resto de funciones
const initApp = () => {
  changeLanguage(idioma)
  eventListeners();
};

// Funcion para cambiar el idioma
const changeLanguage = async languageSelected => {
  const spainIcon = document.querySelector(`[data-language=es] img`);
  const americaIcon = document.querySelector(`[data-language=en] img`);
  console.log(spainIcon, americaIcon)
  if(languageSelected === 'es') {
    console.log('espa;ol')
    spainIcon.style.opacity = '1';
    americaIcon.style.opacity = '0.5';
  } else {
    americaIcon.style.opacity = '1';
    spainIcon.style.opacity = '0.5';
  }
  localStorage.setItem('idioma', languageSelected); // guardamos el idioma en local storage;
  const requestJson = await fetch(`./languages/${languageSelected}.json`);
  const text = await requestJson.json();
  for(const textoACambiar of textosACambiar) {
    const seccion = textoACambiar.dataset.section;
    const valor = textoACambiar.dataset.value;
    textoACambiar.textContent = text[seccion][valor];
  }
}

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
// Alerta de fomulario en caso de error
const crearAlertaFormulario = () => {
  if (document.querySelector('.formulario__alerta')) return;
  const mensaje = document.createElement('p');
  mensaje.classList.add('formulario__alerta');
  mensaje.textContent = 'Rellene todos los campos con un formato válido';
  formulario.appendChild(mensaje);
  setTimeout(() => {
    mensaje.remove();
  }, 3000);
};
/// Cargar Spinner
const cargarSpinner = () => {
  formulario.remove(); // quitamos el formulario
  const spinner = document.createElement('div'); // creamos el div para hacer un spinner
  spinner.innerHTML = `<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`; // cuerpo html del spinner
  spinner.classList.add('lds-spinner'); // estilos css
  footer.insertBefore(spinner, footer.firstChild); // lo añadimos al footer arriba de las redes sociales
};
// Respuesta de la request
const respuestaRequest = (valida, texto) => {
  const contenedor = document.createElement('div');
  contenedor.classList.add('respuesta');
  const icono = document.createElement('img');
  const mensaje = document.createElement('p');
  mensaje.textContent = texto; // agregamos el mensaje de la API al texto
  contenedor.appendChild(icono);
  contenedor.appendChild(mensaje);
  if (valida) {
    icono.src = '../images/success.png';
  } else {
    icono.src = '../images/failed.png';
  }
  footer.insertBefore(contenedor, footer.firstChild);
};

///////////////////////////////Eventos en la interfaz////////////////////////////////////////////
const eventListeners = () => {
  btnHeader.addEventListener('click', () => {
    crearMenuMobile();
  });
  backdrop.addEventListener('click', () => {
    quitarMenu();
  });
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    mandarEmail();
  });
  banderas.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language)
  })
};
////////////////////// PETICION FETCH PARA EL FORMULARIO //////////
const mandarEmail = () => {
  let esValida = false; // Determina si la respuesta del servidor fue con exito o no.
  const URL = 'https://singetecbackend-production.up.railway.app/'; /// URL DE LA API
  const name = document.getElementById('nombre').value; /// valor del nombre
  const email = document.getElementById('email').value; /// valor del email
  const message = document.getElementById('mensaje').value; // valor del mensaje
  const data = { name, email, message }; // formamos un objeto de JS con los valores

  /// VALIDACION DEL FORMULARIO LADO CLIENTE ///
  if (
    data.name.trim() === '' ||
    data.email.trim() === '' ||
    data.message.trim() === ''
  ) {
    crearAlertaFormulario();
    return;
  }
  formulario.reset(); // Si el formulario pasa la validación reseteamos
  console.log(data);
  cargarSpinner(); // añadimos el spinner de carga
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json', // la api pide JSON
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data), // parseamos a JSON
  })
    .then((res) => {
      if (res.ok) {
        esValida = true;
      } else {
        esValida = false;
      }
      return res.text();
    })
    .then((data) => {
      footer.removeChild(document.querySelector('.lds-spinner'));
      respuestaRequest(esValida, data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    }); /// parseamos el JSON a objeto de JS
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
