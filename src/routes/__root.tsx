import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoAsset from "../assets/logo.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/especes", label: "Espèces" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoAsset.url}
            alt="Nationale Peche SARL"
            width={48}
            height={48}
            className="h-12 w-12 object-contain drop-shadow-[0_0_16px_rgba(77,166,255,0.35)]"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg text-foreground">
              Nationale Peche
            </div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
              SARL · Mauritanie
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-gold" />
                  )}
                </>
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 rounded-full bg-gradient-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground shadow-gold-glow transition-transform hover:scale-[1.03]"
          >
            Demander un devis
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md border border-border/70 p-2 text-foreground"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur">
          <nav className="flex flex-col p-4 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
            <div>
              <div className="font-display text-xl">Nationale Peche SARL</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Pêche · Négoce · Exportation
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Depuis la côte mauritanienne, nous sélectionnons, conditionnons et
            exportons les meilleurs produits de la mer vers les marchés
            européens, asiatiques et africains.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Tél / Fax : +222 45 74 09 40 / 41</li>
            <li>Mobile : +222 22 06 30 81</li>
            <li>
              <a href="mailto:hafedmohamedabdallahi@gmail.com" className="hover:text-gold">
                hafedmohamedabdallahi@gmail.com
              </a>
            </li>
            <li>NIF : 00760850</li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
            Adresse
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Socogim lot N° 111<br />
            Près de l'avenue de l'aéroport<br />
            BP 1024 · Nouakchott<br />
            Mauritanie
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Nationale Peche SARL. Tous droits réservés.</span>
          <span className="uppercase tracking-[0.24em] text-gold/80">Mauritania · Atlantic Ocean</span>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-gradient-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground shadow-gold-glow"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Une erreur est survenue</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Merci de réessayer ou de revenir plus tard.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground shadow-gold-glow"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nationale Peche SARL — Pêche & exportation en Mauritanie" },
      {
        name: "description",
        content:
          "Nationale Peche SARL, société mauritanienne spécialisée dans la pêche, le négoce et l'exportation de produits de la mer : poulpe, calamar, crevettes, mérou, courbine et espèces nobles.",
      },
      { name: "author", content: "Nationale Peche SARL" },
      { property: "og:title", content: "Nationale Peche SARL — Pêche & exportation" },
      { property: "og:description", content: "Produits de la mer mauritaniens exportés vers les marchés internationaux." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#050d1f" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoAsset.url, type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
