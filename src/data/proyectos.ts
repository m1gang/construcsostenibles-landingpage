import type { ImageMetadata } from "astro";
import p1a from "../assets/proyectos/proyecto1a.png";
import p1b from "../assets/proyectos/proyecto1b.png";
import p1c from "../assets/proyectos/proyecto1c.png";
import p2a from "../assets/proyectos/proyecto2a.png";
import p3a from "../assets/proyectos/proyecto3a.png";
import p3b from "../assets/proyectos/proyecto3b.png";

export interface Project {
  id: string;
  title: string;
  type: string;
  /** Fotos optimizadas del proyecto. Vacío = lámina placeholder. */
  images: ImageMetadata[];
  /** Expediente PDF en /public/proyectos. Vacío = sin enlace. */
  pdf?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Edificio multifamiliar de 4 pisos + azotea",
    type: "Planos sismorresistentes + licencia",
    images: [p1a, p1b, p1c],
    pdf: "/proyectos/edificio-multifamiliar-4-pisos-azotea.pdf",
  },
  {
    id: "02",
    title: "Saneamiento legal e independización — SUNARP",
    type: "Declaratoria de fábrica",
    images: [p2a],
    pdf: "/proyectos/saneamiento-legal-independizacion-sunarp.pdf",
  },
  {
    id: "03",
    title: "Vivienda ecoeficiente con domótica y energía solar",
    type: "Domótica + paneles solares",
    images: [p3a, p3b],
    pdf: "/proyectos/vivienda-ecoeficiente-domotica-solar.pdf",
  },
];
