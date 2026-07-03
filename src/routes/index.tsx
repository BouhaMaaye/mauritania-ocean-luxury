import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { speciesCategories } from "@/data/species";
import oceanHero from "@/assets/ocean-hero.jpg";
import exportImg from "@/assets/export.jpg";

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
  const stats = [
    { k: "20+", v: "Années d'expertise" },
    { k: "80+", v: "Espèces traitées" },
    { k: "15", v: "Pays d'export" },
    { k: "24/7", v: "Chaîne du froid", italic: true },
  ];

  return (
    <>
      {/* HERO — full-bleed image with navy overlay from left */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={oceanHero}
            alt=""
            className="h-full w-full object-cover brightness-75"
            width={1920}
            height={1080}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--ocean-deep) 0%, color-mix(in oklab, var(--ocean-deep) 80%, transparent) 45%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Excellence halieutique
              </span>
            </div>
            <h1 className="mb-8 font-display text-6xl font-bold leading-[1.1] text-white md:text-8xl">
              Nationale Pêche
              <br />
              <span className="font-normal italic text-gold">SARL</span>
            </h1>
            <p className="mb-12 max-w-xl text-xl font-light leading-relaxed text-white/90 md:text-2xl">
              Depuis plus de deux décennies, nous portons les richesses de
              l'Atlantique mauritanien vers les tables les plus prestigieuses
              du monde.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/especes"
                className="bg-gold px-10 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:brightness-95"
              >
                Catalogue des espèces
              </Link>
              <Link
                to="/contact"
                className="border border-white px-10 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[color:var(--ocean-deep)]"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRIC BAR — overlapping hero */}
      <div className="relative z-20 mx-auto -mt-12 max-w-7xl px-8">
        <div
          className="grid grid-cols-2 bg-card md:grid-cols-4"
          style={{ boxShadow: "0 20px 50px color-mix(in oklab, var(--ocean-deep) 12%, transparent)" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.v}
              className={`p-10 text-center ${i < stats.length - 1 ? "border-r border-border/50" : ""}`}
            >
              <div
                className={`mb-2 text-4xl font-bold text-[color:var(--ocean-deep)] ${s.italic ? "font-display italic" : ""}`}
              >
                {s.k}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SPECIES CATALOG */}
      <section className="mx-auto max-w-7xl px-8 py-32">
        <div className="mb-20 max-w-xl">
          <h2 className="mb-6 font-display text-5xl font-bold italic text-[color:var(--ocean-deep)]">
            Nos espèces signatures
          </h2>
          <div className="mb-6 h-1 w-20 bg-gold" />
          <p className="text-lg font-light leading-relaxed text-muted-foreground">
            Une sélection rigoureuse de produits sauvages, pêchés
            durablement dans les eaux pures de Mauritanie.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="group"
            >
              <div className="relative mb-6 aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-4 border border-gold/25" />
              </div>
              <h3 className="mb-2 font-display text-2xl font-bold text-[color:var(--ocean-deep)]">
                {s.name}
              </h3>
              {s.latin && (
                <p className="text-xs uppercase tracking-widest text-gold">
                  {s.latin}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/especes"
            className="border-b-2 border-gold pb-2 text-xs font-bold uppercase tracking-widest text-gold"
          >
            Voir tout le catalogue →
          </Link>
        </div>
      </section>

      {/* EXPORT & LOGISTICS — split screen */}
      <section className="overflow-hidden bg-muted">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-full flex-col justify-center p-16 lg:w-1/2 lg:p-24 xl:p-32">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
              Maîtrise logistique
            </span>
            <h2 className="mb-10 font-display text-4xl font-bold leading-tight text-[color:var(--ocean-deep)] md:text-5xl">
              Une logistique sans faille
              <br />
              vers 15 pays.
            </h2>
            <div className="space-y-12">
              {[
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
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-6">
                  <span className="font-display text-2xl italic text-gold">
                    {item.n}
                  </span>
                  <div>
                    <h4 className="mb-3 text-xl font-bold text-[color:var(--ocean-deep)]">
                      {item.t}
                    </h4>
                    <p className="font-light leading-relaxed text-muted-foreground">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14">
              <Link
                to="/contact"
                className="inline-block bg-gold px-10 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:brightness-95"
              >
                Demander une cotation
              </Link>
            </div>
          </div>
          <div className="relative min-h-[600px] w-full bg-secondary lg:w-1/2">
            <img
              src={exportImg}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{ background: "color-mix(in oklab, var(--ocean-deep) 20%, transparent)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
