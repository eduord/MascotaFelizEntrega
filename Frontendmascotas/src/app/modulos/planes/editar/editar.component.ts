import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModeloPlan } from 'src/app/modelos/plan.model';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:string = '';
  fgValidador: FormGroup = this.builder.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  })

  constructor(private builder: FormBuilder,
    private planesService: PlanesService,
    private router: Router,
    private route: ActivatedRoute,
    public modal: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarPlan(this.id);
  }

  Regresar() {
    this.router.navigate(["/planes/consultar"]);
  }

  BuscarPlan(id: string) {
    this.planesService.ObtenerPlanesPorId(id).subscribe((datos: ModeloPlan) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["precio"].setValue(datos.precio);
    }, (error: ModeloPlan) => {

    });
  }

  GuardarPlan(contenidoModal: any) {
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = this.fgValidador.controls["precio"].value;

    let plan = new ModeloPlan();
    plan.id = this.id;
    plan.nombre = nombre;
    plan.descripcion = descripcion;
    plan.precio = Number.parseInt(precio);

    this.planesService.ActualizarPlanes(plan).subscribe((datos: ModeloPlan) => {
      this.modal.open(contenidoModal, {centered: true});
      this.router.navigate(["/planes/consultar"])
    }, (error: any) => {

    });
  }

  CerrarModal() {
    this.modal.dismissAll();
  }

}
