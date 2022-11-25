import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecuperarClaveModel } from 'src/app/modelos/recuperarClave.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent implements OnInit {

  fgValidador: FormGroup = this.builder.group({
    'usuario': ['', [Validators.required, Validators.email]]
  });

  constructor(
    private builder: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router,
    public modal: NgbModal) {

  }

  ngOnInit(): void {
  }


  RecuperarClave(contenidoModal: any){
    let usuario = this.fgValidador.controls["usuario"].value;
    let u = new RecuperarClaveModel();
    u.usuario = usuario;

    this.servicioSeguridad.RecuperarClave(u).subscribe((datos: any) => {
      this.modal.open(contenidoModal);
      this.router.navigate(["/inicio"]);
    }, (error: any) => {
      this.modal.open(contenidoModal);
      this.router.navigate(["/inicio"]);
    });
  }

  CerrarModal() {
    this.modal.dismissAll();
  }

}
