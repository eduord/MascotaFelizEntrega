import { Injectable } from '@angular/core';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  AlmacenarDatos(datos: ModeloIdentificar): boolean {
    let datosactuales = localStorage.getItem("Info-Sesion");
    if (datosactuales) {
      return false;
    } else {
      let stringDatos = JSON.stringify(datos);
      localStorage.setItem("Info-Sesion", stringDatos);
      return true;
    }
  }

  EliminarInformacionSesion(): boolean{
    let datosactuales = localStorage.getItem("Info-Sesion");
    if (datosactuales) {
      localStorage.removeItem("Info-Sesion");
      return true;
    }else{
      return false;
    }
  }

  ObtenerToken(): string{
    let datosactuales = localStorage.getItem("Info-Sesion");
    if (datosactuales) {
      let DatosJson = JSON.parse(datosactuales);
      return DatosJson.tk;
    }else{
      return "";
    }
  }

  ObtenerInformacionSesion(): ModeloIdentificar{
    let datosactuales = localStorage.getItem("Info-Sesion");
    if (datosactuales) {
      let DatosJson = JSON.parse(datosactuales);
      return DatosJson;
    }else{
      return new ModeloIdentificar();
    }
  }


}
