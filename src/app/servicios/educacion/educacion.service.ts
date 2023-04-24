import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';
import { Educacion } from 'src/app/model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //url = "http://localhost:8080/educacion";
  url = "https://portfolioweb-44z6.onrender.com/educacion";

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

  editarEducacion(educacion: Educacion): Observable<any>{
    return this.httpClient.put(this.url + '/editar/' + educacion.id, educacion);
  }

  eliminarEducacion(id: number): Observable<any>{
    return this.httpClient.delete(this.url + '/borrar/' + id);
  }
}
