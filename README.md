Portfolio Personal con Angular 

Este es un proyecto de portfolio web desarrollado como una Aplicación de Una Sola Página utilizando el framework Angular. El sitio muestra mi información personal, mis habilidades técnicas y un listado de proyectos que he realizado.

La aplicación sigue las prácticas modernas de Angular, utilizando componentes standalone, un servicio centralizado para la gestión de datos y carga la información de manera asíncrona desde archivos JSON locales, simulando una llamada a una API.

Tecnologías Utilizadas

Angular (v17+): Framework principal para la construcción de la SPA.

TypeScript: Lenguaje principal para toda la lógica de la aplicación.

Componentes Standalone: Arquitectura moderna de Angular para componentes desacoplados.

Angular Router: Para la navegación entre las distintas secciones del sitio.

Angular Reactive Forms: Para la validación y gestión del formulario de contacto.

HttpClient: Para consumir datos de archivos JSON locales.

Bootstrap 5: Para el diseño responsive y la estilización de componentes (Nav, Cards, Carrusel).

Variables de Entorno (Environments): Para gestionar las URLs de los JSON.

WCAG/ARIA: Pautas de accesibilidad implementadas en todo el sitio para la navegación semántica.

Capturas de Pantalla





Instrucciones para Ejecutar el Proyecto

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

Prerrequisitos

Asegúrate de tener instalado Node.js (que incluye npm) y el Angular CLI de forma global.

# Instalar Angular CLI (si no lo tienes)
npm install -g @angular/cli


Pasos

Clonar el Repositorio

git clone https://github.com/sanrwtf345/miPortfolioAngular.git


Navegar a la Carpeta del Proyecto

cd miPortfolioAngular


Instalar Dependencias
Este comando leerá el archivo package.json e instalará todas las librerías necesarias (Angular, Bootstrap, etc.).

npm install


Ejecutar el Servidor de Desarrollo
Este comando compila la aplicación y la levanta en un servidor local.

ng serve -o


La opción -o (o --open) abrirá automáticamente tu navegador en http://localhost:4200/.
