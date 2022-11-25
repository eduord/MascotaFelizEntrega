import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAfiliacion } from '../modelos/afiliacion-mascota.modelo';

@Injectable({
  providedIn: 'root'
})
export class AfiliacionMascotaService {
  url = "http://localhost:3000";

  constructor(private http : HttpClient) { }

  ObtenerRegistros() : Observable<ModeloAfiliacion[]>{
    return this.http.get<ModeloAfiliacion[]>(`${this.url}/mascotas`);
  }
  CrearAfiliacion(mascota: ModeloAfiliacion): Observable<ModeloAfiliacion>{
    return this.http.post<ModeloAfiliacion>(`${this.url}/mascotas`,mascota);
  }

  ActualizarAfiliacionPorId(id:string,mascota:ModeloAfiliacion): Observable<ModeloAfiliacion>{
    return this.http.put<ModeloAfiliacion>(`${this.url}/mascotas/${id}`,mascota);
  }

  EliminarAfiliacion(id:string):Observable<any>{
    return this.http.delete(`${this.url}/mascotas/${id}`);
  }

  ObtenerRegistroPorId(id:string):Observable<ModeloAfiliacion>{
    return this.http.get<ModeloAfiliacion>(`${this.url}/mascotas/${id}`);
  }
}
