# Portfolio (React + Vite)

A fast, single-page portfolio with standalone project detail pages.
Frontend · UI/UX · Documentation sections, color-coded by craft.

## Run it locally (in VS Code)

You need [Node.js](https://nodejs.org) 18+ installed. Then, in the project folder:

```bash
npm install      # one-time: installs dependencies
npm run dev      # starts the dev server (hot reload)
```

Open the URL it prints (usually http://localhost:5173).
`Ctrl + C` stops the server.

## Edit your content

Almost everything lives in **`src/data/projects.js`** — one entry per project
(title, description, tags, color palette, fonts, link, screenshot). Cards and
the detail pages both read from it, so you only edit in one place.

Other text:
- Name / hero pitch / location → `src/components/Hero.jsx` and `Nav.jsx`
- Writing & docs list → `src/components/Docs.jsx`
- Bio & tech stack → `src/components/About.jsx`
- Email & social links → `src/components/Contact.jsx`
- Colors & fonts (global) → `src/index.css` (`:root` design tokens)

Search the code for `EDIT` to jump to the spots that need your info.

## Add screenshots / photos

1. Put images in **`public/images/`** (e.g. `public/images/helix.png`).
2. In `src/data/projects.js`, set that project's `image: '/images/helix.png'`.
   It replaces the colored placeholder on the card and the detail page.
3. For an about photo, drop one in `public/images/` and uncomment the
   `<img className="about-photo" ... />` line in `src/components/About.jsx`.

Recommended: ~1600×900 (16:9), under ~300 KB each.

## Build & deploy

```bash
npm run build    # outputs a static site to /dist
```

Upload the **`dist`** folder to any static host:
- **Netlify:** drag `dist` onto https://app.netlify.com/drop
- **Vercel / GitHub Pages:** point them at this repo (build command
  `npm run build`, output `dist`).

Routing uses `HashRouter`, so deep links like `/#/project/helix` work on any
host with no extra config. (Prefer clean URLs? Switch to `BrowserRouter` in
`src/main.jsx` and add an SPA redirect on your host.)

## Project structure

```
src/
  data/projects.js        ← all project content (edit here)
  components/             ← Nav, Hero, Capabilities, ProjectCard, etc.
  pages/Home.jsx          ← the one-page site
  pages/ProjectDetail.jsx ← the standalone project page (/project/:id)
  hooks/useReveal.js      ← scroll-in animation
  index.css              ← design tokens + all styles
public/images/           ← your screenshots & photos
```
