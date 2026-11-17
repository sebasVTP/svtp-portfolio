# Portafolio de Sebastián Torreblanca

Portafolio personal desarrollado con Angular 21 y componentes standalone, sin dependencias UI externas.

## Ejecutar el proyecto

Instala las dependencias con `npm ci` y ejecuta `npm start`. Abre la dirección que muestre Angular (normalmente http://localhost:4200).

- `npm run build`: genera la versión de producción en `dist/mi-portafolio`.
- `npm test -- --watch=false`: ejecuta las pruebas una vez.

## Organización del frontend

`src/app/app.ts` y `app.html` componen la página y pasan el contenido a las secciones mediante inputs tipados.

`src/app/models/portfolio.models.ts` define los contratos TypeScript de navegación, habilidades, proyectos y contactos.

`src/app/data/portfolio.data.ts` contiene los arreglos editables. Los datos son locales; no se necesita un servicio para obtenerlos.

`src/app/layout/` contiene el navbar y el footer. El navbar administra su propio estado de menú móvil.

`src/app/sections/` contiene Inicio (hero), Sobre mí (about), Habilidades (skills), Proyectos (projects) y Contacto (contact).

`src/app/components/` contiene la tarjeta de proyecto y la ilustración conceptual de tráfico. Cada tarjeta recibe su proyecto mediante un input y conserva su ilustración aunque reordenes la lista.

Cada componente tiene sus archivos TypeScript, HTML y CSS. `src/styles.css` conserva únicamente el tema, la base y las clases compartidas (contenedores, encabezados, etiquetas y accesibilidad).

## Personalizar

Edita proyectos, habilidades, enlaces y navegación en `src/app/data/portfolio.data.ts`. Reemplaza los contactos y proyectos de ejemplo antes de publicar; marca `example: false` cuando los datos sean reales. La propiedad opcional `url` habilita el enlace de un proyecto y `artwork` selecciona su ilustración (`traffic`, `board` o `data`).

El texto de presentación está en `sections/hero/hero.html`, la biografía en `sections/about/about.html` y el nombre del pie en `layout/footer/footer.html`. Los metadatos están en `src/index.html`.
