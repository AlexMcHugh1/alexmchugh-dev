# alexmchugh.dev

Personal portfolio — DevSecOps / cybersecurity.

## Stack

- Next.js 14 (App Router) with static export (`output: 'export'`)
- TypeScript
- Tailwind CSS
- Deployed as static files behind nginx (containerised)

## Local dev

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # emits /out for static hosting
```

## Container

```bash
docker build -t alexmchugh-dev .
docker run --rm -p 8080:80 alexmchugh-dev
# http://localhost:8080
```

## Placeholders to fill in

Search the repo for these tokens and replace with real values:

- `/cv.pdf` — drop the CV into `public/cv.pdf`
- `ARTICLE_TITLE` and `ARTICLE_URL` in `components/Articles.tsx`
- `#LINKEDIN_URL` in `components/CV.tsx` and `components/Footer.tsx`
- `CONTACT_EMAIL` in `components/Footer.tsx`
