<a name="readme-top"></a>

<br />

<br />

<div align="center">
  <a href="https://github.com/DavidMorgade/Web-Empresa-SIMIXM12">
    <img src="./images/LogoReadme.jpg" alt="Logo" height="100">
  </a>
  
<br />

<h1 align="center">FRONTEND WEB EMPRESA SINGETEC</h1>

<br />

  <h2 align="center">
    David Morgade - Jorge Arrebola - Oscar Villén
  </h2>
  
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li><a href="#introduccion">Introducción</a></li>
    <li><a href="#funcionalidad">Funcionalidad</a></li>
    <li><a href="#header">Header</a></li>
    <li><a href="#main">Main</a></li>
    <li><a href="#formulario">Formulario</a></li>
    <li><a href="#javascript">Javascript</a></li>
  </ol>
</details>

<br/>
<br/>

## Introduccion

   <br/>
    <p>Este repositorio representa el proyecto WEB de la empresa SINGETEC, se trata de un FrontEnd creado en HTML, CSS y JS es completamente responsive y cuenta con un formulario de contacto para poder comunicarse con la empresa SINGETEC</p>
   <br/>
    <p>Para navegar por este archivo README utilize la tabla de contenidos situada en la parte superior del mismo documento</p>
   <br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Funcionalidad

<p>En este proyecto se utiliza mayoritariamente la metodología BEM y un enforque Mobile First, en el cual el CSS inicial es para dispositivos del tamaño de un teléfono móvil, que despues mediante CSS Grid, Flexbox y Media Queries se adapta al tamaño de escritorio</p>
</br>
</br>
</br>
<p>Para crear la Web se han utilizado herramientas como VSCode (con la extensión Five Server para desarrollo) y el propio repositorio de GitHub, además del propio Teams para la comunicación entre los creadores del proyecto</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Header

<p>Nuestro Header se define con la siguiente estructura HTML:</p>

```html
<header class="header">
  <div class="backdrop"></div>
  <div class="logo__container">
    <img
      class="header__logo"
      src="/images/Logo.png"
      alt="Imagen Logo de la empresa"
    />
    <p class="logo__text">Servicio Integral de Gestión Técnica</p>
  </div>
  <div class="header__button">
    <div></div>
  </div>
  <div class="header__navegacion">
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
  </div>
</header>
```

<p>Aquí podemos encontrar elementos como el logo de la empresa y la barra de navegación, en la versión de móvil ocultamos este menú para mostrar un clasico menu de hamburguesa (ver clas header__button), este botón creará el menu mediante codigo Javascript:</p>

```js
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
```

<p>Creamos la funcion crearMenuMobile(), esta creará los diferentes elementos html además de añadir un listener para eliminar de nuevo la navegación en caso de que se pulse el backdrop (al cual se agrega display: block al clickar el botón)</p>

<p>Cada enlace de este menu de navegación nos lleva a diferentes partes de la web gracias a la ayuda de Anchor tags que están linkeados con las diferentes secciones mediante ids</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Main

<p>Nuestro Main es la parte principal del documento, este incluye todas las partes importantes como la introducción, un resumen de lo que es la empresa, carrusel de opiniones, planes de precio y quienes somos</p>

<p>Destacamos en el main nuestra sección de opiniones, este es un Carrrussel de opiniones creado con SwiperJS que es un pequeño addon de JS que nos permite crear estas animaciones con mayor facilidad</p>

HTML:

```html
<div class="swiper">
  <div class="swiper-wrapper">
    <!-- Diferentes opiniones -->
    <div class="swiper-slide card">
      <img
        src="/images/avatar-ali.png"
        alt="Avatar de ali"
        class="card__imagen"
      />
      <h3 class="card__name">Souleima García</h3>
      <p class="card__texto"
        >“Desde que contratamos el servicio de SINGETEC no hemos vuelto a tener
        ningún problema informático, los técnicos son rápidos y eficaces.”</p
      >
    </div>
    <div class="swiper-slide card">
      <img
        src="/images/avatar-anisha.png"
        alt="Avatar de ali"
        class="card__imagen"
      />
      <h3 class="card__name">María Li</h3>
      <p class="card__texto"
        >“El sistema de tickets de la aplicación es maravilloso, adaptado
        completamente a mi empresa, lo recomiendo.”</p
      >
    </div>
    <div class="swiper-slide card">
      <img
        src="/images/avatar-richard.png"
        alt="Avatar de ali"
        class="card__imagen"
      />
      <h3 class="card__name">Aurelio Matamoros</h3>
      <p class="card__texto"
        >“Tengo un empresa en el sector de la construcción, sin tener ni idea de
        informática los chicos de SINGETEC me han resulto todas las dudas que
        tenía y he acabado contratando su servicio”</p
      ></div
    >
    <div class="swiper-slide card">
      <img
        src="/images/avatar-shanai.png"
        alt="Avatar de ali"
        class="card__imagen"
      />
      <h3 class="card__name">Cayetana Muñoz</h3>
      <p class="card__texto"
        >“Herede la empresa de mi padre y no tenía ni idea de como funcionaba
        todo el sistema, los chicos de SINGETEC me han salvado la vida.”</p
      ></div
    >
  </div>
  <!-- Paginacion -->
  <div class="swiper-pagination"></div>
</div>
```

