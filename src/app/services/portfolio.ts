import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// 1. Importamos las interfaces
import { DatosPersonales } from '../models/datos-personales';
import { Proyecto } from '../models/proyecto';

// 2. ¡IMPORTANTE! Importamos el archivo de entorno
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // 3. las urls vienen de environment.ts

  // 4. Inyectamos HttpClient
  constructor(private http: HttpClient) { }

  // 5. Método para obtener los datos personales
  public getDatosPersonales(): Observable<DatosPersonales> {
    // Usamos la variable de 'environment'
    return this.http.get<DatosPersonales>(environment.datosPersonalesUrl);
  }

  // 6. Método para obtener la lista de proyectos
  public getProyectos(): Observable<Proyecto[]> {
    // Usamos la variable de 'environment'
    return this.http.get<Proyecto[]>(environment.proyectosUrl);
  }
}
