# Phillip Pieterse Portfolio

Personal portfolio website for **Phillip Pieterse** — logistics operations leader, software builder, and founder of [RouteFoundry Technologies](https://routefoundry.co.za).

## Positioning

The site presents the intersection of:

- national courier and logistics operations experience;
- backend and platform engineering;
- operational dashboards, APIs, automation, and workflow design;
- RouteFoundry Technologies and selected product work.

## Featured work

- RouteFoundry Technologies
- OpsTower case study
- Logistics Intelligence Platform
- Morning Operations Snapshot

## Stack

- Astro
- semantic HTML
- responsive CSS
- small progressive-enhancement JavaScript layer
- GitHub Pages deployment through GitHub Actions

## Local development

Install the pinned dependencies and start Astro's development server:

```bash
npm ci
npm run dev
```

Open the local URL printed by Astro, normally `http://localhost:4321`.

## Production validation

Build the same artifact uploaded by `.github/workflows/deploy.yml`:

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`. The GitHub Pages workflow uploads that directory, so deployable pages live under `src/pages`, shared UI under `src/components` and `src/layouts`, styles under `src/styles`, and copied static assets under `public`.

## Brand

The visual system aligns with Phillip's current GitHub profile and RouteFoundry identity:

- deep navy: `#102A43`;
- orange: `#F47A32`;
- clear, operationally focused copy;
- restrained motion and accessible interaction states.
