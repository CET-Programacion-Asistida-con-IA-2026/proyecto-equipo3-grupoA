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
