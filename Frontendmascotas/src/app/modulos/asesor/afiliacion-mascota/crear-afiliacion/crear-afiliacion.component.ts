import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { ModeloAfiliacion } from 'src/app/modelos/afiliacion-mascota.modelo';
import { AfiliacionMascotaService } from 'src/app/servicios/afiliacion-mascota.service';
>>>>>>> 91ee1f9a5ca1a0cdc0e34bc6b2bdda8b2371b856

@Component({
  selector: 'app-crear-afiliacion',
  templateUrl: './crear-afiliacion.component.html',
  styleUrls: ['./crear-afiliacion.component.css']
})
export class CrearAfiliacionComponent implements OnInit {
<<<<<<< HEAD
  [x: string]: any;

  fgValidador : FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'estado':['', [Validators.required]],
    'especie':['', [Validators.required]],
    'comentario':['', [Validators.required]]

  })
  constructor(private fb : FormBuilder) { }
=======
  
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],
    'planId': ['', [Validators.required]],
    'usuarioId': ['', [Validators.required]]
  });

  constructor(private afiliacionMascotaService: AfiliacionMascotaService,
    private fb: FormBuilder,
    private router: Router) { }
>>>>>>> 91ee1f9a5ca1a0cdc0e34bc6b2bdda8b2371b856

  ngOnInit(): void {
  }

<<<<<<< HEAD
}
=======
    GuardarAfiliacion(){
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

      //llamar el servicio de creacion de la afiliacion
      this.afiliacionMascotaService.CrearAfiliacion(modelo).subscribe(
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
>>>>>>> 91ee1f9a5ca1a0cdc0e34bc6b2bdda8b2371b856
