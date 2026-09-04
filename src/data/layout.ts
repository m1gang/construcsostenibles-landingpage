import { siteContact, siteMeta } from "./site";

export interface LayoutSeo {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

/** Defaults SEO; canonical/og se resuelven en Layout.astro con Astro.site/Astro.url */
export const layoutDefaults = {
  title: siteMeta.title,
  description: siteMeta.description,
};

/** JSON-LD de negocio/servicios. Lee teléfono y email de site.ts (fuente única). */
export function buildOrganizationJsonLd(args: {
  siteHref?: string;
  ogImage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": (args.siteHref ?? "") + "#organization",
    name: siteMeta.siteName,
    description:
      "Planos de obra firmados y aprobados, cálculos estructurales, licencias de construcción y gestión integral por equipo colegiado completo. Servicio a nivel nacional en Perú.",
    url: args.siteHref,
    image: args.ogImage,
    telephone: siteContact.phoneIntl,
    email: siteContact.email,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Perú",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Gerardo Unger Nº 277 – 1º Piso",
      addressLocality: "San Martín de Porres",
      addressRegion: "Lima",
      postalCode: "15101",
      addressCountry: "PE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -11.9933,
      longitude: -77.066,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Moisés Sumari Jara",
        jobTitle: "Arquitecto",
        description: "Arquitecto colegiado CAP Nº 20636",
      },
      {
        "@type": "Person",
        name: "Rubén Melo Laguna",
        jobTitle: "Ingeniero Civil",
        description: "Ingeniero civil colegiado CIP Nº 114010",
      },
      {
        "@type": "Person",
        name: "Nerbaldo Nery Araujo Huamán",
        jobTitle: "Ingeniero Electricista",
        description: "Ingeniero electricista colegiado CIP Nº 356625",
      },
      {
        "@type": "Person",
        name: "Wilmer Armando Pérez Flores",
        jobTitle: "Ingeniero Sanitario",
        description: "Ingeniero sanitario colegiado CIP Nº 102980",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Planos de obra sismorresistentes",
          description:
            "Planos estructurales, cimentación, aligerado y cálculo estructural con EETT SAFE/ETABS.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Licencia de construcción",
          description:
            "Planos completos, memoria descriptiva, FUE y factibilidad para licencia de construcción en Lima.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Declaratoria de fábrica y saneamiento legal",
          description:
            "Declaratoria de fábrica, subdivisión de lotes e inscripción SUNARP.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ITSE y Defensa Civil",
          description:
            "Planos de evacuación, señalización, cálculo de aforo e inspección técnica de seguridad.",
        },
      },
    ],
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Av.+Gerardo+Unger+277+San+Mart%C3%ADn+de+Porres+Lima",
  };
}
