import { Component, inject, OnInit } from '@angular/core';

// 1. Importamos el servicio y la interfaz de datos
import { PortfolioService } from '../../services/portfolio';
import { DatosPersonales } from '../../models/datos-personales';

// 2. Importamos CommonModule para poder usar @if
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  // 3. Añadimos CommonModule a los imports
  imports: [CommonModule],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css'
})
export class SobreMiComponent implements OnInit {

  // 4. Inyectamos el servicio (la forma moderna)
  private portfolioService = inject(PortfolioService);

  // 5. Creamos una variable para guardar tus datos
  // Puede ser 'DatosPersonales' o 'undefined' (mientras carga)
  public misDatos: DatosPersonales | undefined;

  // 6. 'ngOnInit' es una función que se ejecuta
  // automáticamente cuando el componente carga
  ngOnInit(): void {

    // 7. Llamamos al método del servicio
    this.portfolioService.getDatosPersonales().subscribe({

      // 8. 'next' se ejecuta cuando los datos llegan
      next: (data) => {
        // Guardamos los datos recibidos en nuestra variable
        this.misDatos = data;
      },
      // 'error' se ejecuta si algo sale mal
      error: (err) => {
        console.error("Error al cargar los datos personales:", err);
      }
    });
  }

}