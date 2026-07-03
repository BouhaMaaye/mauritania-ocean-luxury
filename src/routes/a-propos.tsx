import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import exportImg from "@/assets/export.jpg";
import oceanHero from "@/assets/ocean-hero.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Nationale Peche SARL" },
      {
        name: "description",
        content:
          "Nationale Peche SARL, société mauritanienne de pêche et d'exportation basée à Nouakchott. Découvrez notre histoire, notre mission et nos engagements qualité.",
      },
      { property: "og:title", content: "À propos — Nationale Peche SARL" },
      {
        property: "og:description",
        content:
          "Histoire, mission et savoir-faire d'une maison mauritanienne dédiée aux produits de la mer d'exception.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden py-32">
        <img src={oceanHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
            À propos
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl">
            L'océan comme
            <br />
            <span className="text-gradient-gold">héritage.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            Née sur la façade atlantique de la Mauritanie, Nationale Peche
            SARL cultive depuis deux décennies un lien intime avec la mer
            et ses ressources.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Notre histoire
            </div>
            <h2 className="mt-4 font-display text-4xl">Une maison, une côte.</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Fondée à Nouakchott, Nationale Peche SARL s'inscrit dans la
                grande tradition des maisons de négoce mauritaniennes. Notre
                métier : rassembler les meilleures pêches débarquées le long
                du littoral et les préparer pour les marchés les plus
                exigeants.
              </p>
              <p>
                De la sélection au quai jusqu'à l'expédition en conteneur
                réfrigéré, chaque produit qui porte notre nom est le fruit
                d'un contrôle minutieux et d'un savoir-faire transmis.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/70 shadow-luxe"
          >
            <img src={exportImg} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
            Nos engagements
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Quatre principes, <span className="text-gradient-gold">une exigence.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              n: "01",
              t: "Fraîcheur",
              d: "Tri au débarquement, mise sous glace immédiate, congélation rapide IQF.",
            },
            {
              n: "02",
              t: "Traçabilité",
              d: "Chaque lot est identifié, documenté et suivi jusqu'à la livraison.",
            },
            {
              n: "03",
              t: "Calibrage",
              d: "Un tri manuel rigoureux garantit une régularité irréprochable.",
            },
            {
              n: "04",
              t: "Export",
              d: "Documentation, conditionnement et logistique adaptés à chaque marché.",
            },
          ].map((v) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-border/60 bg-card/70 p-8 backdrop-blur-sm shadow-luxe"
            >
              <div className="font-display text-4xl text-gradient-gold">{v.n}</div>
              <h3 className="mt-4 font-display text-xl">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
          Notre mission
        </div>
        <p className="mt-8 font-display text-3xl leading-snug md:text-4xl">
          « Faire rayonner la richesse de l'Atlantique mauritanien sur
          <span className="text-gradient-gold"> les meilleures tables du monde</span>, avec l'exigence d'une maison qui connaît sa mer. »
        </p>
      </section>
    </>
  );
}
