# Nationale Peche SARL — Site vitrine luxe moderne

Site en français, 4 pages, direction visuelle luxe océan avec effets 3D modernes.

## Direction visuelle

- **Palette** : bleu nuit profond `#050d1f` / `#0a1836`, bleu océan `#1e4d8c`, bleu clair vague `#4da6ff`, or perle `#d4b878`, blanc cassé `#f5f2ea`.
- **Typographie** : Playfair Display (titres, sérif élégant) + Inter (corps).
- **Effets 3D & motion** :
  - Hero : scène Three.js (react-three-fiber) — océan animé avec vagues shader, particules de bulles, poisson stylisé en rotation lente flottant au-dessus.
  - Cartes espèces : effet tilt 3D au survol + éclat doré.
  - Transitions douces (Motion for React) : fade + parallax scroll, révélation par section.
  - Fond parallax vagues SVG animées entre sections.
- **Ton** : premium, maritime, institutionnel — inspiré des maisons de négoce haut de gamme.

## Structure

```
src/routes/
  __root.tsx         → Header (logo + nav), Footer (contact, NIF, adresse)
  index.tsx          → Accueil (hero 3D, USP, aperçu espèces, CTA)
  a-propos.tsx       → À propos (histoire, mission, savoir-faire, chiffres clés)
  especes.tsx        → Catalogue par catégories avec filtre
  contact.tsx        → Coordonnées + formulaire (mailto)
```

## Page Accueil

- Hero plein écran : scène 3D océan + titre "Nationale Peche SARL — L'excellence de la pêche mauritanienne", sous-titre exportation internationale, 2 CTA (Découvrir nos espèces / Nous contacter).
- Section chiffres (années d'expérience, espèces, marchés).
- Aperçu 4-6 catégories phares avec images.
- Section Exportation (bandeau parallax).
- CTA contact.

## Page Espèces

Regroupement en **~14 catégories principales** avec 1 photo IA générée par catégorie + liste texte élégante des variantes/calibres :

1. **Poulpe / Pulpo** (PATA 1-4, POULPE BATTU G/P, PR1-3)
2. **Calamar** (GG, G, M, P, 2P-4P, MIX)
3. **Seiche / Choco** (G, M, P, 2P-4P, MIX)
4. **Tako** (TAKO 1-8)
5. **Crevettes / Langostino & Gamba** (L1-L7, 3X-6X, Gamba 3/4/A)
6. **Langouste & Crabe**
7. **Mérou / Cherne** (F, G, M, P, S/C)
8. **Courbine / Corvina / Corvinate**
9. **Dorade / Denton / Pargo / Sargo**
10. **Sole / Lenguado / Lengua / Peluda**
11. **Saint-Pierre / St Pietro**
12. **Maquereau / Sardine / Sardinelle / Chinchard (Jurel)**
13. **Rouget / Salmonete / Rubio / Rascasse**
14. **Divers nobles** (Sable, Raya, Rape, Congrio, Mako, Cazon, Renkodai, Tigre, Mulet, Garfish, Herrera, Boca, Brotolla, Cymbium, Potargue, Sepiola, Solla, Platija, etc.)

Chaque carte : image de catégorie + nom FR/commercial + liste des calibres disponibles + badge "Frais / Congelé / Export".

## Page À propos

Histoire de l'entreprise, mission (approvisionner les marchés internationaux depuis la côte mauritanienne), engagement qualité, chaîne du froid, traçabilité, valeurs.

## Page Contact

- Coordonnées formatées :
  - Tél/Fax : +222 45 74 09 40 / 41
  - Mobile : +222 22 06 30 81
  - Email : hafedmohamedabdallahi@gmail.com
  - NIF : 00760850
  - Adresse : Socogim lot N°111, près de l'avenue de l'aéroport, BP 1024, Nouakchott, Mauritanie
- Formulaire (nom, email, sujet, message) → ouvre client mail via `mailto:`.
- Carte statique/illustration de la Mauritanie.

## Détails techniques

- **Stack** : TanStack Start existant, React, Tailwind v4, shadcn/ui.
- **3D** : `three`, `@react-three/fiber`, `@react-three/drei` (installés via bun add).
- **Animations** : `motion` (Motion for React).
- **Polices** : `@fontsource/playfair-display`, `@fontsource/inter`.
- **Logo** : upload utilisateur → asset Lovable via `lovable-assets`.
- **Photos catégories** : 14 images IA (fast tier, format paysage) sauvegardées dans `src/assets/species/`.
- **Design tokens** : ajoutés dans `src/styles.css` (palette océan + or, gradients, ombres luxe).
- **SEO** : `head()` par route (titre, description, og:title, og:description en français).
- **Responsive** : mobile-first, hero 3D allégé sur mobile (fallback image + particules réduites).
- **Pas de backend** — site 100% vitrine statique.

## Livrables

- Header/Footer partagés dans `__root.tsx`
- 4 routes avec métadonnées SEO françaises
- Composant `OceanScene` (Three.js) réutilisable
- Composant `SpeciesCard` avec effet tilt
- 14 illustrations d'espèces générées
- Logo intégré en asset CDN
