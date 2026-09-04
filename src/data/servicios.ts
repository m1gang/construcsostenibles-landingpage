export interface ServicioItem {
  code: string;
  name: string;
  desc: string;
}

export interface ServicioCategory {
  name: string;
  items: ServicioItem[];
}

export const categories: ServicioCategory[] = [
  {
    name: "Planos de obra",
    items: [
      { code: "A-01", name: "Planos sismorresistentes", desc: "Estructural, cimentacion, aligerado, calculo EETT SAFE/ETABS" },
      { code: "A-02", name: "Arquitectura y fachada", desc: "Plano de arquitectura, cortes, elevaciones, diseno 3D" },
      { code: "A-03", name: "Instalaciones electricas", desc: "Alumbrado, tomacorrientes, comunicacion, diagrama unifilar" },
      { code: "A-04", name: "Instalaciones sanitarias", desc: "Agua, desague, cisterna, tanque elevado, agua fria y caliente" },
      { code: "A-05", name: "Instalaciones de gas", desc: "Plano de gas certificado" },
      { code: "A-06", name: "Licencia de construccion", desc: "Todos los planos + memoria descriptiva + FUE + factibilidad" },
    ],
  },
  {
    name: "Gestiones tecnicas",
    items: [
      { code: "B-01", name: "Medidor de agua adicional", desc: "Planos sanitarios + memoria + firmado por ingeniero sanitario" },
      { code: "B-02", name: "Medidor de luz adicional", desc: "Planos electricos + cuadro de cargas + firmado por ingeniero" },
      { code: "B-03", name: "Prescripcion adquisitiva", desc: "Plano perimetrico UTM + memoria + firmado por ingeniero civil" },
      { code: "B-04", name: "ITSE / Defensa Civil", desc: "Evacuacion, senalizacion, calculo de aforo, detectores, alarma" },
      { code: "B-05", name: "Saneamiento legal", desc: "Declaratoria de fabrica, subdivision de lotes, SUNARP" },
      { code: "B-06", name: "Letreros luminosos", desc: "Plano electrico + estructural + arquitectonico + elevacion" },
    ],
  },
  {
    name: "Estudios y certificados",
    items: [
      { code: "C-01", name: "Estudio de suelo", desc: "Calicatas, analisis, informe tecnico firmado por ingeniero civil" },
      { code: "C-02", name: "Estructuras metalicas", desc: "Plano cobertura, columnas, memoria de calculo estructural" },
      { code: "C-03", name: "Tasaciones de inmuebles", desc: "Valorizacion por homologacion y depreciacion" },
      { code: "C-04", name: "Certificados profesionales", desc: "Luz de emergencia, pozo a tierra, detectores, rociadores" },
    ],
  },
  {
    name: "Servicios especiales",
    items: [
      { code: "D-01", name: "Obra domestica con paneles solares", desc: "Camaras, alarmas, alertas en tiempo real, energia limpia" },
      { code: "D-02", name: "Instalacion pozo a tierra", desc: "Materiales, excavacion, conexion, certificacion" },
      { code: "D-03", name: "Servicio de firmas", desc: "8 especialidades: civil, electrico, sanitario, arquitecto, mecanico" },
      { code: "D-04", name: "Ploteos A0-A3", desc: "Impresion, copia y escaneo con envio a provincia" },
    ],
  },
];
