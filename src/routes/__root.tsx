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
import logoUrl from "../assets/National_logo.png";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider, useI18n } from "../lib/i18n/context";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const NAV = [
    { to: "/", label: t.nav.home },
    { to: "/a-propos", label: t.nav.about },
    { to: "/especes", label: t.nav.species },
    { to: "/qualite", label: t.nav.quality },
    { to: "/contact", label: t.nav.contact },
  ] as const;
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoUrl}
            alt="Nationale Peche SARL"
            width={48}
            height={48}
            className="h-12 w-12 object-contain drop-shadow-[0_0_16px_rgba(77,166,255,0.35)]"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg text-foreground">
              {t.nav.brandName}
            </div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
              {t.nav.brandTag}
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <nav className="flex items-center gap-1">
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
          </nav>
          <LanguageSwitcher className="ml-2 border-l border-border/60 pl-4" />
        </div>

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
          <div className="border-t border-border/50 px-4 py-3">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-32 border-t border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="" width={44} height={44} className="h-11 w-11 object-contain" />
            <div>
              <div className="font-display text-xl">Nationale Peche SARL</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold">
                Pêche · Négoce · Exportation
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {t.footer.description}
          </p>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
            {t.footer.contactTitle}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{t.footer.phoneFaxLabel} : +222 45 74 09 40 / 41</li>
            <li>{t.footer.mobileLabel} : +222 22 06 30 81</li>
            <li>
              <a href="mailto:hafedmohamedabdallahi@gmail.com" className="hover:text-gold">
                hafedmohamedabdallahi@gmail.com
              </a>
            </li>
            <li>{t.footer.nifLabel} : 00760850</li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
            {t.footer.addressTitle}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {t.footer.addressLine1}<br />
            {t.footer.addressLine2}<br />
            {t.footer.addressLine3}<br />
            {t.footer.addressLine4}
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Nationale Peche SARL. {t.footer.rights}</span>
          <span className="uppercase tracking-[0.24em] text-gold/80">{t.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  const { t } = useI18n();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient-gold">{t.notFound.title}</h1>
        <h2 className="mt-4 font-display text-2xl">{t.notFound.subtitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.notFound.text}
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-gradient-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground shadow-gold-glow"
        >
          {t.notFound.cta}
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const { t } = useI18n();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">{t.errorPage.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t.errorPage.text}
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground shadow-gold-glow"
          >
            {t.errorPage.retry}
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
          >
            {t.errorPage.home}
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
      { rel: "icon", href: logoUrl, type: "image/png" },
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
        <I18nProvider>{children}</I18nProvider>
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
