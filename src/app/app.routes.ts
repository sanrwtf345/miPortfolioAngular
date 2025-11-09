import { Routes } from '@angular/router';

// 1. Importamos los componentes con los nombres correctos (sin .component)
import { HomeComponent } from './components/home/home'; 
import { SobreMiComponent } from './components/sobre-mi/sobre-mi';
import { MisProyectosComponent } from './components/mis-proyectos/mis-proyectos';
import { ContactoComponent } from './components/contacto/contacto';

// 2. Definimos el array de rutas (esto no cambia)
export const routes: Routes = [
  { 
    path: 'inicio', 
    component: HomeComponent 
  },
  { 
    path: 'sobremi', 
    component: SobreMiComponent 
  },
  { 
    path: 'misproyectos', 
    component: MisProyectosComponent 
  },
  { 
    path: 'contacto', 
    component: ContactoComponent 
  },
  
  // Redirecciones
  { 
    path: '', 
    redirectTo: '/inicio', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: '/inicio' 
  }
];