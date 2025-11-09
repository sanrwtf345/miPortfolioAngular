import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. Importamos los componentes del layout (con las rutas corregidas)
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Añadimos los componentes y RouterOutlet al array 'imports'
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent
  ],
  templateUrl: './app.html', // <-- Usando .html
  styleUrl: './app.css'    // <-- Usando .css
})
export class AppComponent {
  title = 'mi-portfolio';
}
