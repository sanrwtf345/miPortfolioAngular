import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. Importamos todo lo necesario para Reactive Forms
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

// 2. Importamos el servicio y la interfaz (para los links)
import { PortfolioService } from '../../services/portfolio'; // o .service
import { DatosPersonales } from '../../models/datos-personales';

@Component({
  selector: 'app-contacto',
  standalone: true,
  // 3. Añadimos CommonModule y ReactiveFormsModule
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent implements OnInit {

  // 4. Inyectamos las herramientas
  private portfolioService = inject(PortfolioService);
  private cdr = inject(ChangeDetectorRef);

  // Variable para guardar los links
  public misDatos: DatosPersonales | undefined;

  // 5. Creamos el Formulario
  // Esto define los campos 'nombre', 'email' y 'mensaje'
  public contactForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  ngOnInit(): void {
    // 6. Pedimos los datos solo para los links
    this.portfolioService.getDatosPersonales().subscribe({
      next: (data) => {
        this.misDatos = data;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error("Error al cargar datos para contacto:", err);
        this.cdr.markForCheck();
      }
    });
  }

  // 7. Función que se llamará al enviar el formulario
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Aquí es donde, en un futuro, conectarías un servicio
      // para enviar el email (ej. EmailJS, Formspree).
      // Por ahora, solo mostraremos un alert.
      alert("Formulario enviado (simulación). ¡Revisa la consola!");
      this.contactForm.reset();
    } else {
      alert("El formulario no es válido. Revisa los campos.");
    }
  }
}
