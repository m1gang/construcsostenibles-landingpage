import { showToast } from "./toast";

/** Envío del formulario vía AJAX a FormSubmit.co — con defensas anti-spam.
 *  Antes: <script> inline en Contacto.astro.
 */
const form = document.getElementById("contactForm") as HTMLFormElement | null;
const status = document.getElementById("formStatus");
const submitBtn = document.getElementById(
  "formSubmitBtn",
) as HTMLButtonElement | null;
const submitLabel = document.getElementById("formSubmitLabel");

// --- Config anti-abuso ---
const MIN_FILL_MS = 3000; // time-trap: un humano tarda >3s en llenar
const COOLDOWN_MS = 60_000; // 1 envío por minuto por navegador
const LS_LAST = "cs_last_submit";
const formLoadTime = Date.now();
let isSending = false;

// Email ofuscado (base64 por partes) para dificultar scraping simple.
// NOTA: en sitio estático el endpoint siempre será visible en red;
// la protección real total requeriría un proxy backend.
const EMAIL_B64 = "Y29uc3RydXZlbGkuc2FjQGdtYWlsLmNvbQ==";
function getEndpoint(): string {
  try {
    return `https://formsubmit.co/ajax/${atob(EMAIL_B64)}`;
  } catch {
    return "https://formsubmit.co/ajax/construveli.sac@gmail.com";
  }
}

function sanitize(value: string, max: number): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, "") // sin caracteres de control
    .replace(/<[^>]*>/g, "") // sin tags HTML
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

// Validador de teléfono Perú:
// - Celular: 9 dígitos que empiezan con 9 (929 057 970)
// - Fijo Lima: 01 + 7 dígitos ((01) 234 5678)
// - Fijo provincia: 0XX + 6 dígitos ((044) 123 456)
// - Prefijo país opcional: +51 / 51 / 0051, con espacios, guiones o puntos
function isTelefonoPEValido(value: string): boolean {
  const compact = value.replace(/[\s.\-()]/g, "");
  // Solo dígitos y un + inicial opcional
  if (!/^\+?\d+$/.test(compact)) return false;
  // 1. Celular: [+51|51|0051] + 9XXXXXXXX
  if (/^(?:\+51|51|0051)?9\d{8}$/.test(compact)) return true;
  // 2. Fijo con anexo: [+51|51|0051] + 0XX + 6-7 dígitos (01 Lima, 044 Arequipa, etc.)
  if (/^(?:\+51|51|0051)?0\d{8}$/.test(compact)) return true;
  // 3. Fijo Lima con +51 sin 0: +5112345678
  if (/^(?:\+51|51)1\d{7}$/.test(compact)) return true;
  // 4. Fijo corto sin anexo: 6-7 dígitos
  if (/^\d{6,7}$/.test(compact)) return true;
  return false;
}

function fail(msg: string, toastMsg: string): void {
  if (!status) return;
  status.textContent = msg;
  status.classList.add("error");
  showToast("No se pudo enviar", toastMsg, "error");
}

function setLoading(loading: boolean): void {
  isSending = loading;
  if (submitBtn) {
    submitBtn.disabled = loading;
    submitBtn.setAttribute("aria-disabled", String(loading));
    submitBtn.classList.toggle("is-loading", loading);
  }
  if (submitLabel) {
    submitLabel.textContent = loading ? "Enviando..." : "Enviar mensaje";
  }
}

// Éxito falso para bots: no revela que fueron detectados
function fakeSuccess(): void {
  if (!form || !status) return;
  status.classList.remove("error");
  status.textContent = "¡Enviado correctamente!";
  showToast(
    "¡Enviado correctamente!",
    "Nos pondremos en contacto pronto.",
    "success",
  );
  form.reset();
}

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!form || !status) return;
  if (isSending) return; // anti doble-click / Enter repetido

  const data = new FormData(form);
  const honey = String(data.get("_honey") ?? "");
  const nombre = sanitize(String(data.get("nombre") ?? ""), 80);
  const telefono = sanitize(String(data.get("telefono") ?? ""), 20);
  const servicio = sanitize(String(data.get("servicio") ?? ""), 80);
  const mensaje = sanitize(String(data.get("mensaje") ?? ""), 1000);

  // 1. Honeypot: si está lleno, es un bot -> éxito falso, sin fetch
  if (honey.trim() !== "") {
    fakeSuccess();
    return;
  }

  // 2. Time-trap: envío demasiado rápido = bot
  if (Date.now() - formLoadTime < MIN_FILL_MS) {
    fakeSuccess();
    return;
  }

  // 3. Rate-limit cliente: 1 envío por minuto
  try {
    const last = Number(localStorage.getItem(LS_LAST) ?? "0");
    if (last && Date.now() - last < COOLDOWN_MS) {
      const wait = Math.ceil((COOLDOWN_MS - (Date.now() - last)) / 1000);
      fail(
        `Espere ${wait}s antes de enviar otra solicitud.`,
        `Espere ${wait} segundos antes de reintentar.`,
      );
      return;
    }
  } catch {
    // localStorage no disponible (modo privado): continuar sin rate-limit
  }

  // 4. Validación estricta
  const nombreOk = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s.'-]{2,80}$/.test(nombre);
  const telefonoOk = isTelefonoPEValido(telefono);
  const servicioOk =
    servicio.length > 0 &&
    [...form.querySelectorAll("select[name='servicio'] option")].some(
      (o) => (o as HTMLOptionElement).value === servicio,
    );
  const links = (mensaje.match(/https?:\/\/|www\./gi) ?? []).length;
  const mensajeOk = mensaje.length >= 10 && mensaje.length <= 1000 && links <= 2;

  if (!nombreOk || !telefonoOk || !servicioOk || !mensajeOk) {
    if (!telefonoOk) {
      fail(
        "Teléfono inválido. Use celular 9XX XXX XXX o fijo con anexo (Ej.: 929 057 970).",
        "Teléfono peruano inválido",
      );
    } else {
      fail(
        "Revise nombre (solo letras) y detalle de 10–1000 caracteres.",
        "Por favor revise los campos resaltados",
      );
    }
    return;
  }

  status.classList.remove("error");
  status.textContent = "Enviando su solicitud...";
  setLoading(true);

  // Preparar datos para FormSubmit.co
  const formData = new FormData();
  formData.append("nombre", nombre);
  formData.append("telefono", telefono);
  formData.append("servicio", servicio);
  formData.append("mensaje", mensaje);
  formData.append(
    "_subject",
    "Nueva solicitud de planos - Construcciones Sostenibles",
  );
  formData.append("_captcha", "true"); // captcha de FormSubmit activado
  formData.append("_template", "table");
  formData.append("_honey", "");

  try {
    const response = await fetch(getEndpoint(), {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        try {
          localStorage.setItem(LS_LAST, String(Date.now()));
        } catch {
          // ignorar si no hay storage
        }
        showToast(
          "¡Enviado correctamente!",
          "Nos pondremos en contacto pronto.",
          "success",
        );
        status.textContent = "¡Enviado correctamente!";
        form.reset();
      } else {
        throw new Error("Error en el envío");
      }
    } else {
      throw new Error("Error de conexión");
    }
  } catch (error) {
    console.error("Error al enviar formulario:", error);
    fail(
      "Error al enviar. Por favor intente nuevamente.",
      "Por favor intente nuevamente.",
    );
  } finally {
    setLoading(false);
  }
});
