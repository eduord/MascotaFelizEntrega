<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AfiliacionMascotaService } from 'src/app/servicios/afiliacion-mascota.service';
>>>>>>> 91ee1f9a5ca1a0cdc0e34bc6b2bdda8b2371b856

@Component({
  selector: 'app-eliminar-afiliacion',
  templateUrl: './eliminar-afiliacion.component.html',
  styleUrls: ['./eliminar-afiliacion.component.css']
})
export class EliminarAfiliacionComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

=======
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


>>>>>>> 91ee1f9a5ca1a0cdc0e34bc6b2bdda8b2371b856
}
