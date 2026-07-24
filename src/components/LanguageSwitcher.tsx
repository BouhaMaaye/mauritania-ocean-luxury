import { useI18n } from "@/lib/i18n/context";
import { LOCALES, LOCALE_LABELS } from "@/lib/i18n/translations";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useI18n();
  return (
    <div className={`flex items-center gap-1 ${className}`} role="group" aria-label="Language">
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1 text-border">·</span>}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-current={locale === l}
            className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
              locale === l ? "text-gold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {LOCALE_LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
