import type { ImageMetadata } from "astro";
import fotoPlanos from "../assets/services/planos.png";
import fotoDeclaratoria from "../assets/services/declaratoria.png";
import fotoInspeccion from "../assets/services/inspeccion.png";
import fotoSuelos from "../assets/services/suelos.png";
import fotoDomotica from "../assets/services/domotica.png";
import fotoPozo from "../assets/services/pozo.png";
import fotoPloteo from "../assets/services/ploteo.png";

export interface ServicioDestacado {
  /** Código de lámina insignia (F-01…). */
  frame: string;
  title: string;
  badge: string;
  /** Texto persuasivo de la tarjeta. */
  text: string;
  /** Línea de expediente: qué incluye / quién firma. */
  meta: string;
  /** Mensaje prellenado para WhatsApp. */
  waText: string;
  /** Flyer del servicio, ligado a su ficha por definición. */
  foto: ImageMetadata;
  alt: string;
}

const WA_BASE = "https://wa.me/51929057970?text=";

export function waLinkFor(message: string): string {
  return `${WA_BASE}${encodeURIComponent(message)}`;
}

export const destacados: ServicioDestacado[] = [
  {
    frame: "F-01",
    title: "Diseño de Planos Sismorresistentes y Licencias",
    badge: "Cálculo en ETABS/SAFE + Renders 3D",
    text: "Diseño integral de arquitectura, estructuras y redes técnicas firmados por profesionales colegiados. Obtenemos tu Licencia Municipal de Edificación sin observaciones.",
    meta: "ARQ + EST + IE + IS · MEMORIA + FUE",
    foto: fotoPlanos,
    waText:
      "Hola Construcciones Sostenibles, quiero cotizar el Diseño de Planos Sismorresistentes y Licencia (FUE). ¿Me ayudan con precio y plazos?",
    alt: "Mesa de trabajo con planos estructurales, casco de ingeniero y expediente FUE aprobado",
  },
  {
    frame: "F-02",
    title: "Declaratoria de Fábrica e Independización (SUNARP)",
    badge: "Firmado por Verificador Común",
    text: "Formaliza el valor real de tu propiedad. Elaboramos el expediente registral, reglamento interno y subdivisión de lotes aprobados ante SUNARP.",
    meta: "EXP. REGISTRAL · REGLAMENTO INTERNO · SUBDIVISIÓN",
    foto: fotoDeclaratoria,
    waText:
      "Hola Construcciones Sostenibles, quiero cotizar la Declaratoria de Fábrica e Independización ante SUNARP. ¿Me ayudan con precio y plazos?",
    alt: "Expediente de independización y subdivisión con sello de validez ante SUNARP",
  },
  {
    frame: "F-03",
    title: "Certificación de Defensa Civil e Inspección ITSE",
    badge: "Aprobación Municipal Garantizada",
    text: "Evita clausuras y multas. Elaboramos tus planos de señalización, arquitectura, aforo, planes de contingencia y protocolos técnicos listos para tu inspección.",
    meta: "EVACUACIÓN + AFORO + CONTINGENCIA · NEGOCIOS Y ALMACENES",
    foto: fotoInspeccion,
    waText:
      "Hola Construcciones Sostenibles, quiero cotizar la Certificación de Defensa Civil e Inspección ITSE para mi local. ¿Me ayudan con precio y plazos?",
    alt: "Local comercial con señalización de evacuación, extintor y expediente ITSE",
  },
  {
    frame: "F-04",
    title: "Estudio de Suelos y Ensayos de Cimentación",
    badge: "Excavación Física de Calicatas",
    text: "Conoce la capacidad portante de tu terreno antes de construir. Realizamos la excavación física de calicatas e informes de laboratorio firmados por Ingeniero Civil.",
    meta: "CALICATAS + LABORATORIO · FIRMA CIP CIVIL",
    foto: fotoSuelos,
    waText:
      "Hola Construcciones Sostenibles, quiero cotizar el Estudio de Suelos con calicatas para mi terreno. ¿Me ayudan con precio y plazos?",
    alt: "Ingeniero en campo registrando muestras de una calicata abierta",
  },
  {
    frame: "F-05",
    title: "Sistemas Ecoeficientes con Energía Solar",
    badge: "Reducción de Consumo Eléctrico",
    text: "Integra paneles fotovoltaicos de 200W, bancos de baterías y sistemas de seguridad inteligente con alertas en tiempo real a tu celular.",
    meta: "FOTOVOLTAICO + DOMÓTICA + CÁMARAS IP",
    foto: fotoDomotica,
    waText:
      "Hola Construcciones Sostenibles, quiero cotizar el Sistema Ecoeficiente con paneles solares y domótica. ¿Me ayudan con precio y plazos?",
    alt: "Vivienda con paneles solares controlada desde una app de domótica en el celular",
  },
  {
    frame: "F-06",
    title: "Instalación y Medición de Pozo a Tierra",
    badge: "Incluye Materiales y Certificación",
    text: "Protege tus equipos eléctricos y cumple las normas del CNE. Realizamos la excavación, materiales de baja resistencia, conexión y protocolo de operatividad firmado.",
    meta: "A TODO COSTO · PROTOCOLO FIRMADO · CNE",
    foto: fotoPozo,
    waText:
      "Hola Construcciones Sostenibles, quiero cotizar la Instalación y Medición de Pozo a Tierra a todo costo. ¿Me ayudan con precio y plazos?",
    alt: "Caja de registro de pozo a tierra con varilla de cobre y telurómetro marcando 0.58 ohmios",
  },
  {
    frame: "F-07",
    title: "Ploteo, Copia y Escaneo de Planos A0–A3",
    badge: "Envíos a Todo Lima",
    text: "Impresión, copia y escaneo HD en formatos A3, A2, A1 y A0, por unidad o al por mayor. El soporte gráfico rápido que tu obra necesita, en tiempo récord.",
    meta: "A3 · A2 · A1 · A0 — POR MAYOR Y MENOR",
    foto: fotoPloteo,
    waText:
      "Hola Construcciones Sostenibles, quiero cotizar ploteo, copia y escaneo de planos A0–A3. ¿Me ayudan con precio y plazos?",
    alt: "Plotter imprimiendo un plano de cimentación a gran formato",
  },
];
