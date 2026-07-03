import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "motion/react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nationale Peche SARL" },
      {
        name: "description",
        content:
          "Contactez Nationale Peche SARL à Nouakchott, Mauritanie. Téléphone, email et adresse pour vos demandes de devis et d'exportation.",
      },
      { property: "og:title", content: "Contact — Nationale Peche SARL" },
      {
        property: "og:description",
        content:
          "Demandez un devis ou une cotation export à Nationale Peche SARL, Nouakchott.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:hafedmohamedabdallahi@gmail.com?subject=${encodeURIComponent(
      form.subject || "Demande de devis",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Contact
            </div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl">
              Parlons de votre
              <br />
              <span className="text-gradient-gold">prochain envoi.</span>
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Notre équipe répond à toutes vos demandes de devis, de calibres
              spécifiques ou de conditionnement sur mesure.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-10 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  label: "Téléphone / Fax",
                  value: "+222 45 74 09 40 / 41",
                  href: "tel:+22245740940",
                },
                {
                  label: "Mobile",
                  value: "+222 22 06 30 81",
                  href: "tel:+22222063081",
                },
                {
                  label: "Email",
                  value: "hafedmohamedabdallahi@gmail.com",
                  href: "mailto:hafedmohamedabdallahi@gmail.com",
                },
                {
                  label: "Adresse",
                  value:
                    "Socogim lot N° 111, près de l'avenue de l'aéroport, BP 1024, Nouakchott, Mauritanie",
                },
                { label: "NIF", value: "00760850" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-sm shadow-luxe"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block font-display text-lg text-foreground hover:text-gold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-foreground/90 leading-relaxed">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onSubmit={onSubmit}
              className="lg:col-span-3 rounded-3xl border border-border/70 bg-card/70 p-8 backdrop-blur-sm shadow-luxe md:p-10"
            >
              <h2 className="font-display text-2xl">Envoyer une demande</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Votre message ouvrira votre application mail par défaut.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Field label="Nom complet">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-lux"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-lux"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Sujet">
                  <input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Demande de cotation, espèce recherchée…"
                    className="input-lux"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message">
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-lux resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-gradient-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground shadow-gold-glow transition-transform hover:scale-[1.01] md:w-auto"
              >
                Envoyer le message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <style>{`
        .input-lux {
          width: 100%;
          background: color-mix(in oklab, var(--color-background) 60%, transparent);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-lux:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--gold) 25%, transparent);
        }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
