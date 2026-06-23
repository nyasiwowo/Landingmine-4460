# NC WEBS — Design System

## Concepto
Landing de consultoría digital. Estilo **flat ilustrado** moderno y amigable (refs verde lima: engranajes evitados, ráfagas/swooshes, blobs orgánicos, tags `</>`, cards UI). Info **corta y precisa**. Hero con título grande a la izquierda + ilustración a la derecha + nav tipo píldora.

## Multi-tema (switch en vivo)
3 paletas alternables vía `data-theme` en `<html>`, persistidas en localStorage. Botón flotante/nav.

### Tema 1 — Lime (default)
- bg: `#FBFDF4` (crema)  | surface: `#FFFFFF`
- ink: `#14271B` (verde casi negro)
- primary (lima): `#A3E635` | primary-strong: `#65A30D`
- forest (acento oscuro): `#166534`
- muted: `#5B6B5E`

### Tema 2 — Navy (NC WEBS)
- bg: `#F8FAFC` | surface: `#FFFFFF`
- ink: `#0F172A`
- primary (cerúleo): `#0284C7` | primary-strong: `#0369A1`
- accent dark: `#0F172A`
- muted: `#475569`

### Tema 3 — Purple pastel
- bg: `#FAF8FF` | surface: `#FFFFFF`
- ink: `#2E1065`
- primary (lavanda): `#A78BFA` | primary-strong: `#7C3AED`
- accent: `#6D28D9`
- muted: `#6B6480`

Cada tema cambia: ilustración del hero (hero-lime/navy/purple.png), botones, badges, blobs, ráfagas.

## Tipografía
- Display: **Sora** (bold/extrabold) para títulos grandes.
- Body: **Plus Jakarta Sans** para texto.
- Jerarquía por tamaño/peso. Line-height generoso. Nada de Inter/Roboto.

## Layout
- Container max ~1200px. Secciones con buen aire vertical.
- Nav: barra píldora flotante (rounded-full, sombra suave, blur).
- Hero asimétrico: texto izq / ilustración der.
- Cards con bordes redondeados grandes (rounded-3xl) y sombras suaves.

## Componentes
- Pill nav, botones primary (rounded-full), badge `</>`, cards de servicio con icono flat, blobs SVG de fondo, ráfagas decorativas.
- ThemeSwitch: 3 puntos de color clicables o toggle de 3 estados.

## Motion
- Carga escalonada del hero (fade + translate-y) con Motion. Sutil. Una sola orquestación.

## Secciones
1. Nav píldora (logo NC </>, links, CTA WhatsApp, ThemeSwitch)
2. Hero (título grande + subt + 2 CTAs + ilustración)
3. Servicios (grid de tarjetas, placeholders)
4. Sobre mí (avatar ilustrado + bio corta)
5. Proyectos (mosaico placeholder)
6. CTA contacto (WhatsApp/email en blanco editable)
7. Footer

## Contenido
Placeholders editables en español. WhatsApp/email en blanco.
