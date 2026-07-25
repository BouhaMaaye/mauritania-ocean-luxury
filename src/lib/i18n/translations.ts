export type RichPart = { text: string; bold?: boolean; italic?: boolean };

type StatItem = { k: string; v: string; italic?: boolean };
type NumberedItem = { n: string; t: string; d: string };
type TitledItem = { t: string; d: string };

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    species: string;
    quality: string;
    contact: string;
    brandName: string;
    brandTag: string;
  };
  footer: {
    description: string;
    contactTitle: string;
    phoneFaxLabel: string;
    mobileLabel: string;
    nifLabel: string;
    addressTitle: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    rights: string;
    tagline: string;
  };
  notFound: { title: string; subtitle: string; text: string; cta: string };
  errorPage: { title: string; text: string; retry: string; home: string };
  hero: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaCatalog: string;
    ctaContact: string;
    loadingLabel: string;
  };
  home: {
    stats: StatItem[];
    presentation: {
      kicker: string;
      headingLine1: string;
      headingLine2Pre: string;
      headingLine2Italic: string;
      headingLine2Post: string;
      paragraph1: RichPart[];
      paragraph2: string;
      paragraph3: string;
      ctaHistory: string;
      videoCaption: string;
    };
    quality: {
      kicker: string;
      headingPre: string;
      headingItalic: string;
      headingPost: string;
      intro: string;
      items: NumberedItem[];
      cta: string;
    };
    quote: { pre: string; gold: string; brand: string };
    speciesSection: { heading: string; intro: string; cta: string };
    logistics: {
      kicker: string;
      headingLine1: string;
      headingLine2: string;
      items: NumberedItem[];
      cta: string;
      routeCaption: string;
    };
  };
  about: {
    hero: { kicker: string; titleLine1: string; titleGold: string; subtitle: string };
    story: { kicker: string; heading: string; p1: string; p2: string };
    values: {
      kicker: string;
      headingPre: string;
      headingGold: string;
      items: NumberedItem[];
    };
    mission: { kicker: string; quotePre: string; quoteGold: string; quotePost: string };
  };
  contact: {
    hero: { kicker: string; titleLine1: string; titleGold: string; subtitle: string };
    infoLabels: {
      phone: string;
      mobile: string;
      email: string;
      address: string;
      nif: string;
    };
    addressValue: string;
    form: {
      heading: string;
      subtitle: string;
      nameLabel: string;
      emailLabel: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      submit: string;
    };
    mail: { nameField: string; emailField: string; defaultSubject: string };
  };
  especes: {
    header: {
      kicker: string;
      titlePre: string;
      titleGold: string;
      subtitle: string;
      searchPlaceholder: string;
    };
    empty: string;
    badgeExport: string;
    categoryLabel: string;
    variantsTitle: string;
    referenceSingular: string;
    referencePlural: string;
    ctaQuote: string;
  };
  qualite: {
    hero: { kicker: string; titlePre: string; titleGold: string; titlePost: string; subtitle: string };
    intro: { kicker: string; p1: RichPart[]; p2: RichPart[] };
    mauritania: { heading: string; intro: string; items: TitledItem[] };
    eu: { kicker: string; heading: string; intro: string; items: NumberedItem[] };
    international: { heading: string; intro: string; items: TitledItem[] };
    process: { kicker: string; heading: string; items: NumberedItem[] };
    cta: { heading: string; subtitle: string; button: string };
  };
  species: Record<
    string,
    { name: string; tagline: string }
  >;
};

