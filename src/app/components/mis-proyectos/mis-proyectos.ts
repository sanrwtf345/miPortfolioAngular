import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';

// 1. Importamos el servicio y la interfaz
import { PortfolioService } from '../../services/portfolio'; // (o .portfolio.service)
import { Proyecto } from '../../models/proyecto'; // Importamos la interfaz del Proyecto

// 2. Importamos CommonModule para poder usar @for y @if
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-proyectos',
  standalone: true,
  // 3. Añadimos CommonModule
  imports: [CommonModule],
  templateUrl: './mis-proyectos.html',
  styleUrl: './mis-proyectos.css'
})
export class MisProyectosComponent implements OnInit {

  // 4. Inyectamos las herramientas
  private portfolioService = inject(PortfolioService);
  private cdr = inject(ChangeDetectorRef);

  // 5. Creamos un array vacío para guardar los proyectos
  public misProyectos: Proyecto[] = []; // Es un array, no un objeto

  ngOnInit(): void {

    // 6. Llamamos al método getProyectos()
    this.portfolioService.getProyectos().subscribe({

      next: (data) => {
        // Guardamos el array de proyectos
        this.misProyectos = data;

        // 7. Avisamos a Angular que los datos llegaron
        this.cdr.markForCheck(); 
      },
      error: (err) => {
        console.error("Error al cargar los proyectos:", err);
        this.cdr.markForCheck(); 
      }
    });
  }
}