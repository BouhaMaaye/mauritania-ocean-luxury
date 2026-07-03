import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import { speciesCategories } from "@/data/species";
import oceanHero from "@/assets/ocean-hero.jpg";
import exportImg from "@/assets/export.jpg";

const OceanScene = lazy(() =>
  import("@/components/OceanScene").then((m) => ({ default: m.OceanScene })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nationale Peche SARL — L'excellence de la pêche mauritanienne" },
      {
        name: "description",
        content:
          "Nationale Peche SARL exporte poulpe, calamar, crevettes, mérou et poissons nobles depuis Nouakchott vers les marchés internationaux.",
      },
      {
        property: "og:title",
        content: "Nationale Peche SARL — L'excellence de la pêche mauritanienne",
      },
      {
        property: "og:description",
        content:
          "Produits de la mer d'exception pêchés au large de la Mauritanie et exportés dans le monde entier.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = speciesCategories.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        {/* Background image + gradient */}
        <img
          src={oceanHero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />

        {/* 3D canvas overlay */}
        <div className="absolute inset-0 opacity-50 mix-blend-multiply">
          <Suspense fallback={null}>
            <OceanScene />
          </Suspense>
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                Nouakchott · Mauritanie
              </span>
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-foreground md:text-7xl lg:text-[5.5rem]">
              L'excellence de la <span className="text-gradient-gold">pêche mauritanienne</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Nationale Peche SARL sélectionne, conditionne et exporte les
              meilleurs produits de la mer de l'Atlantique vers les marchés
              européens, asiatiques et africains.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/especes"
                className="rounded-full bg-gradient-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground shadow-gold-glow transition-transform hover:scale-[1.03]"
              >
                Découvrir nos espèces
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-border bg-background/50 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur transition-colors hover:border-gold/60 hover:text-gold"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <svg
          className="absolute bottom-0 left-0 w-full text-background"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,64 C240,120 480,20 720,50 C960,80 1200,110 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 -mt-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 shadow-luxe md:grid-cols-4">
          {[
            { k: "20+", v: "années d'expertise" },
            { k: "80+", v: "espèces travaillées" },
            { k: "15", v: "pays d'export" },
            { k: "24/7", v: "chaîne du froid" },
          ].map((s) => (
            <div key={s.v} className="bg-card/90 p-8 text-center">
              <div className="font-display text-4xl text-gradient-gold md:text-5xl">
                {s.k}
              </div>
              <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Notre signature
            </div>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Une côte, un savoir-faire,
              <br />
              <span className="text-gradient-gold">une exigence.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Les eaux de la Mauritanie comptent parmi les plus poissonneuses
              du monde. Nous conjuguons la richesse de cette ressource à un
              conditionnement rigoureux — tri par calibre, mise sous glace
              immédiate, congélation rapide — pour livrer un produit fidèle
              à la mer dont il vient.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Sélection quotidienne au débarquement",
                "Chaîne du froid maîtrisée de bout en bout",
                "Conditionnement adapté à chaque marché",
                "Traçabilité et documentation d'export complètes",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  <span className="text-foreground/85">{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/70 shadow-luxe"
          >
            <img
              src={featured[0].image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute inset-x-8 bottom-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                Produit signature
              </div>
              <div className="mt-2 font-display text-3xl">Poulpe atlantique</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SPECIES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Nos catégories
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Une sélection <span className="text-gradient-gold">océane</span>
            </h2>
          </div>
          <Link
            to="/especes"
            className="text-xs font-semibold uppercase tracking-[0.22em] text-gold hover:underline"
          >
            Voir toutes les espèces →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 shadow-luxe"
            >
              <img
                src={s.image}
                alt={s.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                  {s.variants.length} calibres
                </div>
                <div className="mt-1 font-display text-2xl">{s.name}</div>
                {s.latin && (
                  <div className="text-xs italic text-muted-foreground">
                    {s.latin}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPORT */}
      <section className="relative isolate my-24 overflow-hidden py-32">
        <img
          src={exportImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/60" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
            Exportation
          </div>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            De Nouakchott vers
            <br />
            <span className="text-gradient-gold">les grandes tables du monde.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            Congélation IQF, conditionnement en cartons, palettisation
            certifiée et documentation d'export prête à embarquer. Nous
            assurons chaque étape logistique jusqu'au port de destination.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex rounded-full bg-gradient-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-foreground shadow-gold-glow"
          >
            Demander une cotation
          </Link>
        </div>
      </section>
    </>
  );
}
