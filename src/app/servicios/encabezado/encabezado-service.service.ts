import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';
import { Persona } from 'src/app/model/persona';


@Injectable({
  providedIn: 'root'
})
export class EncabezadoServiceService {

  //url = "http://localhost:8080/personas/";
  url = "https://portfolioweb-44z6.onrender.com/personas/";

  constructor( private httpClient:HttpClient ) {}

  ObtenerPersona():Observable<any>{
    return this.httpClient.get(this.url + "obtener/" + "1");
  }

  //----------------------------------------------------------------------------------------

  obtenerPersonaIdS(id: number): Observable<any>{
    return this.httpClient.get(this.url + '/obtener/' + id);
  }

  editarPersonaS(persona: Persona): Observable<any>{
    return this.httpClient.put(this.url + '/editar/' + persona.id, persona);
  }

  //----------------------------------------------------------------------------------------
  // objeto para el modal. el signo peso se usa para decir que es un observable
  $modal = new EventEmitter<any>();
}
