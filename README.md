# Avoris Front Challenge

Prueba técnica de maquetación y desarrollo front-end realizada con una estructura modular y orientada a componentes.

## Descripción

Este proyecto reproduce una landing de viajes con foco en:

- maquetación responsive
- estructura ordenada y mantenible
- separación de componentes
- datos mockeados fuera del HTML
- estilos organizados con Sass
- pequeñas interacciones y lógica en JavaScript

La implementación se ha planteado con una arquitectura clara para facilitar la escalabilidad y el mantenimiento del código.

## Funcionalidades implementadas

- Header responsive con navegación adaptada a distintos tamaños de pantalla
- Hero principal con carrusel, navegación anterior/siguiente y dots
- Bloque de filtros lateral responsive
- Filtros dinámicos por:
  - destino
  - tipo de aventura
  - alojamiento
  - precio mínimo y máximo
- Actualización dinámica del precio según rango de fechas seleccionado
- Cards de destinos renderizadas desde datos mockeados
- Popover de desglose de precio con cálculo de base, IVA y total
- Estructura separada por componentes, módulos y utilidades
- Mejoras básicas de accesibilidad:
  - skip link
  - foco visible
  - controles interactivos accesibles

## Stack usado

- HTML
- Sass (SCSS)
- JavaScript modular
- Vite

## Estructura del proyecto

src

├─ data

├─ js

│  ├─ components

│  ├─ modules

│  └─ utils

├─ scss

│  ├─ settings

│  ├─ tools

│  ├─ generic

│  ├─ elements

│  ├─ objects

│  ├─ components

│  └─ utilities

├─ main.js

## Cómo ejecutar el proyecto

- Instalar dependencias:
npm install

- Levantar entorno de desarrollo:
npm run dev

- Generar build de producción:
npm run build

- Previsualizar build:
npm run preview

## Decisiones de Implementación

- *Componentes Modulares:* Cada sección de la UI (carrusel, filtros, cards) se implementó como un componente independiente en la carpeta js/components, lo que facilita el mantenimiento y la reutilización.

- *Filtros Dinámicos:* Se desarrolló una lógica de filtrado en tiempo real. Los destinos se actualizan según criterios (precio, fechas, categorías) sin necesidad de recargar la página.

- *Accesibilidad:* Se incluyeron mejoras de accesibilidad como skip links, manejo de focus, y atributos ARIA, para asegurar una experiencia inclusiva.

- *Popover de Precios:* Se implementó un popover interactivo que muestra el desglose de precios. Funciona tanto en escritorio como en móvil.

- *Carrusel Interactivo:* El carrusel del hero se controla con botones y dots, haciendo la experiencia más atractiva.

Para ver el proyecto, seguir las instrucciones de ejecución.