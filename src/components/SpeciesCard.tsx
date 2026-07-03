import { motion } from "motion/react";
import type { SpeciesCategory } from "@/data/species";

export function SpeciesCard({
  species,
  index,
}: {
  species: SpeciesCategory;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm shadow-luxe"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={species.image}
          alt={species.name}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute left-5 top-5 flex gap-2">
          <span className="rounded-full border border-gold/40 bg-background/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gold backdrop-blur">
            Export
          </span>
        </div>
        <div className="absolute inset-x-5 bottom-5">
          <h3 className="font-display text-2xl text-foreground">
            {species.name}
          </h3>
          {species.latin && (
            <p className="mt-0.5 text-xs italic text-muted-foreground">
              {species.latin}
            </p>
          )}
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {species.tagline}
        </p>
        <div className="mt-5 border-t border-border/60 pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Calibres disponibles
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {species.variants.map((v) => (
              <li
                key={v}
                className="rounded-md border border-border/60 bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-foreground/85"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/0 via-gold/0 to-gold/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}
