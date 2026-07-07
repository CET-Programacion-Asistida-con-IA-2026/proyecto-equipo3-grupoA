/* ===========================
   ViajaSafe — script.js
=========================== */

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- MOBILE NAV TOGGLE ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Cerrar el menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ---- FADE IN ON SCROLL (Intersection Observer) ----
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

fadeEls.forEach(el => fadeObserver.observe(el));

// ---- ACCORDION ----
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const btn = item.querySelector('.accordion-btn');

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Cerrar todos
    accordionItems.forEach(i => i.classList.remove('open'));

    // Abrir el clickeado (si no estaba abierto)
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

// ---- ACTIVE NAV LINK ON SCROLL ----
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === `#${id}`) {
            a.classList.add('active');
          }
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => sectionObserver.observe(s));

// ---- FORMULARIO ----
const form = document.getElementById('commentForm');
const formSuccess = document.getElementById('formSuccess');
const userNameInput = document.getElementById('userName');
const userCommentInput = document.getElementById('userComment');
const errorNombre = document.getElementById('errorNombre');
const errorComentario = document.getElementById('errorComentario');

function validateField(input, errorEl, message) {
  if (!input.value.trim()) {
    input.classList.add('error');
    errorEl.textContent = message;
    return false;
  }
  input.classList.remove('error');
  errorEl.textContent = '';
  return true;
}

userNameInput.addEventListener('input', () => {
  if (userNameInput.value.trim()) {
    userNameInput.classList.remove('error');
    errorNombre.textContent = '';
  }
});

userCommentInput.addEventListener('input', () => {
  if (userCommentInput.value.trim()) {
    userCommentInput.classList.remove('error');
    errorComentario.textContent = '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombreValido = validateField(
    userNameInput,
    errorNombre,
    'Por favor, ingresá tu nombre.'
  );
  const comentarioValido = validateField(
    userCommentInput,
    errorComentario,
    'Por favor, escribí un comentario antes de enviar.'
  );

  if (!nombreValido || !comentarioValido) return;

  // Simular envío exitoso
  form.style.opacity = '0';
  form.style.transform = 'translateY(-10px)';
  form.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  setTimeout(() => {
    form.style.display = 'none';
    formSuccess.classList.remove('hidden');
    formSuccess.style.opacity = '0';
    formSuccess.style.transform = 'translateY(10px)';
    formSuccess.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        formSuccess.style.opacity = '1';
        formSuccess.style.transform = 'translateY(0)';
      });
    });
  }, 350);
});

// ---- SMOOTH ACTIVE LINK STYLE ----
const styleTag = document.createElement('style');
styleTag.textContent = `
  .nav-links a.active {
    color: var(--clr-accent) !important;
  }
`;
document.head.appendChild(styleTag);
// ===========================
// CENTROS DE ATENCIÓN A LA MUJER
// LISTA DE CENTROS
// ===========================

