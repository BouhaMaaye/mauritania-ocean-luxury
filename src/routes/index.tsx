import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useSpeciesCategories } from "@/data/species";
import { ScrollFrameHero } from "@/components/ScrollFrameHero";
import { Tilt3D } from "@/components/Tilt3D";
import { useI18n } from "@/lib/i18n/context";
import { Rich } from "@/lib/i18n/Rich";
import exportImg from "@/assets/export.jpg";
import logoUrl from "@/assets/National_logo.png";
import promoVideo from "@/assets/Cinematic_promotional_video_s.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nationale Peche SARL — L'excellence de la pêche mauritanienne" },
      {
        name: "description",
        content:
          "Nationale Peche SARL exporte poulpe, calamar, crevettes, mérou et poissons nobles depuis Nouadhibou vers les marchés internationaux.",
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
  const { t } = useI18n();
  const speciesCategories = useSpeciesCategories();
  const featured = speciesCategories.filter((s) => s.image).slice(0, 4);
  const stats = t.home.stats;

  return (
    <>
      {/* HERO — cinematic scroll-scrubbed image sequence (Apple-style) */}
      <ScrollFrameHero />

      {/* METRIC BAR — overlapping hero */}
      <div className="relative z-20 mx-auto -mt-12 max-w-7xl px-8">
        <div
          className="grid grid-cols-2 bg-card md:grid-cols-4"
          style={{ boxShadow: "0 20px 50px color-mix(in oklab, var(--ocean-deep) 12%, transparent)" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.v}
              className={`group p-10 text-center transition-transform duration-500 hover:-translate-y-1 ${i < stats.length - 1 ? "border-r border-border/50" : ""}`}
            >
              <div
                className={`mb-2 font-display text-4xl font-bold text-[color:var(--ocean-deep)] ${s.italic ? "italic" : ""}`}
              >
                {s.k}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                {s.v}
              </div>
              <span className="mx-auto mt-3 block h-px w-8 origin-center scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-150" />
            </div>
          ))}
        </div>
      </div>

      {/* COMPANY PRESENTATION */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-8 pt-32">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 left-0 select-none font-display text-[13rem] italic leading-none text-[color:var(--ocean-deep)]/[0.04] md:text-[19rem]"
        >
          01
        </span>

        <div className="relative grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-4">
            <span className="block text-xs font-bold uppercase tracking-[0.3em] text-gold">
              {t.home.presentation.kicker}
            </span>
            <div className="mt-6 h-1 w-16 bg-gold" />
            <img
              src={logoUrl}
              alt="Nationale Peche SARL"
              width={200}
              height={200}
              className="mt-10 h-32 w-32 object-contain"
            />

            <Tilt3D className="relative mt-10 aspect-[4/5] overflow-hidden bg-[color:var(--ocean-deep)]">
              <video
                src={promoVideo}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover opacity-90"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--ocean-deep)]/70 via-transparent to-transparent" />
              {/* corner brackets — premium tag motif */}
              <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-gold/70" />
              <span className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-gold/70" />
              <span className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l border-gold/70" />
              <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-gold/70" />
              <span className="pointer-events-none absolute inset-x-4 bottom-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                {t.home.presentation.videoCaption}
              </span>
            </Tilt3D>
          </div>
          <div className="lg:col-span-8">
            <h2 className="mb-10 font-display text-4xl font-bold leading-tight text-[color:var(--ocean-deep)] md:text-5xl">
              {t.home.presentation.headingLine1}
              <br />
              {t.home.presentation.headingLine2Pre}
              <span className="italic">{t.home.presentation.headingLine2Italic}</span>
              {t.home.presentation.headingLine2Post}
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground">
              <p>
                <span className="float-left mr-3 mt-1 font-display text-7xl italic leading-[0.8] text-gold">
                  {t.home.presentation.paragraph1[0].text.charAt(0)}
                </span>
                <Rich
                  parts={[
                    { ...t.home.presentation.paragraph1[0], text: t.home.presentation.paragraph1[0].text.slice(1) },
                    ...t.home.presentation.paragraph1.slice(1),
                  ]}
                  boldClassName="font-semibold text-[color:var(--ocean-deep)]"
                />
              </p>
              <p>{t.home.presentation.paragraph2}</p>
              <p>{t.home.presentation.paragraph3}</p>
            </div>
            <div className="mt-10">
              <Link
                to="/a-propos"
                className="border-b-2 border-gold pb-2 text-xs font-bold uppercase tracking-widest text-gold"
              >
                {t.home.presentation.ctaHistory} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY & ENGAGEMENTS */}
      <section className="bg-muted py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-20 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                {t.home.quality.kicker}
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-[color:var(--ocean-deep)] md:text-5xl">
                {t.home.quality.headingPre}
                <span className="italic text-gold">{t.home.quality.headingItalic}</span>
                {t.home.quality.headingPost}
              </h2>
              <div className="mt-6 h-1 w-16 bg-gold" />
            </div>
            <p className="text-lg font-light leading-relaxed text-muted-foreground lg:col-span-7">
              {t.home.quality.intro}
            </p>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {t.home.quality.items.map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-card p-10 transition-colors duration-300 hover:bg-card/60"
              >
                {/* rail segment — chains with neighboring cards into one connecting line */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-16 hidden h-px bg-gold/30 lg:block"
                />
                <div
                  className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center border border-gold/40 bg-card font-display text-lg italic text-gold"
                  style={{ boxShadow: "0 0 0 6px var(--card)" }}
                >
                  {item.n}
                </div>
                <h3 className="mb-4 text-xl font-bold text-[color:var(--ocean-deep)]">{item.t}</h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {item.d}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="/qualite"
              className="border-b-2 border-gold pb-2 text-xs font-bold uppercase tracking-widest text-gold"
            >
              {t.home.quality.cta} →
            </Link>
          </div>
        </div>
      </section>

      {/* SIGNATURE QUOTE — full-bleed editorial break */}
      <section className="relative isolate overflow-hidden bg-[color:var(--ocean-deep)] py-40">
        <div className="grain-overlay" />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden font-display text-[9rem] font-bold uppercase italic leading-none text-white/[0.035] md:text-[13rem]"
        >
          Atlantique
        </span>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl px-8 text-center"
        >
          <div className="mx-auto mb-10 h-px w-16 bg-gold" />
          <p className="font-display text-3xl italic leading-snug text-white md:text-5xl">
            {t.home.quote.pre}{" "}
            <span className="text-gold">{t.home.quote.gold}</span>
          </p>
          <span className="mt-10 block text-xs font-bold uppercase tracking-[0.3em] text-gold/80">
            {t.home.quote.brand}
          </span>
        </motion.div>
      </section>

      {/* SPECIES CATALOG */}
      <section className="mx-auto max-w-7xl px-8 py-32">
        <div className="mb-20 max-w-xl">
          <h2 className="mb-6 font-display text-5xl font-bold italic text-[color:var(--ocean-deep)]">
            {t.home.speciesSection.heading}
          </h2>
          <div className="mb-6 h-1 w-20 bg-gold" />
          <p className="text-lg font-light leading-relaxed text-muted-foreground">
            {t.home.speciesSection.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
            >
              <Tilt3D className="relative mb-6 aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-4 border border-gold/25" />
              </Tilt3D>
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
            {t.home.speciesSection.cta} →
          </Link>
        </div>
      </section>

      {/* EXPORT & LOGISTICS — split screen */}
      <section className="overflow-hidden bg-muted">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-full flex-col justify-center p-16 lg:w-1/2 lg:p-24 xl:p-32">
            <span className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">
              {t.home.logistics.kicker}
            </span>
            <h2 className="mb-10 font-display text-4xl font-bold leading-tight text-[color:var(--ocean-deep)] md:text-5xl">
              {t.home.logistics.headingLine1}
              <br />
              {t.home.logistics.headingLine2}
            </h2>
            <div className="space-y-12">
              {t.home.logistics.items.map((item) => (
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
                {t.home.logistics.cta}
              </Link>
            </div>
          </div>
          <div className="relative min-h-[600px] w-full overflow-hidden bg-secondary lg:w-1/2">
            <img
              src={exportImg}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2px]"
            />
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{ background: "color-mix(in oklab, var(--ocean-deep) 20%, transparent)" }}
            />

            {/* shipping-route overlay — visualizes the export lanes */}
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full opacity-80"
            >
              <path
                d="M 8 88 C 30 70, 35 55, 50 50 S 75 35, 92 12"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="0.35"
                strokeDasharray="1.6 2.4"
                vectorEffect="non-scaling-stroke"
                className="animate-route-dash"
              />
            </svg>
            {[
              { x: "8%", y: "88%" },
              { x: "50%", y: "50%" },
              { x: "92%", y: "12%" },
            ].map((p) => (
              <span
                key={p.x}
                className="absolute z-[1] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
                style={{ left: p.x, top: p.y }}
              >
                <span className="absolute inset-0 rounded-full bg-gold animate-port-pulse" />
              </span>
            ))}
            <span className="absolute inset-x-6 bottom-6 z-[1] text-[10px] font-bold uppercase tracking-[0.22em] text-white/85">
              {t.home.logistics.routeCaption}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
