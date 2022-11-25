import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfiliacionMascotaService } from 'src/app/servicios/afiliacion-mascota.service';

@Component({
  selector: 'app-eliminar-afiliacion',
  templateUrl: './eliminar-afiliacion.component.html',
  styleUrls: ['./eliminar-afiliacion.component.css']
})
export class EliminarAfiliacionComponent implements OnInit {

  id: string = ""
  constructor(private afiliacionMascotaService: AfiliacionMascotaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
  }

  EliminarAfiliacion() {
    this.afiliacionMascotaService.EliminarAfiliacion(this.id).subscribe(
      (datos) => {
        alert("¡Afiliación eliminada!");
        this.router.navigate(["/asesor/buscar-afiliacion"]);
      },
      (error) => {
        alert("Error eliminando la afiliación");
      }
    )
  }


}
