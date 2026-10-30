# LocalBiz Astro Core

A personal, reusable foundation for building fast, accessible, and customizable websites for local businesses.

Built with **Astro, TypeScript, and native CSS**.

## Overview

LocalBiz Astro Core is my central development foundation for creating websites for local businesses, including gyms, spas, restaurants, barbershops, and other service providers.

The architecture focuses on:

- Reusing components, layouts, and configurations.
- Reducing development time.
- Maintaining strong performance and accessibility.
- Supporting independent client projects.
- Continuously improving the core through real-world development.

Each derived project can evolve independently while incorporating selected improvements from the core.

## Tech Stack

- Astro
- TypeScript
- Native CSS and design tokens
- Git and GitHub

## Features

- Static site generation
- Strict TypeScript configuration
- Reusable layouts and components
- Responsive Header and Footer
- Configurable Hero section
- Centralized business information
- Customizable design tokens
- Native Astro image optimization
- SEO and Open Graph metadata
- Conditional sitemap generation
- Configurable search engine indexing
- Accessible navigation and skip link
- Custom 404 page

## Getting Started

### Requirements

- A compatible Node.js LTS version (Node.js 24 recommended)
- npm

### Installation

```bash
git clone https://github.com/jesusalexisvzla/localbiz-astro-core.git
cd localbiz-astro-core
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:4321/`.

### Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Generate the production build |
| `npm run preview` | Preview the production build |
| `npm run check` | Validate Astro and TypeScript |

## Architecture

```text
src/
├── assets/
│   └── images/
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   └── SEO.astro
├── config/
│   ├── site.ts
│   └── navigation.ts
├── data/
│   └── home.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── 404.astro
│   └── robots.txt.ts
├── styles/
│   ├── tokens.css
│   └── global.css
├── types/
└── utils/
```

### Architecture Principles

**Components:** Reusable presentation elements that receive content through typed properties.

**Layouts:** Shared HTML structure and page-level configuration.

**Config:** Business identity, contact information, navigation, and global settings.

**Data:** Page-specific content independent of presentation.

**Styles:** Native CSS, centralized design tokens, and component-scoped styles.

**Pages:** File-based routing and page composition.

## Customization

### Business Information

Update `src/config/site.ts` to configure the business name, description, language, contact details, and social media links.

### Navigation

Update `src/config/navigation.ts` to configure navigation links.

### Homepage Content

Update `src/data/home.ts` to customize Hero content and its optional image.

### Visual Identity

Update `src/styles/tokens.css` to customize colors, typography, spacing, border radii, and layout dimensions.

### Images

Store local images in `src/assets/images/`.

Import images into page data and use Astro's native image optimization capabilities.

## SEO Configuration

Indexing is disabled by default to prevent generic or unfinished demonstrations from being indexed.

Environment variables:

```dotenv
SITE_URL=
SITE_INDEXABLE=false
```

Before publishing a production website:

1. Configure its verified HTTPS domain.
2. Replace all placeholder content.
3. Verify metadata, navigation, and contact information.
4. Enable indexing when the site is ready.
5. Confirm the sitemap, canonical URLs, and robots directives.

## Quality Assurance

Before delivering a website:

- Run `npm run check` and `npm run build`.
- Test mobile and desktop layouts.
- Verify navigation and interactive elements.
- Check accessibility and keyboard navigation.
- Validate SEO metadata.
- Review images and alternative text.
- Run Lighthouse audits.

### Core Audit

| Category | Mobile | Desktop |
|---|---:|---:|
| Performance | 100 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 63 | 63 |

The SEO score reflects, at least in part, the intentional `noindex` configuration of the generic core. Production websites require independent SEO validation.

These measurements represent the initial core implementation and do not guarantee identical results for derived websites.

## Development Strategy

The core serves as the starting point for independent repositories.

Reusable improvements are incorporated into the central core and selectively applied to existing projects when appropriate.

Sector-specific templates and individual client websites are maintained separately.

## Roadmap

- [x] Core architecture
- [x] Reusable components
- [x] Design system
- [x] SEO foundations
- [x] Image optimization
- [x] Initial accessibility and performance audit
- [ ] GitHub Template validation
- [ ] First sector-specific website
- [ ] First commercial implementation

## Author

Developed and maintained by [jesusalexisvzla](https://github.com/jesusalexisvzla).

## Copyright

Copyright © 2026. All rights reserved.

No open-source license is granted for this repository at this time.
