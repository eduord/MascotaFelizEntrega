import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.model';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  listadoPlanes: ModeloPlan[] = [];

  constructor(private planService: PlanesService, private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListadoPlanes();
  }

  AgregarPlan() {
    this.router.navigate(["planes/agregar"]);
  }

  ObtenerListadoPlanes() {
    this.planService.ObtenerPlanes().subscribe((datos: ModeloPlan[]) => {
      this.listadoPlanes = datos;
    })
  }

}