const centros = [

{
nombre:"Comisaría de la Mujer y la Familia - Tres de Febrero",
tipo:"comisaria",
direccion:"Tres de Febrero, Buenos Aires",
telefono:"011 2194-2533"
},

{
nombre:"Comisaría de la Mujer y la Familia - San Martín",
tipo:"comisaria",
direccion:"San Martín, Buenos Aires",
telefono:"011 4512-6712"
},

{
nombre:"Comisaría de la Mujer y la Familia - San Justo",
tipo:"comisaria",
direccion:"San Justo, La Matanza, Buenos Aires",
telefono:"Consultar"
},

{
nombre:"Comisaría de la Mujer y la Familia - Morón",
tipo:"comisaria",
direccion:"Morón, Buenos Aires",
telefono:"Consultar"
},

{
nombre:"Comisaría de la Mujer y la Familia - José León Suárez",
tipo:"comisaria",
direccion:"José León Suárez, San Martín, Buenos Aires",
telefono:"Consultar"
},

{
nombre:"Comisaría de la Mujer y la Familia - Hurlingham",
tipo:"comisaria",
direccion:"Hurlingham, Buenos Aires",
telefono:"Consultar"
},

{
nombre:"Comisaría de la Mujer y la Familia - Gregorio de Laferrere",
tipo:"comisaria",
direccion:"Gregorio de Laferrere, La Matanza, Buenos Aires",
telefono:"011 2102-4555"
},

{
nombre:"Comisaría de la Mujer y la Familia - San Isidro",
tipo:"comisaria",
direccion:"San Isidro, Buenos Aires",
telefono:"Consultar"
},

{
nombre:"Comisaría de la Mujer y la Familia - San Fernando",
tipo:"comisaria",
direccion:"San Fernando, Buenos Aires",
telefono:"011 4519-9882"
},

{
nombre:"Comisaría de la Mujer y la Familia - Vicente López",
tipo:"comisaria",
direccion:"Vicente López, Buenos Aires",
telefono:"011 4711-7887"
},

{
nombre:"Comisaría de la Mujer y la Familia - Tigre",
tipo:"comisaria",
direccion:"Tigre, Buenos Aires",
telefono:"011 2121-6865"
},

{
nombre:"Comisaría de la Mujer y la Familia - Esteban Echeverría",
tipo:"comisaria",
direccion:"Esteban Echeverría, Buenos Aires",
telefono:"Consultar"
},

{
nombre:"Comisaría de la Mujer y la Familia - Lomas de Zamora",
tipo:"comisaria",
direccion:"Lomas de Zamora, Buenos Aires",
telefono:"011 4244-1474"
},

{
nombre:"Comisaría de la Mujer y la Familia - Florencio Varela",
tipo:"comisaria",
direccion:"Florencio Varela, Buenos Aires",
telefono:"Consultar"
},

{
nombre:"Comisaría de la Mujer y la Familia - Ituzaingó",
tipo:"comisaria",
direccion:"Ituzaingó, Buenos Aires",
telefono:"Consultar"
},

{
nombre:"Comisaría de la Mujer y la Familia - Merlo",
tipo:"comisaria",
direccion:"Merlo, Buenos Aires",
telefono:"(0220) 483-6060"
},

{
nombre:"Centro Integral de la Mujer Isabel Calvo",
tipo:"centro",
direccion:"Humberto 1° 250, San Telmo, CABA",
telefono:"Consultar"
},

{
nombre:"Centro Integral de la Mujer Alicia Moreau",
tipo:"centro",
direccion:"Presidente José Evaristo Uriburu 1022, Recoleta, CABA",
telefono:"Consultar"
},

{
nombre:"Centro Integral de la Mujer Margarita Malharro",
tipo:"centro",
direccion:"Agüero 301, Almagro, CABA",
telefono:"Consultar"
},

{
nombre:"Centro Integral de la Mujer Pepa Gaitán",
tipo:"centro",
direccion:"Pichincha 1765, Boedo, CABA",
telefono:"Consultar"
},

{
nombre:"Centro Integral de la Mujer Florentina Gómez Miranda",
tipo:"centro",
direccion:"Patricias Argentinas 277, Caballito, CABA",
telefono:"Consultar"
},

{
nombre:"Centro Integral de la Mujer Dignxs de Ser",
tipo:"centro",
direccion:"Lautaro 188, Flores, CABA",
telefono:"Consultar"
},

{
nombre:"Centro Integral de la Mujer Minerva Mirabal",
tipo:"centro",
direccion:"Av. Fernández de la Cruz 4208, Villa Lugano, CABA",
telefono:"Consultar"
},

{
nombre:"Centro Integral de la Mujer Carolina Muzzili",
tipo:"centro",
direccion:"Avellaneda 3751, Floresta, CABA",
telefono:"Consultar"
},

{
nombre:"Centro Integral de la Mujer María Gallego",
tipo:"centro",
direccion:"Av. Francisco Beiró 5229, Villa Devoto, CABA",
telefono:"011 4568-1245"
},

{
nombre:"Centro Integral de la Mujer Lohana Berkins",
tipo:"centro",
direccion:"Av. Triunvirato y Crisólogo Larralde, CABA",
telefono:"Consultar"
},

{
nombre:"Centro Integral de la Mujer Macacha Güemes",
tipo:"centro",
direccion:"Vuelta de Obligado 1524, Belgrano, CABA",
telefono:"Consultar"
},
{
nombre:"Centro de Justicia de la Mujer - La Boca",
tipo:"justicia",
direccion:"Av. Don Pedro de Mendoza 2689, La Boca, CABA",
telefono:"0800-999-68537"
},

{
nombre:"Centro de Justicia de la Mujer - Caballito",
tipo:"justicia",
direccion:"Yerbal 31, Caballito, CABA",
telefono:"0800-999-68537"
},

{
nombre:"Centro de Justicia de la Mujer - Microcentro",
tipo:"justicia",
direccion:"Av. de Mayo 654, CABA",
telefono:"0800-999-68537"
},

{
nombre:"Subsecretaría de Mujeres, Géneros y Diversidad",
tipo:"otro",
direccion:"Av. 53 N°653, La Plata, Buenos Aires",
telefono:"(221) 489-3960"
},

{
nombre:"Casa de la Mujer",
tipo:"otro",
direccion:"Av. Francisco Beiró 5229, Villa Devoto, CABA",
telefono:"(011) 4512-6712"
},

{
nombre:"Dirección General de Violencia de Género - Sede Central",
tipo:"otro",
direccion:"Rodney 301, Chacarita, CABA",
telefono:"Consultar"
},

{
nombre:"Dirección General de Violencia de Género - Sede Comuna 1",
tipo:"otro",
direccion:"Av. de los Inmigrantes 2250, Retiro, CABA",
telefono:"Consultar"
},

{
nombre:"Dirección General de Violencia de Género - Sede Comuna 4",
tipo:"otro",
direccion:"Zavaleta 425, Parque Patricios, CABA",
telefono:"Consultar"
},

{
nombre:"Dirección General de Violencia de Género - Sede Comuna 6",
tipo:"otro",
direccion:"Av. Patricias Argentinas 277, Caballito, CABA",
telefono:"Consultar"
},

{
nombre:"Dirección General de Violencia de Género - Sede Comuna 8",
tipo:"otro",
direccion:"Av. Roca 5252, Villa Lugano, CABA",
telefono:"Consultar"
},

{
nombre:"Violencia Familiar y de Género - Oficina de Atención",
tipo:"otro",
direccion:"Ciudad de Buenos Aires",
telefono:"Consultar"
}

];


