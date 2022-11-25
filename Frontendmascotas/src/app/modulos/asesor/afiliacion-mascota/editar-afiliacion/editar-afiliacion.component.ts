import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAfiliacion } from 'src/app/modelos/afiliacion-mascota.modelo';
import { AfiliacionMascotaService } from 'src/app/servicios/afiliacion-mascota.service';

@Component({
  selector: 'app-editar-afiliacion',
  templateUrl: './editar-afiliacion.component.html',
  styleUrls: ['./editar-afiliacion.component.css']
})
export class EditarAfiliacionComponent implements OnInit {

  id : string = "";
  fgValidador: FormGroup = this.fb.group({
    'id':['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],
    'planId': ['', [Validators.required]],
    'usuarioId': ['', [Validators.required]]
  });

  constructor(private afiliacionMascotaService: AfiliacionMascotaService,
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarAfiliacion();
  }

  BuscarAfiliacion(){
    this.afiliacionMascotaService.ObtenerRegistroPorId(this.id).subscribe(
      (datos:ModeloAfiliacion) => {
        this.fgValidador.controls['id'].setValue(datos.id);
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['foto'].setValue(datos.foto);
        this.fgValidador.controls['estado'].setValue(datos.estado);
        this.fgValidador.controls['especie'].setValue(datos.especie);
        this.fgValidador.controls['comentario'].setValue(datos.comentario);
      },
      (error) => {
      console.log("Error buscando la afiliación" );
      }
    )
  }

    ActualizarAfiliacion(){
      //sacar la información del formulario

      let nombre = this.fgValidador.controls['nombre'].value;
      let foto = this.fgValidador.controls['foto'].value;
      let estado = this.fgValidador.controls['estado'].value;
      let especie = this.fgValidador.controls['especie'].value;
      let comentario = this.fgValidador.controls['comentario'].value;
      let planId = this.fgValidador.controls['planId'].value;
      let usuarioId = this.fgValidador.controls['usuarioId'].value;

      //crear una instacia del modelo y llenarlo
      let modelo = new ModeloAfiliacion();
      modelo.nombre = nombre;
      modelo.foto = foto;
      modelo.estado = estado;
      modelo.especie = especie;
      modelo.comentario = comentario;
      modelo.planId = planId;
      modelo.usuarioId = usuarioId;

      //llamar el servicio de actualización de la afiliacion
      this.afiliacionMascotaService.ActualizarAfiliacionPorId(this.id, modelo).subscribe(
        (datos) => {
          alert("Registro almacenado");
          this.router.navigate(["/administracion/buscar-afiliacion"]);
        },
        (error) => {
          alert("Error almacenando el registro");
        }
        
      )
    }  

}
