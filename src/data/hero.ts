export interface HeroMetric {
  tag: string;
  value: string;
}

export const heroMetrics: HeroMetric[] = [
  { tag: "Equipo", value: "6 profesionales" },
  { tag: "Firmas", value: "CAP + CIP" },
  { tag: "Sede", value: "Lima, Perú" },
];

export interface HeroSlide {
  id: string;
  /** Código de lámina (ej. "F-01"). */
  frame: string;
  /** Rótulo del servicio (ej. "Servicio de firmas"). */
  tag: string;
  /** Título principal del slide. */
  title: string;
  /** Remate del título en verde. */
  accent: string;
  /** Subtítulo descriptivo. */
  sub: string;
  /** Texto del botón verde en este slide (mismo enlace WhatsApp). */
  cta: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "intro",
    frame: "I-00",
    tag: "Estudio de arquitectura e ingeniería",
    title: "Construcciones Sostenibles",
    accent: "Soluciones Seguras y Accesibles",
    sub: "Diseño arquitectónico, cálculos estructurales y formalización de propiedades en Lima, Perú. Tu proyecto desde los planos hasta la habilitación, con la seguridad técnica que mereces.",
    cta: "Conoce Nuestros Servicios",
  },
  {
    id: "construccion",
    frame: "V-01",
    tag: "Viviendas y proyectos",
    title: "Planos Sismorresistentes con Ingeniería de Vanguardia",
    accent: "para tu Próximo Hogar",
    sub: "Diseño arquitectónico en 3D, cálculos estructurales computarizados en ETABS y SAFE e instalaciones firmadas por especialistas colegiados y habilitados al día. Construye con la seguridad técnica que tu familia merece.",
    cta: "Cotizar Diseño de Planos",
  },
  {
    id: "formalizacion",
    frame: "S-02",
    tag: "Formalización · SUNARP",
    title: "Independiza y Declara tu Fábrica",
    accent: "ante SUNARP Sin Observaciones",
    sub: "Elaboramos expedientes técnicos completos de declaratoria de fábrica, reglamentos internos y subdivisión de lotes firmados por Verificador Común. Formaliza el valor real de tu propiedad de manera rápida y segura.",
    cta: "Iniciar Trámite de SUNARP",
  },
  {
    id: "negocios",
    frame: "I-03",
    tag: "Negocios · ITSE",
    title: "Supera tu Inspección de Defensa Civil (ITSE)",
    accent: "y Evita Clausuras",
    sub: "Diseño de planos de evacuación, cálculo de aforo, planes de contingencia y protocolos oficiales firmados para pozos a tierra, alarmas y luces de emergencia. Todo listo para asegurar tu licencia municipal.",
    cta: "Asesoría en Defensa Civil",
  },
  {
    id: "ploteo",
    frame: "P-04",
    tag: "Ploteo profesional",
    title: "Ploteo, Copia y Escaneo de Planos a Gran Escala",
    accent: "con Envíos a todo Lima",
    sub: "Impresión de planos de alta precisión en todos los formatos (A3, A2, A1 y A0) por unidad o al por mayor. El soporte gráfico rápido que tu proyecto de ingeniería y arquitectura necesita.",
    cta: "Enviar Planos a Plotear",
  },
];

export const heroRotateMs = 6000;

export const heroCopy = {
  primaryCta: "Conoce Nuestros Servicios",
  secondaryCta: "Ver servicios",
  secondaryHref: "#servicios",
};