// ===========================
// FUNCIONES DE CENTROS
// ===========================

const centrosGrid = document.getElementById("centrosGrid");
const buscarCentro = document.getElementById("buscarCentro");
const filtroTipo = document.getElementById("filtroTipo");
const centrosContador = document.getElementById("centrosContador");


function crearLinkMaps(centro){

  const direccion = `${centro.nombre} ${centro.direccion}`;

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;

}


function mostrarCentros(lista){

  if(!centrosGrid) return;

  centrosGrid.innerHTML = "";

  centrosContador.textContent =
  `${lista.length} centros encontrados`;


  lista.forEach(centro=>{


    const tarjeta = document.createElement("article");

    tarjeta.classList.add("centro-card");


const tipos = {
  comisaria: "COMISARÍA",
  centro: "CENTRO INTEGRAL",
  justicia: "JUSTICIA",
  otro: "ORGANISMO"
};

tarjeta.innerHTML = `

<div class="card-top">

  <div class="card-icon">📍</div>

  <span class="card-tag">
    ${tipos[centro.tipo]}
  </span>

</div>

<h3>${centro.nombre}</h3>

<hr>

<p class="card-info">
  📍 ${centro.direccion}
</p>

<p class="card-info">
  ☎ ${
    centro.telefono !== "Consultar"
    ? `<a href="tel:${centro.telefono}">${centro.telefono}</a>`
    : "Consultar"
  }
</p>

<a
class="btn-maps"
href="${crearLinkMaps(centro)}"
target="_blank">

Ver en Google Maps

</a>

`;


centrosGrid.appendChild(tarjeta);

  });

}



function filtrarCentros(){


const texto = buscarCentro.value.toLowerCase();

const tipo = filtroTipo.value;


const resultado = centros.filter(centro=>{


const coincideTexto =
centro.nombre.toLowerCase().includes(texto) ||
(centro.direccion &&
centro.direccion.toLowerCase().includes(texto));

const coincideTipo =
tipo === "todos" ||
centro.tipo === tipo;


return coincideTexto && coincideTipo;


});


mostrarCentros(resultado);


}



if(buscarCentro){

buscarCentro.addEventListener(
"input",
filtrarCentros
);

}


if(filtroTipo){

filtroTipo.addEventListener(
"change",
filtrarCentros
);

}


// mostrar al cargar

mostrarCentros(centros);