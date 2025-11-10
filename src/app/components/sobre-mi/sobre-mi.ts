import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core'; // <-- 1. IMPORTAR ChangeDetectorRef

import { PortfolioService } from '../../services/portfolio'; // (O .portfolio.service)
import { DatosPersonales } from '../../models/datos-personales';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css'
})
export class SobreMiComponent implements OnInit {

  private portfolioService = inject(PortfolioService);

  // --- 2. INYECTAR EL DETECTOR DE CAMBIOS ---
  private cdr = inject(ChangeDetectorRef);

  public misDatos: DatosPersonales | undefined;

  ngOnInit(): void {
    this.portfolioService.getDatosPersonales().subscribe({

      next: (data) => {
        this.misDatos = data;

        // --- 3. AVISAR A ANGULAR QUE LOS DATOS LLEGARON ---
        this.cdr.markForCheck(); 
      },
      error: (err) => {
        console.error("Error al cargar los datos personales:", err);

        // También es bueno avisarle si hay un error
        this.cdr.markForCheck(); 
      }
    });
  }

}