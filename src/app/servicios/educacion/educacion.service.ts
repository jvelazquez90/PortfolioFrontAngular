import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = "http://localhost:8080/educacion";

  constructor( private httpClient:HttpClient ) { }

  //----------------------------------------------------------------------------------------

  ObtenerEducacion():Observable<any>{
    return this.httpClient.get(this.url + "/get");
  }
 
  crearEducacion(educacion: any): Observable<any>{
    return this.httpClient.post(this.url + '/crear/',educacion);
  }

  obtenerEducacionId(id: number): Observable<any>{
    return this.httpClient.get(this.url + '/obtener/' + id);
  }

  editarEducacion(educacion: any): Observable<any>{
    return this.httpClient.put(this.url + '/editar/',educacion);
  }

  eliminarEducacion(id: number): Observable<any>{
    return this.httpClient.delete(this.url + '/borrar/' + id);
  }
}
