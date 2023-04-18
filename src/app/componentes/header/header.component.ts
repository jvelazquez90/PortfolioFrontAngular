import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EditableService } from 'src/app/servicios/editable/editable.service';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrar: Boolean = false;
  noMostrar: Boolean = true;
  logueado: Boolean = false;
  @Output() cambiarValorMostrar = new EventEmitter<Boolean>();
  @Output() cambiarValorOcultar = new EventEmitter<Boolean>();

  comenzarEdicion() {
    this.cambiarValorMostrar.emit(true);
    this.mostrar = true;
  }

  terminarEdicion() {
    this.cambiarValorOcultar.emit(false);
    this.mostrar = false;
  }

  cerrarSesion() {
    this.logueado = false;
    this.router.navigate(['iniciar-sesion'])
  }

  constructor(private botonEditable: EditableService, private router: Router) { }

  ngOnInit(): void {
  }
}
