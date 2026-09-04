export interface SiteContact {
  /** "+51 929 057 970" — display con código país */
  phoneDisplay: string;
  /** "929 057 970" — display corto nacional */
  phoneShort: string;
  /** "tel:+51929057970" — href tel: */
  tel: string;
  /** "+51929057970" — formato internacional */
  phoneIntl: string;
  /** "51929057970" — número wa.me sin + */
  waNumber: string;
  /** Mensaje predefinido de cotización */
  waMessage: string;
  /** Link wa.me completo con ?text= */
  waLink: string;
  email: string;
  address: string;
}

export interface NavLink {
  href: string;
  label: string;
}

const WA_MESSAGE =
  "Hola Construcciones Sostenibles, necesito cotizar planos firmados para mi proyecto. ¿Me pueden ayudar?";

export const siteContact: SiteContact = {
  phoneDisplay: "+51 929 057 970",
  phoneShort: "929 057 970",
  tel: "tel:+51929057970",
  phoneIntl: "+51929057970",
  waNumber: "51929057970",
  waMessage: WA_MESSAGE,
  waLink:
    "https://wa.me/51929057970?text=Hola%20Construcciones%20Sostenibles%2C%20necesito%20cotizar%20planos%20firmados%20para%20mi%20proyecto.%20%C2%BFMe%20pueden%20ayudar%3F",
  email: "construveli.sac@gmail.com",
  address: "Av. Gerardo Unger Nº 277, 1er piso – SMP, Lima",
};

export const navLinks: NavLink[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#equipo", label: "Equipo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export const siteMeta = {
  title: "Planos de obra firmados en Perú | Construcciones Sostenibles",
  description:
    "Planos de obra firmados por ingenieros colegiados: licencia de construcción, planos sismorresistentes, ITSE y saneamiento legal. Servicio a nivel nacional.",
  siteName: "Construcciones Sostenibles",
  locale: "es_PE" as const,
  region: "PE-LMA",
  placename: "San Martín de Porres, Lima",
  themeColor: "#1e8a4c",
};
