# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for Jose Vargas (Backend Developer). No build system, no package manager — pure HTML, CSS, and vanilla JavaScript served directly from the filesystem or a static host.

## Running Locally

Open `index.html` directly in a browser, or serve with any static server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

For the contact form to work, the backend API must be running locally at `http://localhost:3002/api`. In production it points to `https://myportfolio-back-j9ji.onrender.com/api`. This detection is handled in `js/api-config.js` — if the API is unavailable, the form falls back to `localStorage`.

## Architecture

Two pages:
- **`index.html`** — the main portfolio (Hero, About, Projects, Contact sections)
- **`dashboard.html`** — admin view for contact form submissions; reads/writes via the same backend API

**JavaScript** (`js/`) uses ES6 classes organized by Single Responsibility:
- `api-config.js` — `ApiConfig` (env detection), `ApiService` (CRUD against `/api/contacts`), `StorageService` (localStorage fallback). Loaded first; exposes `window.ApiConfig`.
- `main.js` — portfolio page managers: `NavigationManager`, `SmoothScrollManager`, `FormManager`, `TypewriterEffect`, `ScrollAnimations`, all bootstrapped by `PortfolioApp`.
- `dashboard.js` — dashboard-specific logic (stats, message list, status updates).

**CSS** (`css/`) uses BEM naming (`block__element--modifier`):
- `styles.css` — global styles shared by both pages
- `dashboard.css` — dashboard-only styles, loaded in addition to `styles.css`

**External dependencies (CDN only):**
- Bootstrap Icons 1.11.3
- Google Fonts (Inter, JetBrains Mono)

## Conventions

- BEM for all CSS class names.
- Each new JS feature belongs in a dedicated class; wire it up in `PortfolioApp.initializeManagers()`.
- Certificate files live in `tittles/` (not `titles/`) — keep this path consistent with the HTML links.
- Project images go in `img/`; prefer `.jpg` for photos, `.png` for screenshots with transparency.
