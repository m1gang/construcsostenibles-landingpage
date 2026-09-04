/** Interactividad de la placa topográfica del hero.
 *  Antes: <script> inline en Hero.astro.
 */
const plate = document.querySelector(".plate-frame") as HTMLElement | null;
const needle = document.querySelector("#northNeedle") as SVGGElement | null;

// Norte que apunta al cursor
plate?.addEventListener("mousemove", (e) => {
  if (!needle || !plate) return;
  const rect = plate.getBoundingClientRect();
  const mx = (e.clientX - rect.left - rect.width / 2) / rect.width;
  const my = (e.clientY - rect.top - rect.height / 2) / rect.height;
  const angle = Math.atan2(mx, -my) * (180 / Math.PI);
  needle.setAttribute("transform", `translate(458,355) rotate(${angle})`);
});

// Coordenadas en chip
const measureE = document.getElementById("measureE");
const measureN = document.getElementById("measureN");
const base = { e: 277165, n: 8676432 };

plate?.addEventListener("mousemove", (e) => {
  if (!measureE || !measureN || !plate) return;
  const rect = plate.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  const eVal = Math.round(base.e + x * 110);
  const nVal = Math.round(base.n - y * 82);
  measureE.textContent = `E ${eVal.toLocaleString("es-PE")}`;
  measureN.textContent = `N ${nVal.toLocaleString("es-PE")}`;
});

// Parallax sutil en la placa
plate?.addEventListener("mousemove", (e) => {
  if (!plate) return;
  const rect = plate.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
  plate.style.transform = `translateY(-4px) translate(${x}px, ${y}px)`;
});

plate?.addEventListener("mouseleave", () => {
  if (plate) plate.style.transform = "";
});
