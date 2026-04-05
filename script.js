// --- MARQUEE INFINITO: duplicar items para loop sin cortes ---
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".marquee-track");
  if (track) {
    const items = track.innerHTML;
    track.innerHTML += items;
  }
});

// --- LIGHTBOX ---
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeLightbox();
});

// Hacer clickeables todas las imagenes de galeria, mosaic y staff
document.addEventListener("DOMContentLoaded", function () {
  var selectors =
    ".gallery-item img, .final-mosaic img, .card-img-container img, .trabaja-card img";
  document.querySelectorAll(selectors).forEach(function (img) {
    img.style.cursor = "pointer";
    img.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openLightbox(this.src);
    });
  });
});

// --- ENVIO COTIZACION ---
function enviarCotizacion() {
  const nombre = document.getElementById("nombre_cliente").value;
  const telefono = document.getElementById("telefono_cliente").value;
  const email = document.getElementById("email_cliente").value;
  const mensaje = document.getElementById("mensaje_cliente").value;

  if (nombre === "" || telefono === "") {
    alert("Por favor, ingresa tu nombre y teléfono para contactarte.");
    return;
  }

  const miNumero = "51954160517";
  const textoWA = `*NUEVA COTIZACIÓN WEB*%0A*Nombre:* ${nombre}%0A*Teléfono:* ${telefono}%0A*Email:* ${email}%0A*Evento:* ${mensaje}`;
  const urlWA = `https://api.whatsapp.com/send?phone=${miNumero}&text=${textoWA}`;

  fetch("https://formsubmit.co/ajax/vanessavalenzuela309@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      Empresa_Nombre: nombre,
      Telefono: telefono,
      Email: email,
      Detalles_Evento: mensaje,
      _subject: "NUEVA COTIZACIÓN DESDE LA WEB",
    }),
  });

  window.open(urlWA, "_blank");
}

// --- CONTADOR ANIMADO ---
function startInfiniteCounter() {
  const elements = document.querySelectorAll(".num-anim");
  elements.forEach((el) => {
    const endValue = parseInt(el.getAttribute("data-val"));
    const suffix = el.getAttribute("data-suffix") || "";
    let startValue = 0;
    const duration = 2000;
    const stepTime = duration / endValue;
    const counter = setInterval(() => {
      startValue++;
      el.textContent = startValue + suffix;
      if (startValue === endValue) {
        clearInterval(counter);
        setTimeout(() => {
          el.textContent = "0";
          restartIndividual(el);
        }, 3000);
      }
    }, stepTime);
  });
}

function restartIndividual(el) {
  const endValue = parseInt(el.getAttribute("data-val"));
  const suffix = el.getAttribute("data-suffix") || "";
  let startValue = 0;
  const duration = 2000;
  const stepTime = duration / endValue;
  const counter = setInterval(() => {
    startValue++;
    el.textContent = startValue + suffix;
    if (startValue === endValue) {
      clearInterval(counter);
      setTimeout(() => {
        el.textContent = "0";
        restartIndividual(el);
      }, 3000);
    }
  }, stepTime);
}

window.onload = startInfiniteCounter;
