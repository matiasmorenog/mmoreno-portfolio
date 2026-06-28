# Matías Moreno — Portfolio

[![CI](https://github.com/matiasmorenog/mmoreno-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/matiasmorenog/mmoreno-portfolio/actions/workflows/ci.yml)

Portfolio project built with Next.js + Material UI to showcase frontend skills, component architecture, filtering logic, testing, and CI best practices.

## Live Demo

- **Primary:** [mmoreno-portfolio.vercel.app](https://mmoreno-portfolio.vercel.app/)
- **Legacy (kept for older shared links):** [react-skill-showcase.vercel.app](https://react-skill-showcase.vercel.app/)

Both URLs deploy the same `main` branch from this repository.

## Tech Stack

- Next.js
- React 18
- Material UI (MUI)
- Vitest + Testing Library
- GitHub Actions

## Features

- Professional portfolio layout with light/dark mode
- Projects grid with advanced filtering (query, category, level, status)
- CV links (LinkedIn + PDF backup)
- Reusable components and custom hook (`useProjectFilters`)
- Automated CI: test + build on every push/PR

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Run production server
- `npm run preview` - Alias of `npm run start`
- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## CI

Workflow file:

- `.github/workflows/ci.yml`

Pipeline steps:

1. Install dependencies (`npm ci`)
2. Run tests (`npm test`)
3. Build app (`npm run build`)

## Setup

```bash
npm install
npm run dev
```

## Deployment (Vercel)

Use **two Vercel projects** connected to this same GitHub repo so both URLs stay live:

| Vercel project | URL | Purpose |
| --- | --- | --- |
| `mmoreno-portfolio` | `https://mmoreno-portfolio.vercel.app` | Canonical URL for new shares, metadata, and CV |
| `react-skill-showcase` | `https://react-skill-showcase.vercel.app` | Legacy URL for links already sent in job applications |

Steps for the new project:

1. In Vercel: **Add New → Project** → import `matiasmorenog/mmoreno-portfolio`.
2. Keep the existing `react-skill-showcase` project linked to the same repo.
3. Do **not** rename or delete the legacy project.
4. Every push to `main` deploys both projects automatically.

## Badge Setup

Badge is configured for this repository:

`https://github.com/matiasmorenog/mmoreno-portfolio/actions/workflows/ci.yml/badge.svg`
