import poulpe from "@/assets/species/poulpe.jpg";
import calamar from "@/assets/species/calamar.jpg";
import seiche from "@/assets/species/seiche.jpg";
import crevettes from "@/assets/species/crevettes.jpg";
import langouste from "@/assets/species/langouste.jpg";
import merou from "@/assets/species/merou.jpg";
import courbine from "@/assets/species/courbine.jpg";
import dorade from "@/assets/species/dorade.jpg";
import sole from "@/assets/species/sole.jpg";
import saintpierre from "@/assets/species/saintpierre.jpg";
import pelagique from "@/assets/species/pelagique.jpg";
import rouget from "@/assets/species/rouget.jpg";
import divers from "@/assets/species/divers.jpg";

export type SpeciesCategory = {
  slug: string;
  name: string;
  latin?: string;
  image: string;
  tagline: string;
  variants: string[];
};

export const speciesCategories: SpeciesCategory[] = [
  {
    slug: "poulpe",
    name: "Poulpe",
    latin: "Octopus vulgaris",
    image: poulpe,
    tagline: "Poulpe atlantique, calibré et battu à la main.",
    variants: [
      "PATA 1",
      "PATA 2",
      "PATA 3 & 4",
      "POULPE BATTU G",
      "POULPE BATTU P",
      "PR1",
      "PR2",
      "PR3",
      "PR",
    ],
  },
  {
    slug: "calamar",
    name: "Calamar",
    latin: "Loligo vulgaris",
    image: calamar,
    tagline: "Calamar entier trié par calibre, chair ferme et translucide.",
    variants: [
      "CALAMAR GG",
      "CALAMAR G",
      "CALAMAR M",
      "CALAMAR P",
      "CALAMAR 2P",
      "CALAMAR 3P",
      "CALAMAR 4P",
      "CALAMAR MIX",
    ],
  },
  {
    slug: "seiche",
    name: "Seiche / Choco",
    latin: "Sepia officinalis",
    image: seiche,
    tagline: "Seiche entière fraîche ou congelée, calibres exportation.",
    variants: [
      "CHOCO G",
      "CHOCO M",
      "CHOCO P",
      "CHOCO 2P",
      "CHOCO 3P",
      "CHOCO 4P",
      "CHOCO MIX",
      "SEPIOLA",
    ],
  },
  {
    slug: "tako",
    name: "Tako",
    latin: "Octopus – marché japonais",
    image: poulpe,
    tagline: "Poulpe préparé selon les standards asiatiques.",
    variants: [
      "TAKO 1",
      "TAKO 2",
      "TAKO 3",
      "TAKO 4",
      "TAKO 5",
      "TAKO 6",
      "TAKO 7",
      "TAKO 8",
    ],
  },
  {
    slug: "crevettes",
    name: "Crevettes & Gambas",
    latin: "Penaeus spp.",
    image: crevettes,
    tagline: "Langostinos et gambas d'Afrique de l'Ouest, tous calibres.",
    variants: [
      "LANGOSTINO 1 → 7",
      "LANGOSTINO 3X",
      "LANGOSTINO 4X",
      "LANGOSTINO 6X",
      "LANGOSTINO MIX",
      "LANGOSTINO S/C",
      "L3 · L4 · L5 · L6",
      "GAMBA 3",
      "GAMBA 3X",
      "GAMBA 3XX",
      "GAMBA 3E",
      "GAMBA 4",
      "GAMBA A",
    ],
  },
  {
    slug: "langouste-crabe",
    name: "Langouste & Crabe",
    image: langouste,
    tagline: "Crustacés nobles pêchés au large de Nouadhibou.",
    variants: ["LANGOSTA", "CRABE"],
  },
  {
    slug: "merou",
    name: "Mérou / Cherne",
    latin: "Epinephelus spp.",
    image: merou,
    tagline: "Mérou de fond, chair blanche recherchée sur les marchés premium.",
    variants: [
      "CHERNE F",
      "CHERNE G",
      "CHERNE M",
      "CHERNE P",
      "CHERNE S/C",
    ],
  },
  {
    slug: "courbine",
    name: "Courbine / Corvina",
    latin: "Argyrosomus regius",
    image: courbine,
    tagline: "Courbine royale de l'Atlantique mauritanien.",
    variants: [
      "COURBINE (Argyrosomus regius)",
      "CORVINA F · G · M · P · S/C",
      "CORVINATE F · G · M · P · S/C",
    ],
  },
  {
    slug: "dorade",
    name: "Dorade · Denton · Pargo",
    latin: "Sparidae",
    image: dorade,
    tagline: "Famille des sparidés, poissons nobles pour la haute gastronomie.",
    variants: [
      "DORADA",
      "DENTEX",
      "DENTON G · M · P · 2P · 3P · 4P · MIX",
      "PARGO G",
      "SARGO G · M · P",
      "RENKODAI G · MIX",
    ],
  },
  {
    slug: "sole",
    name: "Sole / Lenguado",
    latin: "Solea spp.",
    image: sole,
    tagline: "Poissons plats sélectionnés, calibres export.",
    variants: [
      "LENGUADO M · P · 2P · 3P · 4P · MIX",
      "LENGUA G · M · P · 2P",
      "PELUDA G · M · P",
      "PLATIJA",
      "SOLLA",
      "HERRERA",
    ],
  },
  {
    slug: "saint-pierre",
    name: "Saint-Pierre",
    latin: "Zeus faber",
    image: saintpierre,
    tagline: "Saint-Pierre entier, chair délicate et raffinée.",
    variants: [
      "ST PIETRO C/C",
      "ST PIETRO S/C G",
      "ST PIETRO S/C M",
      "ST PIETRO S/C P",
    ],
  },
  {
    slug: "pelagiques",
    name: "Pélagiques",
    image: pelagique,
    tagline: "Maquereau, sardine, sardinelle et chinchard fraîchement débarqués.",
    variants: [
      "MACKEREL G · M · P",
      "SARDINE PILCHARDUS",
      "SARDINELLE",
      "JUREL G · M · P",
      "LIST",
      "GARFISH",
      "MULET UMA",
    ],
  },
  {
    slug: "rouget",
    name: "Rouget · Rascasse",
    image: rouget,
    tagline: "Poissons de roche à la robe éclatante.",
    variants: [
      "SALMONETE G",
      "SALMONETTE M",
      "SALMONETTE P",
      "RUBIO",
      "RASCASIO",
      "PERRO S/C",
    ],
  },
  {
    slug: "divers-nobles",
    name: "Divers nobles",
    image: divers,
    tagline: "Espèces variées, calibres et conditionnements sur demande.",
    variants: [
      "SABLE",
      "RAYA",
      "RAPE S/C",
      "RATA S/C",
      "CONGRIO",
      "MAKO S/C",
      "CAZON S/C",
      "CANE S/C",
      "TIGRE G · M · P",
      "MONGO · MONGO MIX",
      "CYMBUIM",
      "POTA",
      "POTARGUE",
      "POTARGUE 2° CHOIX",
      "BOCA 1 · 2 · 3 & 4",
      "BROTOLLA C/C · S/C",
      "PLAT PLAT PESCADIA",
      "ABAE",
      "ACEDIA",
      "AF MIX",
      "AMADAI",
      "BAILA",
      "EU MIX",
    ],
  },
];
