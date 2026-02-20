# Valle Tech Landing Page

[![Deploy to GitHub Pages](https://github.com/V4lle-Tech/valle-tech-landing-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/V4lle-Tech/valle-tech-landing-page/actions/workflows/deploy.yml)

Landing page oficial de [Valle Tech](https://v4lle.tech) — consultoría en tecnología e inteligencia artificial para PyMEs en México.

## Tecnologías

![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)

## Estructura del proyecto

```
src/
├── layouts/          # Layout base (SEO, Open Graph, temas)
├── components/       # Componentes Astro (.astro) y React islands (.jsx)
├── pages/            # Rutas del sitio (file-based routing)
├── content/          # Datos en JSON (servicios, portafolio, blog)
└── styles/           # CSS global con custom properties
public/               # Archivos estáticos (favicon)
```

## Desarrollo

Requisito: [Bun](https://bun.sh)

```bash
bun install            # Instalar dependencias
bun run dev            # Servidor de desarrollo
bun run build          # Build de producción
bun run preview        # Previsualizar build
bun run check          # Verificar tipos
```

## Despliegue

El despliegue se realiza automáticamente a GitHub Pages mediante GitHub Actions en cada push a `main`.

---

> Hecho con [Astro](https://astro.build) + [Bun](https://bun.sh).
