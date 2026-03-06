# GymRol Web Promocional

Este proyecto es una landing page promocional para el juego móvil "GymRol", desarrollada con React, Vite, Tailwind CSS y Bun.

## Características

- **Diseño Responsive Mobile-First**: Optimizado para dispositivos móviles, tablets y escritorio.
- **Componentes**: Header, Hero, Cómo Jugar, Características, Galería, Requisitos, CTA, Footer.
- **Elementos Flotantes**:
  - Banner Sticky de Google Ads (solo móvil).
  - Side Panel Flotante con oferta (solo escritorio, aparece al hacer scroll, controlado por cookies).
- **Optimizaciones**:
  - SEO Meta Tags (React Helmet Async).
  - Open Graph Tags para redes sociales.
  - Analytics Tracking (simulado en consola y listo para GTM).
  - Imágenes optimizadas con Lazy Loading.
  - Animaciones fluidas con Framer Motion.

## Requisitos Previos

- [Bun](https://bun.sh/) (v1.0.0 o superior)
- Node.js (opcional, pero recomendado para compatibilidad)

## Instalación

1. Clona el repositorio (si no lo has hecho ya).
2. Instala las dependencias con Bun:

```bash
bun install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
bun run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Construcción (Build)

Para generar la versión de producción:

```bash
bun run build
```

Los archivos estáticos se generarán en la carpeta `dist`.

## Estructura del Proyecto

- `src/components`: Componentes reutilizables (Header, Hero, etc.).
- `src/utils`: Utilidades (Analytics).
- `src/App.tsx`: Componente principal y configuración de SEO.
- `tailwind.config.js`: Configuración de estilos.

## Testing y Validación

- **Responsive**: Probado con breakpoints de Tailwind (sm: 640px, md: 768px, lg: 1024px).
- **Performance**: Imágenes con `loading="lazy"`.
- **Tracking**: Los botones de descarga incluyen parámetros UTM (`utm_source`, `utm_medium`).
