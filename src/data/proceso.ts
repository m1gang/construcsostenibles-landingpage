export interface ProcessStep {
  pct: string;
  label: string;
  desc: string;
}

export const steps: ProcessStep[] = [
  { pct: "30%", label: "Inicio de contrato", desc: "Arrancamos el proyecto con la firma del contrato y recopilación de información." },
  { pct: "20%", label: "Anteproyecto", desc: "Entrega de planos preliminares, memoria descriptiva y revisión con el cliente." },
  { pct: "50%", label: "Finalización del trabajo", desc: "Planos finales, firmados por el profesional correspondiente, listos para presentar." },
];
