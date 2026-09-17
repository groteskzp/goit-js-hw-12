# goit-js-hw-12

Image search gallery for GoIT JavaScript Homework 12. The app searches [Pixabay](https://pixabay.com/) for photos, shows results in a gallery, opens a lightbox, and loads extra pages on demand.

## Live demo

[https://groteskzp.github.io/goit-js-hw-12/](https://groteskzp.github.io/goit-js-hw-12/)

## Features

- Search form for Pixabay photo queries
- Whitespace-only queries are rejected with an iziToast warning
- Axios requests to the Pixabay REST API (`photo` type, horizontal orientation, SafeSearch, 15 images per page)
- Gallery cards with likes, views, comments, and downloads
- SimpleLightbox on gallery images, using `alt` captions and a 250 ms caption delay
- Three-dot loader shown while a request is in progress
- **Load more** pagination; the button is hidden during loading and when there are no further pages
- After each extra page, the view scrolls smoothly by two card heights
- iziToast messages for no matching images, request errors, and the end of search results
- A new search clears the gallery, resets the page, and hides the Load more button
- The search form is reset after a submit cycle

## Tech stack

- HTML, CSS, vanilla JavaScript (ES modules)
- [Vite](https://vite.dev/) 8
- [Axios](https://axios-http.com/)
- [iziToast](https://izitoast.marcelodolza.com/)
- [SimpleLightbox](https://simplelightbox.com/)
- [Pixabay API](https://pixabay.com/api/docs/)
- GitHub Pages (GitHub Actions deploy from `main`)

## Getting started

Requirements: [Node.js](https://nodejs.org/) LTS.

```bash
git clone https://github.com/groteskzp/goit-js-hw-12.git
cd goit-js-hw-12
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173). The page reloads when you save files.

## Scripts


|| Script | Command | Description |
|| --- | --- | --- |
|| Dev server | `npm run dev` | Start Vite in development mode |
|| Production build | `npm run build` | Build to `dist/` with base `/goit-js-hw-12/` |
|| Preview build | `npm run preview` | Serve the production build locally |
