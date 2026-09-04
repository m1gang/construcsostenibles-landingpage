/** Interacciones globales de la página: cursor seguidor, barra de
 *  progreso y reveal on scroll. Antes: <script> inline en index.astro.
 */
// ---- Cursor seguidor (solo punteros) ----
const follower = document.getElementById("cursorFollower");
if (follower && window.matchMedia("(pointer: fine)").matches) {
  let mx = 0,
    my = 0,
    fx = 0,
    fy = 0;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  (function tick() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.transform = `translate(${fx - 16}px, ${fy - 16}px)`;
    requestAnimationFrame(tick);
  })();
  document.body.classList.add("has-cursor");
}

// ---- Barra de progreso ----
const fill = document.getElementById("progressFill");
if (fill) {
  const update = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? window.scrollY / h : 0;
    fill.style.transform = `scaleX(${pct})`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

// ---- Reveal on scroll ----
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll("section, .stamp, .step, .plate")
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
