import { Component } from '@angular/core';
// Importa RouterLink y RouterLinkActive
import { RouterLink, RouterLinkActive } from '@angular/router'; 

@Component({
  selector: 'app-header',
  standalone: true,
  // Añade ambos al array de imports
  imports: [RouterLink, RouterLinkActive], 
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

}
