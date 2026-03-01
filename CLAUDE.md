# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at http://localhost:3000
npm run build    # Production build → /build
npm test         # Run tests
```

No linting beyond CRA's default ESLint config (`extends: react-app`).

## Architecture

Single-page React portfolio (Create React App) with Tailwind CSS for styling.

**Key files:**
- `src/things.js` — All content data (experiences, skills, projects, facts). Update this to change site content.
- `src/LandingPage.js` — Main page layout; renders all sections using data from `things.js`.
- `src/App.js` — Root component wrapping `LandingPage` and `P5Sketch`.
- `src/P5Sketch.js` — p5.js interactive photo gallery overlay; triggered by clicking the "Life" experience card, dismissed by double-click.
- `src/index.js` — Initializes `cursor-effects` trailing cursor on mount.

**Component structure:** `Job.js`, `Project.js`, `Fact.js` are card components rendered from arrays in `things.js`. `GitHubCal.js` wraps `react-github-calendar`. `Contact.js` handles links and resume download.

## Styling

- Tailwind utility classes throughout, plus custom CSS in `src/App.css` (hover effects, cursor, button animations).
- Custom theme in `tailwind.config.js`: colors `base` (#FEF1E5), `lightGray` (#F2F2F2), `yellow` (#FFD301); custom breakpoint `card-bp` at 1327px.
- `cursor: none` is set globally — the trailing cursor effect replaces the native cursor.

## Static Assets

- `src/assets/photos/` — 11 JPG images cycled through in the p5 gallery.
- `src/assets/pvr_resume.pdf` / `pvr_resume-24.pdf` — Resume PDFs linked in `Contact.js`.
- `public/index.html` — Includes Plausible.io analytics for `perryvon.dev` and OG tags using `sky.png`.
