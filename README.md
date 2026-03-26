<div align="center">
  <img src="./public/favicon.svg" alt="PlainPage" width="100" />
</div>

# PlainPage

A fast, text-focused, minimalist blog.

[English](./README.md) | [中文](./README.zh-CN.md)

## Live Demo

- [Github Pages Demo](https://churchtao.github.io/PlainPage/)

## Features

- 🚀 Fast: 100% static, no server-side rendering
- 📖 Simple: Just markdown files
- 🌈 Customizable: Customize the theme and layout
- 📚 SEO-friendly: Support for SEO
- 📱 Responsive: Support for mobile devices
- 📦 Based on [astro](https://astro.build) version latest

## ✅ Lighthouse Score

[![lighthouse](/screenshots/lighthouse-score.svg)](https://pagespeed.web.dev/analysis/https-churchtao-github-io-PlainPage/e1mpmv9swy?form_factor=desktop)

## Screenshots

![light](/screenshots/light.png)
![dark](/screenshots/dark.png)

## 🚀 Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── consts.ts
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

All configuration is in `src/consts.ts`.

```ts
// src/consts.ts

// site config
export const SITE_TITLE = "PlainPage";
export const SITE_DESCRIPTION = "Welcome (. ❛ ᴗ ❛.)";
export const COPYRIGHT = "© 2024 PlainPage All Rights Reserved";
export const ICP_NUMBER = "";

// social links, empty or commented out = not displayed
export const SOCIAL_LINKS = {
  Github: "https://github.com/churchTao",
  Twitter: "https://twitter.com/yourusername",
  //   LinkedIn: "https://www.linkedin.com/in/yourusername",
  //   Instagram: "https://www.instagram.com/yourusername",
  //   Facebook: "https://www.facebook.com/yourusername",
  //   YouTube: "https://www.youtube.com/yourusername",
};

// SEO related
export const SEO_CONFIG = {
  ogImage: "/hero-img.png", // default social media share image
  keywords: "blog, tech, programming", // default keywords
};

// navigation config
export const NAV_ITEMS = [
  { text: "Home", link: "/" },
  { text: "Blog", link: "/blog" },
  { text: "Tags", link: "/tags" },
  { text: "About", link: "/about" },
];

// blog config
export const BLOG_CONFIG = {
  locale: "en-us", // date format language
  authorName: "Author Name", // author name
  email: "mailto:ebiagioli@utec.edu.pe",
  tags: {
    title: "Tags", // tags page title
    description: "All the tags used in posts.", // tags page description
  },
};
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Guía rápida para editar contenido (Español)

Esta sección explica dónde editar cada página del sitio y cómo agregar contenido nuevo.

### Estructura base

- Páginas principales: `src/pages/`
- Contenido de proyectos (Markdown/MDX): `src/content/proyectos/`
- Datos de alumnos para Hall de la fama: `src/content/alumnos.json`
- Configuración de colecciones: `src/content.config.ts`

### 1) Inicio

- Archivo: `src/pages/index.astro`
- Aquí puedes cambiar el texto de bienvenida, descripción del curso y listas.

### 2) Sobre el curso

- Archivo principal en navegación: `src/pages/about.astro`
- Este archivo actualmente muestra el componente `GradeCalculator`.
- Si quieres texto normal en vez de calculadora, reemplaza `<GradeCalculator />` por contenido HTML/Markdown en Astro.

### 3) Proyectos

- Listado de proyectos: `src/pages/proyectos/index.astro`
- Detalle de cada proyecto: `src/pages/proyectos/[...slug].astro`
- Contenido de cada proyecto: archivos `.md` o `.mdx` en `src/content/proyectos/`

Para agregar un proyecto nuevo:

1. Crea un archivo, por ejemplo `src/content/proyectos/mi-proyecto.md`.
2. Agrega frontmatter obligatorio:

```md
---
title: "Nombre del proyecto"
periodo: "2026-1"
integrantes:
  - "Nombre 1"
  - "Nombre 2"
hide: false
---

Descripción del proyecto...
```

Campos válidos definidos en `src/content.config.ts`:

- `title` (string, obligatorio)
- `periodo` (string, obligatorio)
- `integrantes` (array de strings, obligatorio)
- `imagen` (string, opcional)
- `hide` (boolean, opcional)

### 4) Hall de la fama

- Archivo de la página: `src/pages/hall/index.astro`
- El Hall mezcla dos fuentes:
  - Proyectos desde `src/content/proyectos/`
  - Alumnos desde `src/content/alumnos.json`

Para agregar un alumno nuevo, edita `src/content/alumnos.json`:

```json
{
  "nombre": "Nombre Apellido",
  "periodo": "2026-1",
  "orden_merito": "primero"
}
```

### 5) Recursos

- Archivo: `src/pages/recursos.astro`
- Aquí editas:
  - Tabla de lecturas recomendadas por semana
  - Lista de libros recomendados

### 6) Cronograma

- Página principal: `src/pages/cronograma.astro`
- Eventos por semana: `src/content/events.js`
- Tabla de semanas (componente): `src/components/WeekTable.astro`

Para cambiar fechas/eventos, edita `eventosPorSemana` en `src/content/events.js`.

### 7) Equipo

- Archivo: `src/pages/equipo.astro`
- Aquí puedes agregar o editar docentes/TAs, correos, oficina y enlaces.

## Flujo recomendado al editar contenido

1. Inicia desarrollo local:

```bash
npm run dev
```

2. Edita los archivos correspondientes.
3. Verifica build de producción:

```bash
npm run build
```

4. Si todo está bien, commit + push para desplegar en GitHub Pages.

## Deploy to GitHub Pages

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

1. Push your changes to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Wait for the workflow in `.github/workflows/deploy.yml` to finish.

Your site will be published at:

- `https://munay-k.github.io/CS4016_web_page/`

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

Inspired by [satnaing/astro-paper](https://github.com/satnaing/astro-paper).

Based on [astro](https://astro.build).

## Sites using this theme

- [毛桃的小世界](https://毛桃.top)
- [Mobai's Blog](https://blog.loliowo.com)

👏 You can submit your site to the list by creating a PR.

## 📜 License

Licensed under the [MIT](./LICENSE) License, Copyright © 2024
