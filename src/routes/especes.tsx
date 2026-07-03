import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { speciesCategories, type SpeciesCategory } from "@/data/species";

export const Route = createFileRoute("/especes")({
  head: () => ({
    meta: [
      { title: "Nos espèces — Nationale Peche SARL" },
      {
        name: "description",
        content:
          "Catalogue complet des produits de la mer proposés par Nationale Peche SARL : poulpe, calamar, seiche, crevettes, mérou, courbine, dorade, sole, Saint-Pierre et espèces nobles.",
      },
      { property: "og:title", content: "Catalogue des espèces — Nationale Peche SARL" },
      {
        property: "og:description",
        content:
          "Plus de 80 espèces triées par calibre, préparées pour l'export international.",
      },
    ],
  }),
  component: SpeciesPage,
});

function SpeciesPage() {
  const [query, setQuery] = useState("");
  const filtered = speciesCategories.filter((s) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      s.name.toLowerCase().includes(q) ||
      s.latin?.toLowerCase().includes(q) ||
      s.variants.some((v) => v.toLowerCase().includes(q))
    );
  });

  return (
    <>
      {/* Header */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Catalogue
            </div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl text-foreground">
              Nos <span className="text-gradient-gold">espèces</span>
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Céphalopodes, crustacés, poissons nobles et pélagiques —
              découvrez nos catégories une par une, avec leurs calibres et
              conditionnements disponibles à l'export.
            </p>
          </motion.div>

          <div className="mt-12 flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm md:max-w-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une espèce, un calibre…"
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* One species per block */}
      <section className="pb-32">
        {filtered.length === 0 ? (
          <p className="mx-auto max-w-6xl px-6 text-center text-muted-foreground py-24">
            Aucune espèce ne correspond à votre recherche.
          </p>
        ) : (
          <div className="space-y-24 md:space-y-32">
            {filtered.map((s, i) => (
              <SpeciesBlock key={s.slug} species={s} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function SpeciesBlock({
  species,
  index,
}: {
  species: SpeciesCategory;
  index: number;
}) {
  const reversed = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto max-w-6xl px-6"
    >
      <div
        className={`grid gap-10 md:gap-16 md:grid-cols-2 md:items-center ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-15 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-luxe">
            <img
              src={species.image}
              alt={species.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
            />
            <div className="absolute left-5 top-5">
              <span className="rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-foreground shadow-gold-glow">
                Export
              </span>
            </div>
            <div className="absolute right-5 top-5 rounded-full bg-card/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/80 backdrop-blur">
              N° {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Catégorie {String(index + 1).padStart(2, "0")}
            </div>
          </div>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            {species.name}
          </h2>
          {species.latin && (
            <p className="mt-2 text-sm italic text-muted-foreground">
              {species.latin}
            </p>
          )}
          <p className="mt-6 max-w-lg leading-relaxed text-foreground/75">
            {species.tagline}
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                Calibres & conditionnements
              </p>
              <span className="text-xs font-medium text-muted-foreground">
                {species.variants.length} référence{species.variants.length > 1 ? "s" : ""}
              </span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {species.variants.map((v) => (
                <li
                  key={v}
                  className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground/85"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold hover:underline"
          >
            Demander une cotation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
