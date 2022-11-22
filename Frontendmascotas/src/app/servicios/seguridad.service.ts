import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Configuracion_datos } from '../configuracion/configuracion_datos';
import { ModeloDatos } from '../modelos/datos.modelo';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { LocalStorageService } from './almacenamiento/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url:string = Configuracion_datos.SEGURIDAD_MS_URL;
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient, 
    private localStorageService: LocalStorageService){
      this.VerificarSesionActual();
    
  }

  VerificarSesionActual(): boolean {
    let datos = this.localStorageService.ObtenerInformacionSesion();
    if (datos.tk) {
      datos.estaIdentificado = true;
      this.RefrescarDatosSesion(datos);
      return true;
    } else {
      return false;
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerInformacionSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  Identificar(datos: ModeloDatos): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`, {
      usuario: datos.usuario,
      clave: datos.clave
    });
    }
  }