export interface Project {
  id: string;
  title: string;
  type: string;
}

export const projects: Project[] = [
  { id: "01", title: "Obra residencial multifamiliar", type: "Planos sismorresistentes + licencia" },
  { id: "02", title: "Local comercial – Saneamiento legal", type: "Declaratoria de fabrica SUNARP" },
  { id: "03", title: "Vivienda unifamiliar sostenible", type: "Domotica + paneles solares" },
  { id: "04", title: "Oficina corporativa", type: "ITSE + Defensa Civil" },
];
