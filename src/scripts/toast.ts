/** Sistema de notificaciones toast nativo — estilo técnico.
 *  Antes: función inline en el <script> de Contacto.astro.
 *  El contenedor global #toastContainer vive en Layout.astro.
 */
export function showToast(
  title: string,
  message: string,
  type: "success" | "error" = "success",
): void {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const iconWrap = document.createElement("div");
  iconWrap.className = "toast-icon";
  iconWrap.innerHTML =
    type === "success"
      ? '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M17 5L7 15L3 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 5v5m0 5v.01M10 2a8 8 0 100 16 8 8 0 000-16z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  const msgWrap = document.createElement("div");
  msgWrap.className = "toast-message";
  const strong = document.createElement("strong");
  strong.textContent = title;
  msgWrap.appendChild(strong);
  msgWrap.appendChild(document.createTextNode(` ${message}`));

  toast.appendChild(iconWrap);
  toast.appendChild(msgWrap);

  container.appendChild(toast);

  // Animación de entrada
  requestAnimationFrame(() => {
    toast.classList.add("toast-visible");
  });

  // Auto eliminar después de 5 segundos
  setTimeout(() => {
    toast.classList.remove("toast-visible");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 5000);
}
