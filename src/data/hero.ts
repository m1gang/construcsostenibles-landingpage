export interface HeroMetric {
  tag: string;
  value: string;
}

export const heroMetrics: HeroMetric[] = [
  { tag: "Equipo", value: "4 profesionales" },
  { tag: "Firmas", value: "CAP + CIP" },
  { tag: "Sede", value: "Lima, Perú" },
];

export const heroCopy = {
  placaLeft: "PLANO",
  placaRight: "Nº CS-01",
  titleLines: ["Planos de obra,", "firmados y", "aprobados."] as const,
  sub: "Del cálculo estructural a la licencia de construcción. Equipo colegiado completo, gestión integral y energía sostenible para tu proyecto.",
  primaryCta: "Cotizar por WhatsApp",
  secondaryCta: "Ver servicios",
  secondaryHref: "#servicios",
};
