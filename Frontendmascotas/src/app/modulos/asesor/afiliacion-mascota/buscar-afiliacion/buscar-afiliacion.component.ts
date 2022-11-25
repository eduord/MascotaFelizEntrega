import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ModeloAfiliacion } from 'src/app/modelos/afiliacion-mascota.modelo';
import { AfiliacionMascotaService } from 'src/app/servicios/afiliacion-mascota.service';

@Component({
  selector: 'app-buscar-afiliacion',
  templateUrl: './buscar-afiliacion.component.html',
  styleUrls: ['./buscar-afiliacion.component.css']
})
export class BuscarAfiliacionComponent implements OnInit {

  listadoAfiliaciones: ModeloAfiliacion[] = []

  constructor(private afiliacionMascotaService : AfiliacionMascotaService) { }

  ngOnInit(): void {
    this.LlamarListadoAfiliaciones()
  }

  LlamarListadoAfiliaciones() {
    this.afiliacionMascotaService.ObtenerRegistros().subscribe(
      (resultado) => {
        this.listadoAfiliaciones = resultado;
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

}
