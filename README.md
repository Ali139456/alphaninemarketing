# AlphaNine Marketing — Next.js Website

Modern dark-theme redesign of [alphaninemarketing.com](https://alphaninemarketing.com/), built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services preview, portfolio preview, team preview |
| `/services` | Full service offerings |
| `/portfolio` | UGC + AI-generated creative gallery (images & video) |
| `/about` | Team, story, philosophy |
| `/contact` | Contact form + agency details |
| `/team` | Redirects to `/about#team` |

## Development

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Assets

All logos, team photos, portfolio images, and videos are sourced from the live site and stored in `public/images/` and `public/videos/`.
