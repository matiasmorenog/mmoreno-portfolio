# Next Skill Showcase

[![CI](https://github.com/matiasmorenog/mmoreno-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/matiasmorenog/mmoreno-portfolio/actions/workflows/ci.yml)

Portfolio project built with Next.js + Material UI to showcase frontend skills, component architecture, filtering logic, testing, and CI best practices.

## Live Demo

[Open Portfolio](https://react-skill-showcase.vercel.app/)

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

## Badge Setup

Badge is configured for this repository:

`https://github.com/matiasmorenog/mmoreno-portfolio/actions/workflows/ci.yml/badge.svg`
