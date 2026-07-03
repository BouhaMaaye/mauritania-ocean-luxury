import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { speciesCategories } from "@/data/species";
import { SpeciesCard } from "@/components/SpeciesCard";

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
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Catalogue
            </div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl">
              Nos <span className="text-gradient-gold">espèces</span>
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Céphalopodes, crustacés, poissons nobles et pélagiques —
              retrouvez l'ensemble de nos catégories, leurs calibres et
              conditionnements disponibles à l'export.
            </p>
          </motion.div>

          {/* Search */}
          <div className="mt-12 flex items-center gap-3 rounded-full border border-border/70 bg-card/60 px-5 py-3 backdrop-blur md:max-w-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une espèce, un calibre…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-24">
            Aucune espèce ne correspond à votre recherche.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s, i) => (
              <SpeciesCard key={s.slug} species={s} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
