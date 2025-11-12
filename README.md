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
<img width="1919" height="950" alt="Captura de pantalla 2025-11-11 195202" src="https://github.com/user-attachments/assets/17527919-0e30-40e0-9c0e-23bfd2804d10" />
<img width="1919" height="949" alt="Captura de pantalla 2025-11-11 195214" src="https://github.com/user-attachments/assets/190aa8be-e856-40f7-8266-249b613a8e3f" />
<img width="1917" height="952" alt="Captura de pantalla 2025-11-11 195224" src="https://github.com/user-attachments/assets/c94f8e23-5f5f-40a6-96ba-963e0ff773ad" />
<img width="1917" height="944" alt="Captura de pantalla 2025-11-11 195237" src="https://github.com/user-attachments/assets/ca894997-eb65-42ba-ae06-f53cf33d93e3" />


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
