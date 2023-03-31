## LiteFlix Challenge

<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white">
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">
    <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>

# About

Se optó por la utilización de Next.js como framework para este proyecto.
El mismo nos proporciona amplias ventajas en performance por su capacidad de Server Side Rendering, optimización de imagenes, prefetch de las diferentes paginas de nuestro sitio, entre otros. También tenemos muchas ventajas en SEO que nos otorga.
Para la interacción con la API elegí axios.

En el styling, elegí Tailwindd CSS como framework de CSS. La razón fue la ventaja que este nos ofrece para otorgar al sitio un bundle sumamente reducido por minimizar el CSS y limpiando el CSS no utilizado.
También se hizo una gran utilización de sus funcionalidades de creación de design system, lo que nos permite estilar los componentes muy fácilmente sin necesidad de mucho CSS custom y utilizando solo clases pre-establecidas para tener un estilado default de los componentes.
Algo que me gusta mucho de Tailwind es su facilidad para el manejo del responsive, utilizando los breakpoints que hayamos establecido en su config.
Para la aplicación de animaciones y de algunos estilos, se optó por usar CSS modules junto con SASS. Esto nos permitió realizar mixins de las animaciones creadas con keyframes para poder reutilizarlas fácilmente a lo largo del proyecto y crear variables para evitar la reutilización de parámetros muy repetidos, CSS modules nos permite evitar el colisionamiento de clases.

Restricciones de tipos fueron aplicadas en las props de todos los componentes para mayor seguridad (PropTypes).

Orienté el desarrollo de componentes a una arquitectura más de Compound Components también conocida como Composite.
Se aplicó lo mejor posible los principios SOLID y Clean Code en el proyecto y se tuvo en cuenta la semántica del HTML para el SEO y la accesibilidad del sitio.

## Paso a paso

```bash
ATENCIÓN: Para evitar errores de compatibilidad el proyecto fue restringido, estableciendo los engines
en package.json y con un .npmrc, por lo que las únicas versiones de node y npm permitidas para instalar
las dependencias de este proyecto y levantarlo, son las posteriores a la 16 y 8 respectivamente.
En caso de no tener las mismas instaladas, recomiendo la utilización de NVM, un manejador de versiones
de node y npm que nos permitirá switchear facilmente entre las mismas.

https://github.com/nvm-sh/nvm
```

1- Clonar el proyecto
<br/>
2- Procederemos a crear un archivo .env en el root del repositorio clonado con el siguiente contenido:
(es sabido que no se deben publicar de esta manera variables de entorno de un proyecto, pero para facilitar la tarea del reviewer del mismo las dejaré acontinuación para que puedan levantar todo sin problemas):

```bash
BASE_API_URL=https://api.themoviedb.org/3/movie/
TMD_API_KEY=8dda1fb8143eef8716e8118c39a927cb
```

3- correr los siguientes comandos:

```bash
npm install

npm run dev
```

4- la terminal nos indicará el puerto de localhost donde nuestro sitio se encontrará activo, suele ser localhost:3000. Dirigirnos al mismo para poder observar el proyecto en acción.

## Deploy on Vercel

El proyecto se encuentra deployado en su ambito de producción através de Vercel.
Puede ser visitado en `https://liteflix-challenge-three.vercel.app/`.
