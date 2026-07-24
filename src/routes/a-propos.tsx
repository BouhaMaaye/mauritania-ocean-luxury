import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n/context";
import exportImg from "@/assets/export.jpg";
import oceanHero from "@/assets/ocean-hero.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Nationale Peche SARL" },
      {
        name: "description",
        content:
          "Nationale Peche SARL, société mauritanienne de pêche et d'exportation basée à Nouadhibou. Découvrez notre histoire, notre mission et nos engagements qualité.",
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
  const { t } = useI18n();
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden py-32">
        <img src={oceanHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
            {t.about.hero.kicker}
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl">
            {t.about.hero.titleLine1}
            <br />
            <span className="text-gradient-gold">{t.about.hero.titleGold}</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-muted-foreground">
            {t.about.hero.subtitle}
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
              {t.about.story.kicker}
            </div>
            <h2 className="mt-4 font-display text-4xl">{t.about.story.heading}</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>{t.about.story.p1}</p>
              <p>{t.about.story.p2}</p>
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
            {t.about.values.kicker}
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            {t.about.values.headingPre}
            <span className="text-gradient-gold">{t.about.values.headingGold}</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.about.values.items.map((v) => (
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
          {t.about.mission.kicker}
        </div>
        <p className="mt-8 font-display text-3xl leading-snug md:text-4xl">
          {t.about.mission.quotePre}
          <span className="text-gradient-gold">{t.about.mission.quoteGold}</span>
          {t.about.mission.quotePost}
        </p>
      </section>
    </>
  );
}
