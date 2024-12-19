document.addEventListener("DOMContentLoaded", function () {

  //codice gestione effetto header
  const element = document.querySelector(".part-trasparnt");
  const infoFixed = document.querySelector(".infofixed");
  const header = document.querySelector("header");
  let lastScrollY = window.scrollY; // Memorizza la posizione iniziale dello scroll

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY; // Posizione attuale dello scroll
    const scrollPosition = currentScrollY + window.innerHeight; // Posizione dello scroll + altezza della finestra
    const pageHeight = document.documentElement.scrollHeight; // Altezza totale della pagina

    // Se mancano meno di 150px dalla fine della pagina, nascondi l'elemento
    if (pageHeight - scrollPosition <= 10) {
      infoFixed.style.opacity = "0"; // Nasconde l'elemento
      infoFixed.style.bottom = "-300px"; // Lo sposta fuori dalla vista
    } else {
      // Gestisci il comportamento in base alla direzione dello scroll
      if (currentScrollY > lastScrollY) {
        // Scroll verso il basso
        header.style.backgroundColor = "#0045ff";
        element.style.backgroundColor = "#0045ff";
        infoFixed.style.opacity = "1"; // Rende visibile l'elemento
        infoFixed.style.bottom = "0"; // Posiziona l'elemento in vista
      } else if (currentScrollY < lastScrollY) {
        // Scroll verso l'alto
        element.style.backgroundColor = "var(--primocolore)";
        header.style.backgroundColor = "var(--primocolore)";
        infoFixed.style.opacity = "0"; // Nasconde l'elemento
        infoFixed.style.bottom = "-300px"; // Lo sposta fuori dalla vista
      }
    }

    lastScrollY = currentScrollY; // Aggiorna la posizione precedente
  });

    //codice gestione effetto header



  // Configura l'Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden-before-scroll");
          entry.target.classList.add("animate__fadeInUp"); // Aggiungi la classe di animazione
          observer.unobserve(entry.target); // Interrompe l'osservazione dopo l'attivazione
        }
      });
    },
    {
      threshold: 0.1, // Avvia quando il 20% dell'elemento è visibile
    }
  );

  // Applica l'osservatore agli elementi della seconda sezione
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
  elementsToAnimate.forEach((el) => observer.observe(el));

  //codice per effetto parlalax
  const arrows = document.querySelectorAll(".scroll-arrow");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = arrow.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Scroll fluido
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  const srollscopri = document.querySelectorAll(".scroll-scopri");

  srollscopri.forEach((srollscopri) => {
    srollscopri.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = srollscopri.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Scroll fluido
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  const arrows2 = document.querySelectorAll(".scroll-arrow-special");

  arrows2.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = arrow.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Scroll fluido
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  const arrowsscroll = document.querySelectorAll(".partnerscroll");

  arrowsscroll.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = arrow.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      // Scroll fluido
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  //codice per sidebar

  // Apri e chiudi la sidebar
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("open");
  });

  // Gestisci l'apertura delle sottocategorie al clic
  const hasSubcategoriesLinks = document.querySelectorAll(".has-subcategories");
  hasSubcategoriesLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.stopPropagation(); // Impedisce la chiusura della sidebar
      const subcategories = this.nextElementSibling; // Ottieni il prossimo elemento che è le sottocategorie
      const isOpen = subcategories.classList.contains("open"); // Controlla se sono già aperte

      // Chiudi tutte le sottocategorie
      document.querySelectorAll(".subcategories.open").forEach((subcat) => {
        subcat.classList.remove("open");
      });

      // Se non erano aperte, aprile
      if (!isOpen) {
        subcategories.classList.add("open");
      }
    });
  });

  // Chiudi la sidebar e le sottocategorie quando si fa clic su un altro link
  const sidebarLinks = document.querySelectorAll(
    ".sidebar ul li a:not(.has-subcategories)"
  );
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      document.getElementById("sidebar").classList.remove("open");
      // Chiudi anche le sottocategorie
      document.querySelectorAll(".subcategories.open").forEach((subcat) => {
        subcat.classList.remove("open");
      });
    });
  });

  const images = [
    "img/prova.png",
    "img/software-archiviazione.jpg",
    "img/aereospaziale.jpg",

    "img/train.jpg",
  ];

  let currentImageIndex = 0;
  const serviceSection = document.getElementById("service1");

  function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Crea un nuovo elemento div che si sovrapporrà temporaneamente
    const newBgDiv = document.createElement("div");
    newBgDiv.style.position = "absolute";
    newBgDiv.style.top = 0;
    newBgDiv.style.left = 0; // Posiziona al centro
    newBgDiv.style.width = "100%";
    newBgDiv.style.height = "100%";
    newBgDiv.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    newBgDiv.style.backgroundSize = "cover";
    newBgDiv.style.backgroundPosition = "center";
    newBgDiv.style.transition =
      "transform 1.5s ease-in-out, opacity 1.5s ease-in-out";
    newBgDiv.style.transform = "scale(1.2)"; // Inizia con uno zoom out
    newBgDiv.style.opacity = "0"; // Parte nascosto

    // Aggiungiamo il filtro scuro al nuovo div
    newBgDiv.style.backgroundColor = "rgba(9, 2, 22, 0.7)";
    newBgDiv.style.backgroundBlendMode = "overlay";

    serviceSection.appendChild(newBgDiv);

    // Fai comparire l'immagine con un effetto di zoom-in
    setTimeout(() => {
      newBgDiv.style.transform = "scale(1)"; // Zoom in
      newBgDiv.style.opacity = "1"; // Mostra gradualmente l'immagine
    }, 100);

    // Rimuovi l'immagine precedente con uno zoom-out
    const currentBgDiv = serviceSection.querySelector(".active-bg");
    if (currentBgDiv) {
      currentBgDiv.style.transform = "scale(1.2)"; // Zoom out
      currentBgDiv.style.opacity = "0"; // Nascondi gradualmente
      setTimeout(() => {
        serviceSection.removeChild(currentBgDiv); // Rimuovi l'elemento dopo l'animazione
      }, 1500); // Deve corrispondere alla durata della transizione
    }

    // Aggiungi una classe per riconoscere lo sfondo attivo
    newBgDiv.classList.add("active-bg");
  }

  // Cambia immagine ogni 4 secondi
  setInterval(changeBackground, 5000);
});

