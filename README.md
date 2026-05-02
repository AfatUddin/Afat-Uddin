# Afat Uddin — Portfolio

Premium personal site for **Afat Uddin**, Generative AI Engineer.
Stack: **Vite + React 18 + TypeScript + Tailwind CSS + Framer Motion + react-router**.

## Requirements

- **Node.js ≥ 18** (Vite 5 + TS 5 require this). System Node 12 will fail.
- Recommended: install via [`nvm`](https://github.com/nvm-sh/nvm) — `nvm install 20 && nvm use 20`.

## Local dev

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

```bash
vercel --prod
```

The bundled `vercel.json` already handles SPA rewrites and long-lived cache headers for static assets.

## Replace placeholders

- `public/profile.jpg` — profile photo
- `public/Afat_Uddin_CV.pdf` — resume download
- `public/projects/<slug>/*.png` — case-study screenshots
- Update social links in `src/data/profile.ts`
- Update domain in `index.html` (canonical, og:url) and `public/sitemap.xml`
# Afat-Uddin
# Afat-Uddin
# Afat-Uddin