export const translations: Record<"fr" | "en" | "es", Dictionary> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      species: "Espèces",
      quality: "Qualité",
      contact: "Contact",
      brandName: "Nationale Peche",
      brandTag: "SARL · Mauritanie",
    },
    footer: {
      description:
        "Depuis la côte mauritanienne, nous sélectionnons, conditionnons et exportons les meilleurs produits de la mer vers les marchés européens, asiatiques et africains.",
      contactTitle: "Contact",
      phoneFaxLabel: "Tél / Fax",
      mobileLabel: "Mobile",
      nifLabel: "NIF",
      addressTitle: "Adresse",
      addressLine1: "Avda. Los Consignatarios",
      addressLine2: "Edificio Canpesca",
      addressLine3: "Explanada Pantalán de Fransary",
      addressLine4: "35008",
      rights: "Tous droits réservés.",
      tagline: "Mauritania · Atlantic Ocean",
    },
    notFound: {
      title: "404",
      subtitle: "Page introuvable",
      text: "Cette page n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil",
    },
    errorPage: {
      title: "Une erreur est survenue",
      text: "Merci de réessayer ou de revenir plus tard.",
      retry: "Réessayer",
      home: "Accueil",
    },
    hero: {
      kicker: "Excellence halieutique",
      titleLine1: "Nationale Pêche",
      titleLine2: "SARL",
      subtitle:
        "Nous portons les richesses de l'Atlantique mauritanien vers les tables les plus prestigieuses du monde.",
      ctaCatalog: "Catalogue des espèces",
      ctaContact: "Nous contacter",
      loadingLabel: "Chargement de l'expérience",
    },
    home: {
      stats: [
        { k: "100%", v: "Traçabilité garantie" },
        { k: "80+", v: "Espèces traitées" },
        { k: "15", v: "Pays d'export" },
        { k: "24/7", v: "Chaîne du froid", italic: true },
      ],
      presentation: {
        kicker: "Notre maison",
        headingLine1: "Une entreprise mauritanienne",
        headingLine2Pre: "au service des ",
        headingLine2Italic: "grandes tables",
        headingLine2Post: ".",
        paragraph1: [
          { text: "Basée à Nouadhibou, " },
          { text: "Nationale Pêche SARL", bold: true },
          {
            text: " conjugue savoir-faire artisanal et exigence industrielle pour offrir le meilleur de l'Atlantique mauritanien.",
          },
        ],
        paragraph2:
          "Nos équipes accompagnent chaque produit — du bateau au conteneur — selon un cahier des charges strict : sélection à la criée, traitement en chambre froide sous quelques heures, congélation IQF et traçabilité complète.",
        paragraph3:
          "Grossistes, mareyeurs, importateurs et enseignes de la restauration trouvent chez nous un partenaire fiable, une qualité constante et une capacité d'export vers l'Europe, l'Asie et l'Afrique.",
        ctaHistory: "Découvrir notre histoire",
        videoCaption: "Du quai à l'atelier",
      },
      quality: {
        kicker: "Notre exigence",
        headingPre: "La qualité, ",
        headingItalic: "notre signature",
        headingPost: ".",
        intro:
          "Chaque produit qui quitte nos ateliers reflète un engagement sans compromis : fraîcheur préservée, procédés certifiés et contrôle rigoureux à chaque étape, du débarquement jusqu'au conteneur d'export.",
        items: [
          {
            n: "01",
            t: "Sélection à la criée",
            d: "Nos acheteurs choisissent chaque lot au débarquement selon des critères stricts de fraîcheur et de calibre.",
          },
          {
            n: "02",
            t: "Traitement HACCP",
            d: "Ateliers agréés export, procédures HACCP et traçabilité complète sur l'ensemble de la chaîne.",
          },
          {
            n: "03",
            t: "Congélation IQF",
            d: "Surgélation individuelle immédiate pour préserver texture, goût et qualités nutritionnelles.",
          },
          {
            n: "04",
            t: "Contrôle continu",
            d: "Audits internes, laboratoires partenaires et suivi documentaire pour chaque expédition.",
          },
        ],
        cta: "Normes & certifications",
      },
      quote: {
        pre: "De l'Atlantique mauritanien aux plus grandes tables du monde, chaque produit porte notre nom",
        gold: " — et notre exigence.",
        brand: "Nationale Pêche SARL",
      },
      speciesSection: {
        heading: "Nos espèces signatures",
        intro:
          "Une sélection rigoureuse de produits sauvages, pêchés durablement dans les eaux pures de Mauritanie.",
        cta: "Voir tout le catalogue",
      },
      logistics: {
        kicker: "Maîtrise logistique",
        headingLine1: "Une logistique sans faille",
        headingLine2: "vers 15 pays.",
        items: [
          {
            n: "01.",
            t: "Certification & traçabilité",
            d: "Nos installations répondent aux normes sanitaires internationales les plus strictes pour garantir la sécurité et la fraîcheur de chaque lot.",
          },
          {
            n: "02.",
            t: "Exportation mondiale",
            d: "Des solutions d'expédition par air et par mer, assurant une livraison optimale sur les marchés européens, asiatiques et africains.",
          },
          {
            n: "03.",
            t: "Chaîne du froid maîtrisée",
            d: "Congélation IQF immédiate, entreposage et transport réfrigéré jusqu'au port de destination.",
          },
        ],
        cta: "Demander une cotation",
        routeCaption: "Nouadhibou → Europe → Asie → Afrique",
      },
    },
    about: {
      hero: {
        kicker: "À propos",
        titleLine1: "L'océan comme",
        titleGold: "héritage.",
        subtitle:
          "Née sur la façade atlantique de la Mauritanie, Nationale Peche SARL cultive un lien intime avec la mer et ses ressources.",
      },
      story: {
        kicker: "Notre histoire",
        heading: "Une maison, une côte.",
        p1: "Fondée à Nouadhibou, Nationale Peche SARL s'inscrit dans la grande tradition des maisons de négoce mauritaniennes. Notre métier : rassembler les meilleures pêches débarquées le long du littoral et les préparer pour les marchés les plus exigeants.",
        p2: "De la sélection au quai jusqu'à l'expédition en conteneur réfrigéré, chaque produit qui porte notre nom est le fruit d'un contrôle minutieux et d'un savoir-faire transmis.",
      },
      values: {
        kicker: "Nos engagements",
        headingPre: "Quatre principes, ",
        headingGold: "une exigence.",
        items: [
          { n: "01", t: "Fraîcheur", d: "Tri au débarquement, mise sous glace immédiate, congélation rapide IQF." },
          { n: "02", t: "Traçabilité", d: "Chaque lot est identifié, documenté et suivi jusqu'à la livraison." },
          { n: "03", t: "Calibrage", d: "Un tri manuel rigoureux garantit une régularité irréprochable." },
          { n: "04", t: "Export", d: "Documentation, conditionnement et logistique adaptés à chaque marché." },
        ],
      },
      mission: {
        kicker: "Notre mission",
        quotePre: "« Faire rayonner la richesse de l'Atlantique mauritanien sur ",
        quoteGold: "les meilleures tables du monde",
        quotePost: ", avec l'exigence d'une maison qui connaît sa mer. »",
      },
    },
    contact: {
      hero: {
        kicker: "Contact",
        titleLine1: "Parlons de votre",
        titleGold: "prochain envoi.",
        subtitle:
          "Notre équipe répond à toutes vos demandes de devis, de calibres spécifiques ou de conditionnement sur mesure.",
      },
      infoLabels: {
        phone: "Téléphone / Fax",
        mobile: "Mobile",
        email: "Email",
        address: "Adresse",
        nif: "NIF",
      },
      addressValue: "Avda. Los Consignatarios - Edificio Canpesca, Explanada Pantalán de Fransary, 35008",
      form: {
        heading: "Envoyer une demande",
        subtitle: "Votre message ouvrira votre application mail par défaut.",
        nameLabel: "Nom complet",
        emailLabel: "Email",
        subjectLabel: "Sujet",
        subjectPlaceholder: "Demande de cotation, espèce recherchée…",
        messageLabel: "Message",
        submit: "Envoyer le message",
      },
      mail: { nameField: "Nom", emailField: "Email", defaultSubject: "Demande de devis" },
    },
    especes: {
      header: {
        kicker: "Catalogue",
        titlePre: "Nos ",
        titleGold: "espèces",
        subtitle:
          "Céphalopodes, crustacés, poissons nobles et pélagiques — découvrez nos catégories une par une, avec leurs calibres et conditionnements disponibles à l'export.",
        searchPlaceholder: "Rechercher une espèce, un calibre…",
      },
      empty: "Aucune espèce ne correspond à votre recherche.",
      badgeExport: "Export",
      categoryLabel: "Catégorie",
      variantsTitle: "Calibres & conditionnements",
      referenceSingular: "référence",
      referencePlural: "références",
      ctaQuote: "Demander une cotation",
    },
    qualite: {
      hero: {
        kicker: "Normes & Certifications",
        titlePre: "La qualité, ",
        titleGold: "une obligation",
        titlePost: ".",
        subtitle:
          "Exporter des produits de la mer depuis la Mauritanie vers l'Europe, l'Asie ou l'Amérique impose un cadre réglementaire strict. Nous en avons fait le socle de notre travail.",
      },
      intro: {
        kicker: "Notre engagement",
        p1: [
          { text: "Depuis Nouadhibou, " },
          { text: "Nationale Pêche SARL", bold: true },
          { text: " opère sous la supervision permanente de l'" },
          { text: "ONISPA", bold: true },
          {
            text: " (Office National d'Inspection Sanitaire des Produits de la Pêche et de l'Aquaculture), autorité mauritanienne compétente reconnue par l'Union européenne.",
          },
        ],
        p2: [
          { text: "Cet agrément est la condition " },
          { text: "sine qua non", italic: true },
          {
            text: " pour exporter des produits de la pêche vers l'UE : sans numéro d'agrément ONISPA, aucun conteneur ne franchit un poste d'inspection frontalier européen.",
          },
        ],
      },
      mauritania: {
        heading: "Cadre réglementaire mauritanien",
        intro:
          "L'exportation de produits halieutiques depuis la Mauritanie est encadrée par un ensemble de textes nationaux et internationaux que nous appliquons quotidiennement.",
        items: [
          {
            t: "Agrément ONISPA",
            d: "Chaque établissement de traitement (usine, entrepôt frigorifique, navire congélateur) reçoit un numéro d'agrément sanitaire unique attribué et audité par l'ONISPA. Ce numéro figure sur chaque emballage et chaque certificat sanitaire d'exportation.",
          },
          {
            t: "Code des pêches mauritanien",
            d: "Loi n° 017-2015 portant Code des pêches : encadre les licences, les quotas, les zones et les périodes de pêche, la déclaration des captures et la lutte contre la pêche INN (illicite, non déclarée, non réglementée).",
          },
          {
            t: "Certificat sanitaire d'exportation",
            d: "Émis lot par lot par l'ONISPA après inspection : identification du produit, origine, agrément de l'établissement, conditions de transport et de température, conformité aux exigences du pays destinataire.",
          },
          {
            t: "Certificat de capture (règlement INN)",
            d: "Obligatoire pour toute expédition vers l'UE (Règlement CE 1005/2008). Il atteste que le poisson a été capturé légalement, par un navire autorisé, dans une zone et pour une espèce déclarées.",
          },
        ],
      },
      eu: {
        kicker: "Union européenne",
        heading: "Exporter vers l'Europe",
        intro:
          "La Mauritanie figure sur la liste des pays tiers autorisés à exporter des produits de la pêche vers l'UE. Cette autorisation impose l'application intégrale du « paquet hygiène » européen.",
        items: [
          {
            n: "01.",
            t: "Règlement (CE) n° 852/2004 — Hygiène des denrées",
            d: "Principes généraux d'hygiène applicables à toutes les entreprises alimentaires : conception des locaux, formation du personnel, plans de nettoyage, gestion des déchets.",
          },
          {
            n: "02.",
            t: "Règlement (CE) n° 853/2004 — Règles spécifiques produits d'origine animale",
            d: "Exigences propres aux produits de la pêche : température à cœur ≤ −18 °C pour les surgelés, ≤ 2 °C sous glace pour les frais, marquage sanitaire, chaîne du froid ininterrompue.",
          },
          {
            n: "03.",
            t: "Règlement (CE) n° 178/2002 — Traçabilité",
            d: "Chaque lot doit pouvoir être remonté du client final jusqu'au navire de capture, avec conservation des enregistrements pendant plusieurs années.",
          },
          {
            n: "04.",
            t: "HACCP obligatoire",
            d: "Analyse des dangers, identification des points critiques (réception, congélation, conditionnement), surveillance documentée et actions correctives immédiates.",
          },
          {
            n: "05.",
            t: "Plans de contrôle contaminants",
            d: "Recherches périodiques : métaux lourds (mercure, cadmium, plomb), histamine, ABVT, Listeria, Salmonelles, E. coli. Résultats archivés et communiqués aux autorités sur demande.",
          },
          {
            n: "06.",
            t: "Étiquetage Règlement (UE) n° 1379/2013",
            d: "Nom commercial et scientifique de l'espèce, méthode de production (pêche/aquaculture), zone FAO de capture, engin utilisé, date de congélation, coordonnées de l'exportateur.",
          },
        ],
      },
      international: {
        heading: "Exportation internationale",
        intro:
          "Au-delà de l'Union européenne, chaque marché possède ses propres exigences sanitaires que nous respectons scrupuleusement.",
        items: [
          {
            t: "États-Unis",
            d: "Conformité FDA — Seafood HACCP (21 CFR 123), enregistrement Bioterrorism Act, Prior Notice avant chaque expédition.",
          },
          {
            t: "Asie & Moyen-Orient",
            d: "Certifications sanitaires bilatérales (Chine, Japon, Corée), certificats Halal pour les marchés musulmans (Émirats, Arabie saoudite, Malaisie).",
          },
          {
            t: "Afrique",
            d: "Conformité aux normes des unions douanières régionales (CEDEAO, UEMOA), certificats vétérinaires et sanitaires spécifiques à chaque pays.",
          },
        ],
      },
      process: {
        kicker: "Notre système qualité",
        heading: "Du bateau au conteneur",
        items: [
          { n: "01", t: "Réception", d: "Contrôle organoleptique, mesure de température, vérification du certificat de capture et du navire d'origine." },
          { n: "02", t: "Traitement", d: "Éviscération, calibrage, lavage en eau réfrigérée. Ateliers agréés, personnel formé, procédures HACCP écrites." },
          { n: "03", t: "Congélation", d: "IQF ou congélation en plaques à −40 °C, atteinte du cœur à −18 °C, stockage en chambre froide surveillée en continu." },
          { n: "04", t: "Expédition", d: "Empotage en conteneur reefer scellé, enregistreurs de température, dossier documentaire complet remis au transitaire." },
        ],
      },
      cta: {
        heading: "Besoin d'un dossier documentaire complet ?",
        subtitle:
          "Nous transmettons sur demande nos agréments, certificats sanitaires types et fiches techniques par espèce.",
        button: "Nous contacter",
      },
    },
    species: {
      poulpe: { name: "Poulpe", tagline: "Poulpe atlantique, calibré et battu à la main." },
      calamar: { name: "Calamar", tagline: "Calamar entier trié par calibre, chair ferme et translucide." },
      seiche: { name: "Seiche / Choco", tagline: "Seiche entière fraîche ou congelée, calibres exportation." },
      tako: { name: "Tako", tagline: "Poulpe préparé selon les standards asiatiques." },
      crevettes: { name: "Crevettes & Gambas", tagline: "Langostinos et gambas d'Afrique de l'Ouest, tous calibres." },
      "langouste-crabe": { name: "Langouste & Crabe", tagline: "Crustacés nobles pêchés au large de Nouadhibou." },
      merou: { name: "Mérou / Cherne", tagline: "Mérou de fond, chair blanche recherchée sur les marchés premium." },
      courbine: { name: "Courbine / Corvina", tagline: "Courbine royale de l'Atlantique mauritanien." },
      dorade: { name: "Dorade · Denton · Pargo", tagline: "Famille des sparidés, poissons nobles pour la haute gastronomie." },
      sole: { name: "Sole / Lenguado", tagline: "Poissons plats sélectionnés, calibres export." },
      "saint-pierre": { name: "Saint-Pierre", tagline: "Saint-Pierre entier, chair délicate et raffinée." },
      pelagiques: { name: "Pélagiques", tagline: "Maquereau, sardine, sardinelle et chinchard fraîchement débarqués." },
      rouget: { name: "Rouget · Rascasse", tagline: "Poissons de roche à la robe éclatante." },
      "divers-nobles": { name: "Divers nobles", tagline: "Espèces variées, calibres et conditionnements sur demande." },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      species: "Species",
      quality: "Quality",
      contact: "Contact",
      brandName: "Nationale Peche",
      brandTag: "SARL · Mauritania",
    },
    footer: {
      description:
        "From the Mauritanian coast, we select, prepare and export the finest seafood to markets across Europe, Asia and Africa.",
      contactTitle: "Contact",
      phoneFaxLabel: "Phone / Fax",
      mobileLabel: "Mobile",
      nifLabel: "Tax ID",
      addressTitle: "Address",
      addressLine1: "Avda. Los Consignatarios",
      addressLine2: "Edificio Canpesca",
      addressLine3: "Explanada Pantalán de Fransary",
      addressLine4: "35008",
      rights: "All rights reserved.",
      tagline: "Mauritania · Atlantic Ocean",
    },
    notFound: {
      title: "404",
      subtitle: "Page not found",
      text: "This page doesn't exist or has been moved.",
      cta: "Back to home",
    },
    errorPage: {
      title: "Something went wrong",
      text: "Please try again or come back later.",
      retry: "Retry",
      home: "Home",
    },
    hero: {
      kicker: "Fishing excellence",
      titleLine1: "Nationale Pêche",
      titleLine2: "SARL",
      subtitle:
        "We bring the riches of the Mauritanian Atlantic to the world's most prestigious tables.",
      ctaCatalog: "Species catalogue",
      ctaContact: "Contact us",
      loadingLabel: "Loading experience",
    },
    home: {
      stats: [
        { k: "100%", v: "Guaranteed traceability" },
        { k: "80+", v: "Species processed" },
        { k: "15", v: "Export countries" },
        { k: "24/7", v: "Cold chain", italic: true },
      ],
      presentation: {
        kicker: "Our house",
        headingLine1: "A Mauritanian company",
        headingLine2Pre: "serving the ",
        headingLine2Italic: "finest tables",
        headingLine2Post: ".",
        paragraph1: [
          { text: "Based in Nouadhibou, " },
          { text: "Nationale Pêche SARL", bold: true },
          {
            text: " combines artisanal know-how with industrial rigor to deliver the best of the Mauritanian Atlantic.",
          },
        ],
        paragraph2:
          "Our teams accompany every product — from boat to container — under a strict set of standards: selection at the dock, cold-room processing within hours, IQF freezing and full traceability.",
        paragraph3:
          "Wholesalers, fish merchants, importers and restaurant chains find in us a reliable partner, consistent quality and export capacity to Europe, Asia and Africa.",
        ctaHistory: "Discover our story",
        videoCaption: "From the dock to the workshop",
      },
      quality: {
        kicker: "Our standards",
        headingPre: "Quality, ",
        headingItalic: "our signature",
        headingPost: ".",
        intro:
          "Every product that leaves our facilities reflects an uncompromising commitment: preserved freshness, certified processes and rigorous control at every stage, from landing to export container.",
        items: [
          {
            n: "01",
            t: "Selection at the dock",
            d: "Our buyers choose every lot at landing according to strict freshness and sizing criteria.",
          },
          {
            n: "02",
            t: "HACCP processing",
            d: "Export-approved facilities, HACCP procedures and full traceability across the entire chain.",
          },
          {
            n: "03",
            t: "IQF freezing",
            d: "Immediate individual quick-freezing to preserve texture, flavour and nutritional quality.",
          },
          {
            n: "04",
            t: "Continuous control",
            d: "Internal audits, partner laboratories and documented monitoring for every shipment.",
          },
        ],
        cta: "Standards & certifications",
      },
      quote: {
        pre: "From the Mauritanian Atlantic to the world's finest tables, every product carries our name",
        gold: " — and our standards.",
        brand: "Nationale Pêche SARL",
      },
      speciesSection: {
        heading: "Our signature species",
        intro:
          "A rigorous selection of wild products, sustainably fished in Mauritania's pristine waters.",
        cta: "View the full catalogue",
      },
      logistics: {
        kicker: "Logistics expertise",
        headingLine1: "Flawless logistics",
        headingLine2: "to 15 countries.",
        items: [
          {
            n: "01.",
            t: "Certification & traceability",
            d: "Our facilities meet the strictest international health standards to guarantee the safety and freshness of every lot.",
          },
          {
            n: "02.",
            t: "Worldwide export",
            d: "Air and sea freight solutions ensuring optimal delivery to European, Asian and African markets.",
          },
          {
            n: "03.",
            t: "Controlled cold chain",
            d: "Immediate IQF freezing, storage and refrigerated transport all the way to the port of destination.",
          },
        ],
        cta: "Request a quote",
        routeCaption: "Nouadhibou → Europe → Asia → Africa",
      },
    },
    about: {
      hero: {
        kicker: "About us",
        titleLine1: "The ocean as",
        titleGold: "heritage.",
        subtitle:
          "Born on Mauritania's Atlantic coast, Nationale Peche SARL cultivates an intimate bond with the sea and its resources.",
      },
      story: {
        kicker: "Our story",
        heading: "One house, one coastline.",
        p1: "Founded in Nouadhibou, Nationale Peche SARL carries on the great tradition of Mauritanian trading houses. Our craft: gathering the finest catches landed along the coast and preparing them for the most demanding markets.",
        p2: "From dockside selection to shipment in refrigerated containers, every product bearing our name is the result of meticulous control and know-how passed down through generations.",
      },
      values: {
        kicker: "Our commitments",
        headingPre: "Four principles, ",
        headingGold: "one standard.",
        items: [
          { n: "01", t: "Freshness", d: "Sorting at landing, immediate icing, rapid IQF freezing." },
          { n: "02", t: "Traceability", d: "Every lot is identified, documented and tracked through to delivery." },
          { n: "03", t: "Sizing", d: "Rigorous manual sorting guarantees flawless consistency." },
          { n: "04", t: "Export", d: "Documentation, packaging and logistics tailored to every market." },
        ],
      },
      mission: {
        kicker: "Our mission",
        quotePre: "\"Bringing the richness of the Mauritanian Atlantic to ",
        quoteGold: "the world's finest tables",
        quotePost: ", with the rigor of a house that knows its sea.\"",
      },
    },
    contact: {
      hero: {
        kicker: "Contact",
        titleLine1: "Let's talk about your",
        titleGold: "next shipment.",
        subtitle:
          "Our team is ready to answer all your requests for quotes, specific sizes or custom packaging.",
      },
      infoLabels: {
        phone: "Phone / Fax",
        mobile: "Mobile",
        email: "Email",
        address: "Address",
        nif: "Tax ID",
      },
      addressValue: "Avda. Los Consignatarios - Edificio Canpesca, Explanada Pantalán de Fransary, 35008",
      form: {
        heading: "Send a request",
        subtitle: "Your message will open your default mail application.",
        nameLabel: "Full name",
        emailLabel: "Email",
        subjectLabel: "Subject",
        subjectPlaceholder: "Quote request, species of interest…",
        messageLabel: "Message",
        submit: "Send message",
      },
      mail: { nameField: "Name", emailField: "Email", defaultSubject: "Quote request" },
    },
    especes: {
      header: {
        kicker: "Catalogue",
        titlePre: "Our ",
        titleGold: "species",
        subtitle:
          "Cephalopods, crustaceans, premium fish and pelagics — explore our categories one by one, with the sizes and packaging available for export.",
        searchPlaceholder: "Search a species, a size…",
      },
      empty: "No species match your search.",
      badgeExport: "Export",
      categoryLabel: "Category",
      variantsTitle: "Sizes & packaging",
      referenceSingular: "reference",
      referencePlural: "references",
      ctaQuote: "Request a quote",
    },
    qualite: {
      hero: {
        kicker: "Standards & Certifications",
        titlePre: "Quality, ",
        titleGold: "a requirement",
        titlePost: ".",
        subtitle:
          "Exporting seafood from Mauritania to Europe, Asia or America demands a strict regulatory framework. We have made it the foundation of our work.",
      },
      intro: {
        kicker: "Our commitment",
        p1: [
          { text: "From Nouadhibou, " },
          { text: "Nationale Pêche SARL", bold: true },
          { text: " operates under the permanent supervision of " },
          { text: "ONISPA", bold: true },
          {
            text: " (National Office for Sanitary Inspection of Fishery and Aquaculture Products), the competent Mauritanian authority recognised by the European Union.",
          },
        ],
        p2: [
          { text: "This approval is the " },
          { text: "sine qua non", italic: true },
          {
            text: " condition for exporting fishery products to the EU: without an ONISPA approval number, no container clears a European border inspection post.",
          },
        ],
      },
      mauritania: {
        heading: "Mauritanian regulatory framework",
        intro:
          "The export of fishery products from Mauritania is governed by a set of national and international regulations that we apply every day.",
        items: [
          {
            t: "ONISPA approval",
            d: "Each processing establishment (factory, cold store, freezer vessel) receives a unique sanitary approval number issued and audited by ONISPA. This number appears on every package and every export health certificate.",
          },
          {
            t: "Mauritanian Fisheries Code",
            d: "Law No. 017-2015 on the Fisheries Code: governs licences, quotas, zones and fishing seasons, catch declarations and the fight against IUU fishing (illegal, unreported, unregulated).",
          },
          {
            t: "Export health certificate",
            d: "Issued lot by lot by ONISPA after inspection: product identification, origin, establishment approval, transport and temperature conditions, compliance with the destination country's requirements.",
          },
          {
            t: "Catch certificate (IUU regulation)",
            d: "Mandatory for any shipment to the EU (EC Regulation 1005/2008). It certifies that the fish was caught legally, by an authorised vessel, in a declared zone and for a declared species.",
          },
        ],
      },
      eu: {
        kicker: "European Union",
        heading: "Exporting to Europe",
        intro:
          "Mauritania is listed among the third countries authorised to export fishery products to the EU. This authorisation requires full application of the European \"hygiene package\".",
        items: [
          {
            n: "01.",
            t: "Regulation (EC) No 852/2004 — Food hygiene",
            d: "General hygiene principles applicable to all food businesses: facility design, staff training, cleaning plans, waste management.",
          },
          {
            n: "02.",
            t: "Regulation (EC) No 853/2004 — Specific rules for animal products",
            d: "Requirements specific to fishery products: core temperature ≤ −18 °C for frozen products, ≤ 2 °C on ice for fresh products, health marking, unbroken cold chain.",
          },
          {
            n: "03.",
            t: "Regulation (EC) No 178/2002 — Traceability",
            d: "Every lot must be traceable from the end customer back to the catching vessel, with records kept for several years.",
          },
          {
            n: "04.",
            t: "Mandatory HACCP",
            d: "Hazard analysis, identification of critical control points (receiving, freezing, packaging), documented monitoring and immediate corrective actions.",
          },
          {
            n: "05.",
            t: "Contaminant control plans",
            d: "Periodic testing: heavy metals (mercury, cadmium, lead), histamine, TVB-N, Listeria, Salmonella, E. coli. Results archived and provided to authorities on request.",
          },
          {
            n: "06.",
            t: "Labelling — Regulation (EU) No 1379/2013",
            d: "Commercial and scientific species name, production method (wild-caught/aquaculture), FAO catch area, gear used, freezing date, exporter's contact details.",
          },
        ],
      },
      international: {
        heading: "International exports",
        intro:
          "Beyond the European Union, every market has its own sanitary requirements, which we scrupulously observe.",
        items: [
          {
            t: "United States",
            d: "FDA compliance — Seafood HACCP (21 CFR 123), Bioterrorism Act registration, Prior Notice before every shipment.",
          },
          {
            t: "Asia & Middle East",
            d: "Bilateral sanitary certifications (China, Japan, Korea), Halal certificates for Muslim markets (UAE, Saudi Arabia, Malaysia).",
          },
          {
            t: "Africa",
            d: "Compliance with regional customs union standards (ECOWAS, UEMOA), veterinary and sanitary certificates specific to each country.",
          },
        ],
      },
      process: {
        kicker: "Our quality system",
        heading: "From boat to container",
        items: [
          { n: "01", t: "Receiving", d: "Organoleptic inspection, temperature measurement, verification of catch certificate and vessel of origin." },
          { n: "02", t: "Processing", d: "Gutting, sizing, washing in chilled water. Approved facilities, trained staff, written HACCP procedures." },
          { n: "03", t: "Freezing", d: "IQF or plate freezing at −40 °C, core temperature reaching −18 °C, storage in continuously monitored cold rooms." },
          { n: "04", t: "Shipping", d: "Loading into a sealed reefer container, temperature loggers, complete documentation handed to the freight forwarder." },
        ],
      },
      cta: {
        heading: "Need a complete documentation package?",
        subtitle:
          "We provide our approvals, standard health certificates and technical data sheets by species on request.",
        button: "Contact us",
      },
    },
    species: {
      poulpe: { name: "Octopus", tagline: "Atlantic octopus, sized and hand-tenderised." },
      calamar: { name: "Squid", tagline: "Whole squid sorted by size, firm and translucent flesh." },
      seiche: { name: "Cuttlefish / Choco", tagline: "Whole cuttlefish, fresh or frozen, export sizing." },
      tako: { name: "Tako", tagline: "Octopus prepared to Asian market standards." },
      crevettes: { name: "Shrimp & Prawns", tagline: "West African langostinos and prawns, all sizes." },
      "langouste-crabe": { name: "Lobster & Crab", tagline: "Premium crustaceans fished off Nouadhibou." },
      merou: { name: "Grouper", tagline: "Deep-water grouper, white flesh sought after in premium markets." },
      courbine: { name: "Meagre / Corvina", tagline: "Royal meagre from the Mauritanian Atlantic." },
      dorade: { name: "Sea Bream · Dentex · Pargo", tagline: "Sparidae family, premium fish for fine dining." },
      sole: { name: "Sole", tagline: "Selected flatfish, export sizing." },
      "saint-pierre": { name: "John Dory", tagline: "Whole John Dory, delicate and refined flesh." },
      pelagiques: { name: "Pelagics", tagline: "Mackerel, sardine, sardinella and horse mackerel, freshly landed." },
      rouget: { name: "Red Mullet · Scorpionfish", tagline: "Rockfish with a striking colour." },
      "divers-nobles": { name: "Other premium species", tagline: "Assorted species, sizes and packaging on request." },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      species: "Especies",
      quality: "Calidad",
      contact: "Contacto",
      brandName: "Nationale Peche",
      brandTag: "SARL · Mauritania",
    },
    footer: {
      description:
        "Desde la costa mauritana, seleccionamos, preparamos y exportamos los mejores productos del mar hacia los mercados europeos, asiáticos y africanos.",
      contactTitle: "Contacto",
      phoneFaxLabel: "Tel / Fax",
      mobileLabel: "Móvil",
      nifLabel: "NIF",
      addressTitle: "Dirección",
      addressLine1: "Avda. Los Consignatarios",
      addressLine2: "Edificio Canpesca",
      addressLine3: "Explanada Pantalán de Fransary",
      addressLine4: "35008",
      rights: "Todos los derechos reservados.",
      tagline: "Mauritania · Atlantic Ocean",
    },
    notFound: {
      title: "404",
      subtitle: "Página no encontrada",
      text: "Esta página no existe o ha sido movida.",
      cta: "Volver al inicio",
    },
    errorPage: {
      title: "Se ha producido un error",
      text: "Por favor, inténtalo de nuevo o vuelve más tarde.",
      retry: "Reintentar",
      home: "Inicio",
    },
    hero: {
      kicker: "Excelencia pesquera",
      titleLine1: "Nationale Pêche",
      titleLine2: "SARL",
      subtitle:
        "Llevamos las riquezas del Atlántico mauritano a las mesas más prestigiosas del mundo.",
      ctaCatalog: "Catálogo de especies",
      ctaContact: "Contáctenos",
      loadingLabel: "Cargando la experiencia",
    },
    home: {
      stats: [
        { k: "100%", v: "Trazabilidad garantizada" },
        { k: "80+", v: "Especies procesadas" },
        { k: "15", v: "Países de exportación" },
        { k: "24/7", v: "Cadena de frío", italic: true },
      ],
      presentation: {
        kicker: "Nuestra casa",
        headingLine1: "Una empresa mauritana",
        headingLine2Pre: "al servicio de las ",
        headingLine2Italic: "grandes mesas",
        headingLine2Post: ".",
        paragraph1: [
          { text: "Con sede en Nouadhibou, " },
          { text: "Nationale Pêche SARL", bold: true },
          {
            text: " combina el saber hacer artesanal con la exigencia industrial para ofrecer lo mejor del Atlántico mauritano.",
          },
        ],
        paragraph2:
          "Nuestros equipos acompañan cada producto — del barco al contenedor — según un pliego de condiciones estricto: selección en lonja, tratamiento en cámara fría en pocas horas, congelación IQF y trazabilidad completa.",
        paragraph3:
          "Mayoristas, distribuidores, importadores y cadenas de restauración encuentran en nosotros un socio fiable, una calidad constante y una capacidad de exportación hacia Europa, Asia y África.",
        ctaHistory: "Descubrir nuestra historia",
        videoCaption: "Del muelle al taller",
      },
      quality: {
        kicker: "Nuestra exigencia",
        headingPre: "La calidad, ",
        headingItalic: "nuestra firma",
        headingPost: ".",
        intro:
          "Cada producto que sale de nuestros talleres refleja un compromiso sin concesiones: frescura preservada, procesos certificados y un control riguroso en cada etapa, desde el desembarque hasta el contenedor de exportación.",
        items: [
          {
            n: "01",
            t: "Selección en lonja",
            d: "Nuestros compradores eligen cada lote en el desembarque según criterios estrictos de frescura y calibre.",
          },
          {
            n: "02",
            t: "Procesado HACCP",
            d: "Talleres autorizados para exportación, procedimientos HACCP y trazabilidad completa en toda la cadena.",
          },
          {
            n: "03",
            t: "Congelación IQF",
            d: "Ultracongelación individual inmediata para preservar la textura, el sabor y las cualidades nutricionales.",
          },
          {
            n: "04",
            t: "Control continuo",
            d: "Auditorías internas, laboratorios asociados y seguimiento documental de cada expedición.",
          },
        ],
        cta: "Normas y certificaciones",
      },
      quote: {
        pre: "Del Atlántico mauritano a las mesas más exigentes del mundo, cada producto lleva nuestro nombre",
        gold: " — y nuestra exigencia.",
        brand: "Nationale Pêche SARL",
      },
      speciesSection: {
        heading: "Nuestras especies insignia",
        intro:
          "Una selección rigurosa de productos salvajes, pescados de forma sostenible en las aguas puras de Mauritania.",
        cta: "Ver todo el catálogo",
      },
      logistics: {
        kicker: "Dominio logístico",
        headingLine1: "Una logística sin fisuras",
        headingLine2: "hacia 15 países.",
        items: [
          {
            n: "01.",
            t: "Certificación y trazabilidad",
            d: "Nuestras instalaciones cumplen las normas sanitarias internacionales más estrictas para garantizar la seguridad y frescura de cada lote.",
          },
          {
            n: "02.",
            t: "Exportación mundial",
            d: "Soluciones de envío aéreo y marítimo que garantizan una entrega óptima en los mercados europeos, asiáticos y africanos.",
          },
          {
            n: "03.",
            t: "Cadena de frío controlada",
            d: "Congelación IQF inmediata, almacenamiento y transporte refrigerado hasta el puerto de destino.",
          },
        ],
        cta: "Solicitar una cotización",
        routeCaption: "Nouadhibou → Europa → Asia → África",
      },
    },
    about: {
      hero: {
        kicker: "Nosotros",
        titleLine1: "El océano como",
        titleGold: "herencia.",
        subtitle:
          "Nacida en la fachada atlántica de Mauritania, Nationale Peche SARL cultiva un vínculo íntimo con el mar y sus recursos.",
      },
      story: {
        kicker: "Nuestra historia",
        heading: "Una casa, una costa.",
        p1: "Fundada en Nouadhibou, Nationale Peche SARL se inscribe en la gran tradición de las casas comerciales mauritanas. Nuestro oficio: reunir las mejores capturas desembarcadas a lo largo del litoral y prepararlas para los mercados más exigentes.",
        p2: "Desde la selección en el muelle hasta el envío en contenedor refrigerado, cada producto que lleva nuestro nombre es fruto de un control minucioso y de un saber hacer transmitido.",
      },
      values: {
        kicker: "Nuestros compromisos",
        headingPre: "Cuatro principios, ",
        headingGold: "una exigencia.",
        items: [
          { n: "01", t: "Frescura", d: "Selección en el desembarque, enhielado inmediato, congelación rápida IQF." },
          { n: "02", t: "Trazabilidad", d: "Cada lote está identificado, documentado y controlado hasta la entrega." },
          { n: "03", t: "Calibrado", d: "Una selección manual rigurosa garantiza una regularidad impecable." },
          { n: "04", t: "Exportación", d: "Documentación, envasado y logística adaptados a cada mercado." },
        ],
      },
      mission: {
        kicker: "Nuestra misión",
        quotePre: "«Dar a conocer la riqueza del Atlántico mauritano en ",
        quoteGold: "las mejores mesas del mundo",
        quotePost: ", con la exigencia de una casa que conoce su mar.»",
      },
    },
    contact: {
      hero: {
        kicker: "Contacto",
        titleLine1: "Hablemos de su",
        titleGold: "próximo envío.",
        subtitle:
          "Nuestro equipo responde a todas sus solicitudes de cotización, calibres específicos o envasado a medida.",
      },
      infoLabels: {
        phone: "Teléfono / Fax",
        mobile: "Móvil",
        email: "Correo electrónico",
        address: "Dirección",
        nif: "NIF",
      },
      addressValue: "Avda. Los Consignatarios - Edificio Canpesca, Explanada Pantalán de Fransary, 35008",
      form: {
        heading: "Enviar una solicitud",
        subtitle: "Su mensaje abrirá su aplicación de correo predeterminada.",
        nameLabel: "Nombre completo",
        emailLabel: "Correo electrónico",
        subjectLabel: "Asunto",
        subjectPlaceholder: "Solicitud de cotización, especie buscada…",
        messageLabel: "Mensaje",
        submit: "Enviar mensaje",
      },
      mail: { nameField: "Nombre", emailField: "Correo electrónico", defaultSubject: "Solicitud de cotización" },
    },
    especes: {
      header: {
        kicker: "Catálogo",
        titlePre: "Nuestras ",
        titleGold: "especies",
        subtitle:
          "Cefalópodos, crustáceos, pescados nobles y pelágicos — descubra nuestras categorías una a una, con sus calibres y envasados disponibles para exportación.",
        searchPlaceholder: "Buscar una especie, un calibre…",
      },
      empty: "Ninguna especie coincide con su búsqueda.",
      badgeExport: "Exportación",
      categoryLabel: "Categoría",
      variantsTitle: "Calibres y envasados",
      referenceSingular: "referencia",
      referencePlural: "referencias",
      ctaQuote: "Solicitar una cotización",
    },
    qualite: {
      hero: {
        kicker: "Normas y Certificaciones",
        titlePre: "La calidad, ",
        titleGold: "una obligación",
        titlePost: ".",
        subtitle:
          "Exportar productos del mar desde Mauritania hacia Europa, Asia o América exige un marco normativo estricto. Lo hemos convertido en la base de nuestro trabajo.",
      },
      intro: {
        kicker: "Nuestro compromiso",
        p1: [
          { text: "Desde Nouadhibou, " },
          { text: "Nationale Pêche SARL", bold: true },
          { text: " opera bajo la supervisión permanente de la " },
          { text: "ONISPA", bold: true },
          {
            text: " (Oficina Nacional de Inspección Sanitaria de los Productos de la Pesca y la Acuicultura), autoridad mauritana competente reconocida por la Unión Europea.",
          },
        ],
        p2: [
          { text: "Esta autorización es la condición " },
          { text: "sine qua non", italic: true },
          {
            text: " para exportar productos de la pesca a la UE: sin número de autorización ONISPA, ningún contenedor supera un puesto de inspección fronterizo europeo.",
          },
        ],
      },
      mauritania: {
        heading: "Marco normativo mauritano",
        intro:
          "La exportación de productos pesqueros desde Mauritania está regulada por un conjunto de normas nacionales e internacionales que aplicamos a diario.",
        items: [
          {
            t: "Autorización ONISPA",
            d: "Cada establecimiento de tratamiento (fábrica, almacén frigorífico, buque congelador) recibe un número de autorización sanitaria único, otorgado y auditado por la ONISPA. Este número figura en cada envase y en cada certificado sanitario de exportación.",
          },
          {
            t: "Código de Pesca mauritano",
            d: "Ley n.º 017-2015 relativa al Código de Pesca: regula las licencias, las cuotas, las zonas y los períodos de pesca, la declaración de capturas y la lucha contra la pesca INDNR (ilegal, no declarada y no reglamentada).",
          },
          {
            t: "Certificado sanitario de exportación",
            d: "Emitido lote por lote por la ONISPA tras la inspección: identificación del producto, origen, autorización del establecimiento, condiciones de transporte y temperatura, conformidad con los requisitos del país destinatario.",
          },
          {
            t: "Certificado de captura (reglamento INDNR)",
            d: "Obligatorio para todo envío hacia la UE (Reglamento CE 1005/2008). Certifica que el pescado fue capturado legalmente, por un buque autorizado, en una zona y para una especie declaradas.",
          },
        ],
      },
      eu: {
        kicker: "Unión Europea",
        heading: "Exportar hacia Europa",
        intro:
          "Mauritania figura en la lista de países terceros autorizados a exportar productos de la pesca hacia la UE. Esta autorización exige la aplicación íntegra del «paquete de higiene» europeo.",
        items: [
          {
            n: "01.",
            t: "Reglamento (CE) n.º 852/2004 — Higiene de los alimentos",
            d: "Principios generales de higiene aplicables a todas las empresas alimentarias: diseño de las instalaciones, formación del personal, planes de limpieza, gestión de residuos.",
          },
          {
            n: "02.",
            t: "Reglamento (CE) n.º 853/2004 — Normas específicas para productos de origen animal",
            d: "Requisitos propios de los productos de la pesca: temperatura en el centro ≤ −18 °C para los congelados, ≤ 2 °C con hielo para los frescos, marcado sanitario, cadena de frío ininterrumpida.",
          },
          {
            n: "03.",
            t: "Reglamento (CE) n.º 178/2002 — Trazabilidad",
            d: "Cada lote debe poder rastrearse desde el cliente final hasta el buque de captura, con conservación de los registros durante varios años.",
          },
          {
            n: "04.",
            t: "HACCP obligatorio",
            d: "Análisis de peligros, identificación de puntos críticos (recepción, congelación, envasado), vigilancia documentada y acciones correctivas inmediatas.",
          },
          {
            n: "05.",
            t: "Planes de control de contaminantes",
            d: "Análisis periódicos: metales pesados (mercurio, cadmio, plomo), histamina, ABVT, Listeria, Salmonella, E. coli. Resultados archivados y comunicados a las autoridades cuando se soliciten.",
          },
          {
            n: "06.",
            t: "Etiquetado — Reglamento (UE) n.º 1379/2013",
            d: "Nombre comercial y científico de la especie, método de producción (pesca/acuicultura), zona FAO de captura, arte utilizado, fecha de congelación, datos de contacto del exportador.",
          },
        ],
      },
      international: {
        heading: "Exportación internacional",
        intro:
          "Más allá de la Unión Europea, cada mercado tiene sus propias exigencias sanitarias, que respetamos escrupulosamente.",
        items: [
          {
            t: "Estados Unidos",
            d: "Conformidad FDA — Seafood HACCP (21 CFR 123), registro Bioterrorism Act, Prior Notice antes de cada envío.",
          },
          {
            t: "Asia y Oriente Medio",
            d: "Certificaciones sanitarias bilaterales (China, Japón, Corea), certificados Halal para los mercados musulmanes (Emiratos, Arabia Saudí, Malasia).",
          },
          {
            t: "África",
            d: "Conformidad con las normas de las uniones aduaneras regionales (CEDEAO, UEMOA), certificados veterinarios y sanitarios específicos de cada país.",
          },
        ],
      },
      process: {
        kicker: "Nuestro sistema de calidad",
        heading: "Del barco al contenedor",
        items: [
          { n: "01", t: "Recepción", d: "Control organoléptico, medición de temperatura, verificación del certificado de captura y del buque de origen." },
          { n: "02", t: "Tratamiento", d: "Eviscerado, calibrado, lavado en agua refrigerada. Talleres autorizados, personal formado, procedimientos HACCP por escrito." },
          { n: "03", t: "Congelación", d: "IQF o congelación en placas a −40 °C, alcanzando −18 °C en el centro, almacenamiento en cámara fría vigilada de forma continua." },
          { n: "04", t: "Expedición", d: "Estiba en contenedor reefer precintado, registradores de temperatura, expediente documental completo entregado al transitario." },
        ],
      },
      cta: {
        heading: "¿Necesita un expediente documental completo?",
        subtitle:
          "Facilitamos, previa solicitud, nuestras autorizaciones, certificados sanitarios tipo y fichas técnicas por especie.",
        button: "Contáctenos",
      },
    },
    species: {
      poulpe: { name: "Pulpo", tagline: "Pulpo atlántico, calibrado y golpeado a mano." },
      calamar: { name: "Calamar", tagline: "Calamar entero clasificado por calibre, carne firme y translúcida." },
      seiche: { name: "Sepia / Choco", tagline: "Sepia entera fresca o congelada, calibres de exportación." },
      tako: { name: "Tako", tagline: "Pulpo preparado según los estándares asiáticos." },
      crevettes: { name: "Camarones y Gambas", tagline: "Langostinos y gambas de África Occidental, todos los calibres." },
      "langouste-crabe": { name: "Langosta y Cangrejo", tagline: "Crustáceos nobles pescados frente a las costas de Nouadhibou." },
      merou: { name: "Mero / Cherne", tagline: "Mero de fondo, carne blanca muy buscada en los mercados premium." },
      courbine: { name: "Corvina", tagline: "Corvina real del Atlántico mauritano." },
      dorade: { name: "Dorada · Dentón · Pargo", tagline: "Familia de los espáridos, pescados nobles para la alta gastronomía." },
      sole: { name: "Lenguado", tagline: "Pescados planos seleccionados, calibres de exportación." },
      "saint-pierre": { name: "San Pedro", tagline: "San Pedro entero, carne delicada y refinada." },
      pelagiques: { name: "Pelágicos", tagline: "Caballa, sardina, sardinela y jurel recién desembarcados." },
      rouget: { name: "Salmonete · Rascacio", tagline: "Pescados de roca de colores llamativos." },
      "divers-nobles": { name: "Otras especies nobles", tagline: "Especies variadas, calibres y envasados bajo pedido." },
    },
  },
};

export type Locale = keyof typeof translations;
export const LOCALES: Locale[] = ["fr", "en", "es"];
export const LOCALE_LABELS: Record<Locale, string> = { fr: "FR", en: "EN", es: "ES" };
