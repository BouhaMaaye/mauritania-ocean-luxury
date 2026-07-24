import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useI18n } from "@/lib/i18n/context";
import { Rich } from "@/lib/i18n/Rich";
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
  const { t } = useI18n();
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
                {t.qualite.hero.kicker}
              </span>
            </div>
            <h1 className="mb-6 font-display text-5xl font-bold leading-[1.1] text-white md:text-7xl">
              {t.qualite.hero.titlePre}
              <span className="italic text-gold">{t.qualite.hero.titleGold}</span>
              {t.qualite.hero.titlePost}
            </h1>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-white/90 md:text-xl">
              {t.qualite.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              {t.qualite.intro.kicker}
            </span>
            <div className="mt-6 h-1 w-16 bg-gold" />
          </div>
          <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground lg:col-span-8">
            <p>
              <Rich parts={t.qualite.intro.p1} boldClassName="font-semibold text-[color:var(--ocean-deep)]" />
            </p>
            <p>
              <Rich parts={t.qualite.intro.p2} />
            </p>
          </div>
        </div>
      </section>

      {/* MAURITANIA NORMS */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-6 font-display text-4xl font-bold italic text-[color:var(--ocean-deep)] md:text-5xl">
              {t.qualite.mauritania.heading}
            </h2>
            <div className="mb-6 h-1 w-20 bg-gold" />
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              {t.qualite.mauritania.intro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {t.qualite.mauritania.items.map((item) => (
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
            {t.qualite.eu.kicker}
          </span>
          <h2 className="mt-6 mb-6 font-display text-4xl font-bold italic text-[color:var(--ocean-deep)] md:text-5xl">
            {t.qualite.eu.heading}
          </h2>
          <div className="mb-6 h-1 w-20 bg-gold" />
          <p className="text-lg font-light leading-relaxed text-muted-foreground">
            {t.qualite.eu.intro}
          </p>
        </div>

        <div className="space-y-12">
          {t.qualite.eu.items.map((item) => (
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
              {t.qualite.international.heading}
            </h2>
            <div className="mb-6 h-1 w-20 bg-gold" />
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              {t.qualite.international.intro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {t.qualite.international.items.map((item) => (
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
            {t.qualite.process.kicker}
          </span>
          <h2 className="mt-6 mb-6 font-display text-4xl font-bold italic text-[color:var(--ocean-deep)] md:text-5xl">
            {t.qualite.process.heading}
          </h2>
          <div className="mb-6 h-1 w-20 bg-gold" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.qualite.process.items.map((item) => (
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
            {t.qualite.cta.heading}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            {t.qualite.cta.subtitle}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold px-10 py-5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:brightness-95"
          >
            {t.qualite.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
