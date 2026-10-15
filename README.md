# White House, Raopura

Concept website and pitch material for White House, a wedding and festive menswear store near Raopura Tower, Vadodara. Prepared by Riyaz Designs.

## What is here

| Path | Contents |
| --- | --- |
| `white-house-web/` | The landing page: Next.js 16, Tailwind 4, Framer Motion, GSAP |
| `white-house-web/public/images/IMAGE-PROMPTS.md` | Image specs used to generate the site photography |
| `research/` | User research: personas, Gujarat mental models, pain points |
| `proposal/` | Client proposal with three priced options |
| `*.docx`, screenshots | Original pitch plan, pain-point research and design references |

## Run locally

```bash
cd white-house-web
npm install
npm run dev
```

After adding or renaming images in `public/images`, run `npm run images` to refresh the image list.

## Deploy

Netlify reads `netlify.toml`: it builds `white-house-web` as a static export (`STATIC_EXPORT=1`) and publishes `out/`.

The site is marked `noindex` because prices, reviews and some store details are placeholders. Remove the `robots` entry in `src/app/layout.tsx` once the client confirms the content.
