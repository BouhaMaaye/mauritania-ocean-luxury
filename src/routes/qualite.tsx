import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import oceanHero from "@/assets/ocean-hero.jpg";

export const Route = createFileRoute("/qualite")({
  head: () => ({
    meta: [
      { title: "Qualité & Certifications — Nationale Peche SARL" },
      {
        name: "description",
        content:
          "Normes sanitaires, HACCP, agréments ONISPA et conformité aux exigences de l'Union européenne pour l'exportation de produits de la pêche mauritaniens.",
      },
      { property: "og:title", content: "Qualité & Normes d'exportation — Nationale Peche SARL" },
      {
        property: "og:description",
        content:
          "Un engagement rigoureux sur la sécurité sanitaire, la traçabilité et la conformité aux réglementations UE, USA et internationales.",
      },
    ],
  }),
  component: QualitePage,
});

function QualitePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={oceanHero}
            alt=""
            className="h-full w-full scale-105 object-cover blur-[2px]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, color-mix(in oklab, var(--ocean-deep) 60%, transparent) 0%, color-mix(in oklab, var(--ocean-deep) 20%, transparent) 60%, transparent 100%)",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Normes & Certifications
              </span>
            </div>
            <h1 className="mb-6 font-display text-5xl font-bold leading-[1.1] text-white md:text-7xl">
              La qualité, <span className="italic text-gold">une obligation</span>.
            </h1>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-white/90 md:text-xl">
              Exporter des produits de la mer depuis la Mauritanie vers
              l'Europe, l'Asie ou l'Amérique impose un cadre réglementaire
              strict. Nous en avons fait le socle de notre travail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Notre engagement
            </span>
            <div className="mt-6 h-1 w-16 bg-gold" />
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground lg:col-span-8">
            <p>
              Depuis Nouadhibou, <strong className="font-semibold text-[color:var(--ocean-deep)]">Nationale Pêche SARL</strong> opère
              sous la supervision permanente de l'
              <strong className="font-semibold text-[color:var(--ocean-deep)]">ONISPA</strong>
              {" "}(Office National d'Inspection Sanitaire des Produits de la
              Pêche et de l'Aquaculture), autorité mauritanienne compétente
              reconnue par l'Union européenne.
            </p>
            <p>
              Cet agrément est la condition <em>sine qua non</em> pour
              exporter des produits de la pêche vers l'UE : sans numéro
              d'agrément ONISPA, aucun conteneur ne franchit un poste
              d'inspection frontalier européen.
            </p>
          </div>
        </div>
      </section>

      {/* MAURITANIA NORMS */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-6 font-display text-4xl font-bold italic text-[color:var(--ocean-deep)] md:text-5xl">
              Cadre réglementaire mauritanien
            </h2>
            <div className="mb-6 h-1 w-20 bg-gold" />
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              L'exportation de produits halieutiques depuis la Mauritanie
              est encadrée par un ensemble de textes nationaux et
              internationaux que nous appliquons quotidiennement.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
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
            ].map((item) => (
              <div key={item.t} className="border-l-2 border-gold bg-card p-8">
                <h3 className="mb-3 font-display text-xl font-bold text-[color:var(--ocean-deep)]">
                  {item.t}
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EU EXPORT */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Union européenne
          </span>
          <h2 className="mt-6 mb-6 font-display text-4xl font-bold italic text-[color:var(--ocean-deep)] md:text-5xl">
            Exporter vers l'Europe
          </h2>
          <div className="mb-6 h-1 w-20 bg-gold" />
          <p className="text-lg font-light leading-relaxed text-muted-foreground">
            La Mauritanie figure sur la liste des pays tiers autorisés à
            exporter des produits de la pêche vers l'UE. Cette autorisation
            impose l'application intégrale du « paquet hygiène » européen.
          </p>
        </div>

        <div className="space-y-12">
          {[
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
          ].map((item) => (
            <div key={item.n} className="flex items-start gap-6 border-b border-border pb-8">
              <span className="font-display text-2xl italic text-gold">
                {item.n}
              </span>
              <div>
                <h4 className="mb-2 text-xl font-bold text-[color:var(--ocean-deep)]">
                  {item.t}
                </h4>
                <p className="font-light leading-relaxed text-muted-foreground">
                  {item.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNATIONAL */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-6 font-display text-4xl font-bold italic text-[color:var(--ocean-deep)] md:text-5xl">
              Exportation internationale
            </h2>
            <div className="mb-6 h-1 w-20 bg-gold" />
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Au-delà de l'Union européenne, chaque marché possède ses
              propres exigences sanitaires que nous respectons scrupuleusement.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
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
            ].map((item) => (
              <div key={item.t} className="bg-card p-10">
                <h3 className="mb-4 font-display text-xl font-bold text-[color:var(--ocean-deep)]">
                  {item.t}
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL PROCESS */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Notre système qualité
          </span>
          <h2 className="mt-6 mb-6 font-display text-4xl font-bold italic text-[color:var(--ocean-deep)] md:text-5xl">
            Du bateau au conteneur
          </h2>
          <div className="mb-6 h-1 w-20 bg-gold" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Réception", d: "Contrôle organoleptique, mesure de température, vérification du certificat de capture et du navire d'origine." },
            { n: "02", t: "Traitement", d: "Éviscération, calibrage, lavage en eau réfrigérée. Ateliers agréés, personnel formé, procédures HACCP écrites." },
            { n: "03", t: "Congélation", d: "IQF ou congélation en plaques à −40 °C, atteinte du cœur à −18 °C, stockage en chambre froide surveillée en continu." },
            { n: "04", t: "Expédition", d: "Empotage en conteneur reefer scellé, enregistreurs de température, dossier documentaire complet remis au transitaire." },
          ].map((item) => (
            <div key={item.n} className="border-t-2 border-gold pt-6">
              <div className="mb-4 font-display text-3xl italic text-gold">{item.n}</div>
              <h3 className="mb-3 text-lg font-bold text-[color:var(--ocean-deep)]">{item.t}</h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="mb-6 font-display text-3xl font-bold italic text-[color:var(--ocean-deep)] md:text-4xl">
            Besoin d'un dossier documentaire complet ?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            Nous transmettons sur demande nos agréments, certificats
            sanitaires types et fiches techniques par espèce.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold px-10 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:brightness-95"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
