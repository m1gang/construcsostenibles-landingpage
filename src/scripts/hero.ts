/** Carrusel del hero: imagen + texto rotan sincronizados cada 6 s.
 *  Solo se interactúa con los dots. Pausa con hover/foco u
 *  pestaña oculta; sin auto-rotación con prefers-reduced-motion
 *  (los dots manuales siguen activos).
 */
import { heroSlides, heroRotateMs } from "../data/hero";

const carousel = document.getElementById("heroCarousel");
const slides = [...(carousel?.querySelectorAll<HTMLElement>("[data-slide]") ?? [])];
const dots = [...(carousel?.querySelectorAll<HTMLButtonElement>("[data-dot]") ?? [])];
const frame = document.querySelector("[data-hero-frame]");
const title = document.querySelector("[data-hero-title]");
const accent = document.querySelector("[data-hero-accent]");
const sub = document.querySelector("[data-hero-sub]");
const tag = document.querySelector("[data-hero-tag]");
const caption = document.querySelector("[data-hero-caption]");
const current = document.querySelector("[data-hero-current]");
const cta = document.querySelector("[data-hero-cta]");
const fades = [...document.querySelectorAll<HTMLElement>("[data-hero-text],[data-hero-sub]")];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FADE_MS = reduceMotion ? 0 : 320;
let index = 0;
let timer: number | null = null;

function paint(i: number) {
  const s = heroSlides[i];
  slides.forEach((el, k) => {
    el.classList.toggle("is-active", k === i);
    el.setAttribute("aria-hidden", String(k !== i));
  });
  dots.forEach((d, k) => d.setAttribute("aria-selected", String(k === i)));
  if (frame) frame.textContent = s.frame;
  if (title) title.textContent = s.title;
  if (accent) accent.textContent = s.accent;
  if (sub) sub.textContent = s.sub;
  if (tag) tag.textContent = s.tag;
  if (caption) caption.textContent = `${s.frame} · ${s.tag}`;
  if (current) current.textContent = String(i + 1).padStart(2, "0");
  if (cta) cta.textContent = s.cta;
}

function goTo(i: number) {
  index = (i + heroSlides.length) % heroSlides.length;
  if (FADE_MS === 0) {
    paint(index);
    return;
  }
  fades.forEach((el) => el.classList.add("is-out"));
  window.setTimeout(() => {
    paint(index);
    fades.forEach((el) => el.classList.remove("is-out"));
  }, FADE_MS);
}

function play() {
  if (reduceMotion || timer !== null || document.hidden) return;
  timer = window.setInterval(() => goTo(index + 1), heroRotateMs);
}

function stop() {
  if (timer !== null) {
    window.clearInterval(timer);
    timer = null;
  }
}

dots.forEach((d, k) => d.addEventListener("click", () => { stop(); goTo(k); play(); }));

carousel?.addEventListener("mouseenter", stop);
carousel?.addEventListener("mouseleave", play);
carousel?.addEventListener("focusin", stop);
carousel?.addEventListener("focusout", play);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stop();
  else play();
});

paint(0);
play();