<p>Con esta estructura HTML crearemos el swiper mediante JS, es fácil e intuitivo de usar, podemos configurar diferentes tipos de Swiper y este es el que hemos seleccionado:</p>

```js
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
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Formulario

<p>Usamos una estructura básica y semántica de formulario con 3 campos: Nombre, Correo y Mensaje, para que la persona interesada en nuestro servicio se pueda poner en contacto con nosotros:</p>

```html
<form class="formulario">
  <fieldset class="formulario__fieldset">
    <legend class="formulario__titulo">Contacta con nosotros</legend>
    <div class="formulario__campo">
      <label for="nombre">Nombre</label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        value=""
        placeholder="Nombre"
        maxlength="30"
      />
    </div>
    <div class="formulario__campo">
      <label for="email">Correo Electrónico</label>
      <input
        type="email"
        name="email"
        id="email"
        value=""
        placeholder="Correo Electrónico"
        maxlength="30"
      />
    </div>
    <div class="formulario__campo">
      <label for="mensaje">Mensaje</label>
      <textarea
        name="mensaje"
        id="mensaje"
        value=""
        placeholder="Pregunta por nuestros servicios..."
        cols="40"
        rows="5"
        maxlength="400"
      ></textarea>
    </div>
  </fieldset>
  <div class="formulario__btn--container">
    <input type="submit" class="formulario__btn btn" value="Enviar" />
  </div>
</form>
```

<p>Este formulario no lo manejaremos con una petición POST normal, si no que usaremos la API del navegador fetch, que nos permitira comunicarnos con nuestro microservicio en el BackEnd:</p>

```js
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
```

<p>Como podemos ver en el código anterior, también validaremos el formulario en caso de que los campos estén vacios, para el correo utilizaremos la validación nativa del HTML</p>

## Javascript

<p>Para desglosar un poco el código de Javascript, explicaremos en esta sección como funciona, primero que todo tenemos un listener que espera a que el contenido del DOM cargue para comenzar la función initApp()</p>

```js
// Espera a que el documento inicie la app
document.addEventListener('DOMContentLoaded', () => {
  initApp(); // Función que se encarga de iniciar todo el resto de las funciones
});

// Función que ejecuta el resto de funciones
const initApp = () => {
  eventListeners();
};
```

<p>Una vez que el documento inicia y se inicia la función initApp, esta ejecutra la función eventListeners, que se encarga de manejar todos los listeners de nuestro código:</p>

```js
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
};
```

<p>Tendremos listeners para crear el menu mobile, para quitarlo y para manejar el formulario, estas funciones son ayudadas por otras funciones para hacer el proyecto escalable en caso de que se quiera mejorar a futuro sea con una mayor sencillez</p>

<p>Por ejemplo tendremos funciones para crear alertas en caso de que el formulario no funcione correctamente:</p>

```js
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
```

<p>Para añadir el Spinner de carga una vez se haga la petición:</p>

```js
/// Cargar Spinner
const cargarSpinner = () => {
  formulario.remove(); // quitamos el formulario
  const spinner = document.createElement('div'); // creamos el div para hacer un spinner
  spinner.innerHTML = `<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`; // cuerpo html del spinner
  spinner.classList.add('lds-spinner'); // estilos css
  footer.insertBefore(spinner, footer.firstChild); // lo añadimos al footer arriba de las redes sociales
};
```

<p>Para dar un feedback una vez se lanze el formulario (fallida o existosa):</p>

```js
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
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Creditos

<p>Este proyecto está creado por completo por Jorge Arrebola, Oscar Villén y David Morgade, alumnos del modulo M12 (proyecto) de SIMIX</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
