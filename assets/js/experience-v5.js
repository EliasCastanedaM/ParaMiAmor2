/**
 * Para Ariana / Edición de autor V5
 * Mejoras progresivas: lector, scroll, galería y teclado.
 * El guion original permanece íntegro en original.js.
 */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;

  // Barra editorial de lectura: tenue, no interfiere con la experiencia.
  const progress = document.querySelector(".site-progress");
  if (progress) {
    let scheduled = false;
    const updateScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const value = Math.max(0, Math.min(1, window.scrollY / max));
      progress.style.transform = "scaleX(" + value.toFixed(4) + ")";
      scheduled = false;
    };
    window.addEventListener("scroll", () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(updateScroll);
    }, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });
    updateScroll();
  }

  // El número de la fotografía refleja el estado del carrusel original.
  const count = document.getElementById("photoCurrent");
  const photos = [...document.querySelectorAll(".slide")];
  const dots = [...document.querySelectorAll(".dots .dot")];
  if (count && photos.length) {
    const updateCounter = () => {
      const active = photos.findIndex((node) => node.classList.contains("active"));
      const index = Math.max(0, active);
      count.textContent = String(index + 1).padStart(2, "0");
      dots.forEach((dot, dotIndex) => {
        dot.setAttribute("aria-label", "Ver fotografía " + (dotIndex + 1) + " de " + photos.length);
        dot.setAttribute("aria-pressed", String(dotIndex === index));
      });
    };
    const observer = new MutationObserver(updateCounter);
    photos.forEach((slide) => observer.observe(slide, { attributes: true, attributeFilter: ["class"] }));
    updateCounter();
  }

  // Las galerías extensas no deben descargar todas las fotos simultáneamente.
  document.querySelectorAll("#photosGrid img, .anniversary-photo img").forEach((img) => {
    img.loading = "lazy";
    img.decoding = "async";
  });

  // Se puede cerrar una sorpresa o una carta con Escape, además del botón.
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const anniversary = document.getElementById("anniversaryOverlay");
    const photo = document.getElementById("photoModal");
    const letter = document.getElementById("letterModal");
    if (anniversary?.classList.contains("show") && typeof window.closeAnniversary === "function") {
      window.closeAnniversary();
      return;
    }
    if (photo?.classList.contains("show") && typeof window.closePhoto === "function") {
      window.closePhoto();
      return;
    }
    if (letter?.classList.contains("show") && typeof window.closeLetter === "function") {
      window.closeLetter();
    }
  });

  // Las entradas visuales son mínimas y respetan preferencias de accesibilidad.
  const targets = [...document.querySelectorAll(".scroll-reveal")];
  if (!reduceMotion && "IntersectionObserver" in window && targets.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px 35px 0px" });
    targets.forEach((item) => observer.observe(item));
    // Activar las animaciones solo después de instalar el observador.
    root.classList.add("has-motion");
  } else {
    targets.forEach((item) => item.classList.add("is-visible"));
  }

  // Si se vuelve a la página desde una galería, mantener la navegación utilizable.
  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.setAttribute("tabindex", "-1");
    });
  });
})();