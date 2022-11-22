import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Configuracion_datos } from 'src/app/configuracion/configuracion_datos';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { LocalStorageService } from 'src/app/servicios/almacenamiento/local-storage.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJS = require("crypto-js")
import { MD5 } from "crypto-js"

declare const MostrarMensajeGeneral: any;

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email, Validators.minLength(Configuracion_datos.EMAIL_MIN_LENGHT)]],
    'clave': ['', [Validators.required, Validators.minLength(Configuracion_datos.CLAVE_MIN_LENGHT)]]
  });

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
  }

  Identificar() {
    alert("AQUÍ VAMOS")
    if (this.fgValidador.invalid) {
      MostrarMensajeGeneral(Configuracion_datos.INVALID_FORM_MENSAJE);
    } else {
      let credenciales = new ModeloDatos();
      credenciales.usuario = this.GetDF["usuario"].value;
      credenciales.clave = MD5(this.GetDF["clave"].value).toString();
      this.servicioSeguridad.Identificar(credenciales).subscribe({
        next: (datos: ModeloIdentificar) => {
          console.log(datos);
          if (datos.tk != "" && datos.datos != null) {
            let saved = this.localStorageService.AlmacenarDatos(datos);
            datos.estaIdentificado = true;
            this.servicioSeguridad.RefrescarDatosSesion(datos);
            this.router.navigate(["/inicio"]);
          }else{
            MostrarMensajeGeneral(Configuracion_datos.LOGIN_DATA_INVALID);
          }
        },
        error: (error: any) => {

        },
        complete: () => {

        }
      });
    }
  }

  get GetDF() {
  return this.fgValidador.controls;
}

}
