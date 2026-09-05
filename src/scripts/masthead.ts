/** Menú móvil del masthead. Antes: <script> inline en Masthead.astro. */
const toggle = document.getElementById("navToggle");
const panel = document.getElementById("mobileNav");
const closeBtn = document.getElementById("navClose");
const header = document.querySelector(".masthead");

/** Header compacto al hacer scroll: encoge logo, nav y botón de WhatsApp. */
const SCROLL_THRESHOLD = 40;
let ticking = false;
function updateScrolled() {
  ticking = false;
  const scrolled = window.scrollY > SCROLL_THRESHOLD;
  header?.classList.toggle("scrolled", scrolled);
  document.documentElement.classList.toggle("scrolled", scrolled);
}
function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(updateScrolled);
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
updateScrolled();

function setMenu(open: boolean) {
  if (!toggle || !panel) return;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  panel.classList.toggle("open", open);
  panel.setAttribute("aria-hidden", String(!open));
  document.body.style.overflow = open ? "hidden" : "";
}

toggle?.addEventListener("click", () =>
  setMenu(toggle.getAttribute("aria-expanded") !== "true"),
);
closeBtn?.addEventListener("click", () => setMenu(false));
panel
  ?.querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => setMenu(false)));
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});
