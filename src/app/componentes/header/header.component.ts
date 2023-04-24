import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EditableService } from 'src/app/servicios/editable/editable.service';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrar: Boolean = false;
  noMostrar: Boolean = true;

  logueadoOn: boolean = false;

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
    this.router.navigate(['iniciar-sesion'])
  }

  constructor(private botonEditable: EditableService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    
    this.loginService.logueado.subscribe(
      {
      next:(logueadoOn) => {
        this.logueadoOn = logueadoOn;
      }
    })
  }
}
