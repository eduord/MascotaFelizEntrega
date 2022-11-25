import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-afiliacion',
  templateUrl: './crear-afiliacion.component.html',
  styleUrls: ['./crear-afiliacion.component.css']
})
export class CrearAfiliacionComponent implements OnInit {
  [x: string]: any;

  fgValidador : FormGroup = this.fb.group({
    'nombre':['', [Validators.required]],
    'foto':['', [Validators.required]],
    'estado':['', [Validators.required]],
    'especie':['', [Validators.required]],
    'comentario':['', [Validators.required]]

  })
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

}
