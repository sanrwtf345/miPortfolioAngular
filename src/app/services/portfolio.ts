import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// 1. Importamos las interfaces que creamos
import { DatosPersonales } from '../models/datos-personales';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // 2. Definimos las rutas a tus archivos JSON
  private urlDatosPersonales: string = 'miPortfolioAngular\src\assets\datos-personales.json';
  private urlProyectos: string = 'assets/proyectos.json';

  // 3. Inyectamos HttpClient para poder usarlo [cite: 1056]
  constructor(private http: HttpClient) { }

  // 4. Método para obtener los datos personales
  // Devuelve un Observable [cite: 1058]
  public getDatosPersonales(): Observable<DatosPersonales> {
    return this.http.get<DatosPersonales>(this.urlDatosPersonales);
  }

  // 5. Método para obtener la lista de proyectos
  public getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.urlProyectos);
  }
}
