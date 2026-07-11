# Torty Natki

Strona internetowa cukierni tortów na zamówienie. Zbudowana w [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), hostowana na Cloudflare Pages.

## Rozwój lokalny

```bash
npm install
npm run dev
```

Strona będzie dostępna pod `http://localhost:4321`.

## Build produkcyjny

```bash
npm run build
npm run preview
```

## Wdrożenie (Cloudflare Pages)

Wdrożenie odbywa się automatycznie przy każdym pushu do `main` poprzez GitHub Actions
(`.github/workflows/deploy.yml`). Wymagane sekrety repozytorium:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Projekt Cloudflare Pages (`torty-natki`) zostanie utworzony automatycznie przy pierwszym
uruchomieniu workflow, jeśli jeszcze nie istnieje.

## Struktura

- `src/pages/` — strony: Home, Torty, O nas, Kontakt
- `src/components/` — Header, Footer, karty tortów, tabela cennika
- `src/data/cakes.ts` — dane galerii i cennika
- `public/images/torty/` — zdjęcia tortów
