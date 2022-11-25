import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuracion_datos } from '../configuracion/configuracion_datos';
import { ModeloPlan } from '../modelos/plan.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  url: string = Configuracion_datos.SEGURIDAD_MS_URL;
  token: string = '';

  constructor(
    private http: HttpClient, 
    private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerPlanes():Observable<ModeloPlan[]> {
    return this.http.get<ModeloPlan[]>(`${this.url}/plans`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  ObtenerPlanesPorId(id: string):Observable<ModeloPlan> {
    return this.http.get<ModeloPlan>(`${this.url}/plans/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  CrearPlanes(plan: ModeloPlan): Observable<ModeloPlan> {
    return this.http.post<ModeloPlan>(`${this.url}/plans`, plan , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarPlanes(plan: ModeloPlan): Observable<ModeloPlan> {
    return this.http.put<ModeloPlan>(`${this.url}/plans/${plan.id}`, plan , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarPlanes(id: string): Observable<any> {
    return this.http.delete(`${this.url}/plans/${id}` , {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
