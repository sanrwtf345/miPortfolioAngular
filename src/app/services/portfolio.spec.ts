import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersonales } from '../models/datos-personales';
import { Proyecto } from '../models/proyecto';

// 1. IMPORTAMOS EL ARCHIVO DE ENTORNO
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // 2. YA NO NECESITAMOS LAS URLs AQUÍ
  // private urlDatosPersonales: string = 'datos-personales.json';
  // private urlProyectos: string = 'proyectos.json';

  constructor(private http: HttpClient) { }

  public getDatosPersonales(): Observable<DatosPersonales> {
    // 3. USAMOS LA VARIABLE DEL ENTORNO
    return this.http.get<DatosPersonales>(environment.datosPersonalesUrl);
  }

  public getProyectos(): Observable<Proyecto[]> {
    // 4. USAMOS LA VARIABLE DEL ENTORNO
    return this.http.get<Proyecto[]>(environment.proyectosUrl);
  }
}