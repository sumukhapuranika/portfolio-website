# Sumukha Puranika Portfolio

Minimal dark-mode developer portfolio built for a Software Engineer focused on data pipelines, APIs, backend systems, and data engineering opportunities.

## Tech Stack

- Astro
- React
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel

## Features

- Fast static Astro pages with partial React hydration
- Minimal dark UI with subtle grain texture and glass navigation
- Hero section with availability status and resume link
- Proof section highlighting experience, projects, certifications, and education
- Stack section aligned with Python, SQL, Flask, Pandas, SQLite, and backend tools
- Project cards for ETL/data analysis and REST API work
- Timeline for professional transition into data engineering and backend systems
- Simple connect CTA for opportunities and conversations

## Getting Started

This project uses Node `>=22.12.0`.

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:4321
```

## Scripts

```bash
npm run dev      # Start local development server
npm run build    # Create production build
npm run preview  # Preview production build locally
```

## Project Structure

```text
.
├── public/
│   ├── favicon.svg
│   └── Sumukha_Puranika_resume.pdf
├── src/
│   ├── components/
│   │   ├── Connect.tsx
│   │   ├── Hero.tsx
│   │   ├── Log.tsx
│   │   ├── Motion.tsx
│   │   ├── Nav.astro
│   │   ├── Projects.tsx
│   │   ├── Proof.tsx
│   │   └── Stack.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── resume.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

## Content

Most portfolio content lives in:

```text
src/data/portfolio.ts
```

Update this file to change profile details, skills, projects, timeline items, certifications, and education.

## Deployment

The site is ready for Vercel deployment.

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

## Author

Sumukha Puranika  
Bengaluru, India  
GitHub: [sumukhapuranika](https://github.com/sumukhapuranika)  
LinkedIn: [Sumukha Puranik](https://www.linkedin.com/in/sumukha-puranik-9bb094211)
