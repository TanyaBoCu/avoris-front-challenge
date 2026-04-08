# Avoris Front Challenge

Esta es mi propuesta para la prueba técnica de maquetación y desarrollo front-end.

He intentado plantearla con una estructura clara, separando la parte visual de la lógica y trabajando con componentes para que el código sea más fácil de leer y mantener.

## Qué incluye

- Maquetación responsive
- Estructura modular en JavaScript
- Estilos organizados con Sass
- Datos mockeados fuera del HTML
- Filtros dinámicos
- Actualización de precios según fechas
- Carrusel en el hero
- Popover con desglose de precio
- Algunos detalles básicos de accesibilidad

## Stack

- HTML
- SCSS / Sass
- JavaScript modular
- Vite

## Estructura

El proyecto está organizado principalmente en:

- `src/data` para los datos mockeados
- `src/js/components` para los componentes
- `src/js/modules` para la lógica de comportamiento
- `src/js/utils` para utilidades
- `src/scss` para la organización de estilos

Dentro de `scss` he separado settings, tools, generic, elements, objects, components y utilities para mantener una estructura más ordenada.

## Funcionalidades principales

- Header responsive
- Hero con carrusel
- Filtros laterales adaptados a distintas resoluciones
- Tarjetas de destinos renderizadas desde datos mock
- Cálculo dinámico del precio final
- Popover con el detalle del precio
- Skip link y focus visible en elementos interactivos

## Cómo ejecutar el proyecto

Instalar dependencias:

```bash
npm install
```

Levantar entorno de desarrollo:

```bash
npm run dev
```

Generar build:

```bash
npm run build
```

Previsualizar build:

```bash
npm run preview
```

Lanzar tests:

```bash
npm run test
```

## Enfoque

He intentado que la prueba no se quedara solo en maquetación, sino también en una base de código ordenada.

Por eso he separado la parte de datos, la generación de componentes, la lógica de filtros y el cálculo de precios, para que cada parte tenga una responsabilidad más clara.

También he intentado mantener una nomenclatura consistente en estilos y una estructura lo bastante limpia como para poder escalarla sin mezclar demasiado el código.