// script.js
// Mostra il loader prima che la pagina inizi a ricaricarsi o cambi
let loaderTimeout;

// Funzione per mostrare il loader con un ritardo
function showLoaderWithDelay() {
  loaderTimeout = setTimeout(function () {
    document.getElementById("loader").style.display = "flex";
  }, 1000); // Ritardo di 1 secondo
}

// Funzione per nascondere il loader e cancellare il timeout
function hideLoader() {
  clearTimeout(loaderTimeout);
  document.getElementById("loader").style.display = "none";
}

// Mostra il loader con ritardo prima del caricamento della nuova pagina
window.addEventListener("beforeunload", showLoaderWithDelay);

// Nasconde il loader quando la pagina è completamente caricata
window.addEventListener("load", hideLoader);

// Funzione per l'animazione in uscita
function fadeOutEffect(callback) {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    callback();
  }, 500); // Tempo dell'animazione in uscita
}

// Funzione per l'animazione in entrata
function fadeInEffect() {
  // Rimuove la classe fade-out e aggiunge fade-in per mostrare il contenuto
  document.body.classList.add("fade-in");
}

// Gestisci il caricamento iniziale della pagina
window.addEventListener("load", () => {
  fadeInEffect(); // Applicare l'effetto di fade-in quando la pagina è pronta
});

// Aggiungi animazioni per i link che portano ad altre pagine
document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const url = this.href;

    fadeOutEffect(() => {
      window.location.href = url; // Carica la nuova pagina
    });
  });
});

const carousel = document.getElementById("carousel8");
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  carousel.classList.add("active");
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
  carousel.classList.remove("active");
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
  carousel.classList.remove("active");
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  carousel.scrollLeft = scrollLeft - walk;
});

const carouselItems = document.querySelectorAll(".carousel-item8 img");

// Disabilita il drag e la selezione delle immagini
carouselItems.forEach((img) => {
  img.addEventListener("dragstart", (e) => e.preventDefault());
  img.addEventListener("mousedown", (e) => e.preventDefault());
  img.addEventListener("touchstart", (e) => e.preventDefault());
});

const carousel8 = document.getElementById("carousel8");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const scrollAmount = 200; // Quantità di pixel da scorrere

leftArrow.addEventListener("click", () => {
  carousel.scrollBy({
    left: -scrollAmount,
    behavior: "smooth", // Scorrimento fluido
  });
});

rightArrow.addEventListener("click", () => {
  carousel.scrollBy({
    left: scrollAmount,
    behavior: "smooth", // Scorrimento fluido
  });
});

function clearForm() {
  // Resetta il modulo
  setTimeout(() => {
    document.getElementById("contact-form").reset();

  }, 1000);
}
