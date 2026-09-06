/** Tilt 3D en tarjetas de proyectos. Antes: <script> inline en Proyectos.astro. */
document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/** Mini-carrusel por lámina: los dots cambian la foto activa y
 *  además rota solo cada 3 s (pausa con hover/foco). */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((root) => {
  const slides = [...root.querySelectorAll<HTMLElement>("[data-slide]")];
  const dots = [...root.querySelectorAll<HTMLButtonElement>("[data-dot]")];
  let index = 0;
  let timer: number | null = null;

  function paint(i: number) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, j) => s.classList.toggle("is-active", j === index));
    dots.forEach((d, j) => d.setAttribute("aria-selected", String(j === index)));
  }

  function play() {
    if (reduceMotion || timer !== null) return;
    timer = window.setInterval(() => paint(index + 1), 3000);
  }

  function stop() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  dots.forEach((dot, k) => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      stop();
      paint(k);
      play();
    });
  });

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", play);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", play);
  play();
});
