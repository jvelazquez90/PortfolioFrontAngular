import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EditableService } from 'src/app/servicios/editable/editable.service';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrar: Boolean = false;
  noMostrar: Boolean = true;
  @Output() cambiarValorMostrar = new EventEmitter<Boolean>();
  @Output() cambiarValorOcultar = new EventEmitter<Boolean>();

  comenzarEdicion() {
    this.cambiarValorMostrar.emit(true);
  }

  terminarEdicion() {
    this.cambiarValorOcultar.emit(false);
  }

  constructor(private botonEditable: EditableService) { }

  ngOnInit(): void {
  }
}
