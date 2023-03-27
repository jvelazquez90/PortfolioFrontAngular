import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditableService {

  mostrarEdicion: Boolean = false;

  constructor(private httpClient:HttpClient) { }

  mostrarOcultar():Observable<any>{
    return this.httpClient.get('${this.mostrar}');
  }

  cambiarValor(valor: boolean):void{
    this.mostrarEdicion = valor;
  }
}
