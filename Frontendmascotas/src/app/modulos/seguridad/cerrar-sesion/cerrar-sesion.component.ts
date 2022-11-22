import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/servicios/almacenamiento/local-storage.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {
  
  constructor(
    private servicioSeguridad: SeguridadService,
    private localStorageService: LocalStorageService,
    private router: Router){ }
    

  ngOnInit(): void {
    this.localStorageService.EliminarInformacionSesion();
    this.servicioSeguridad.RefrescarDatosSesion(new ModeloIdentificar());
    this.router.navigate(["/inicio"]);
  }
}
