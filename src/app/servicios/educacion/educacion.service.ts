import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = "http://localhost:8080/educacion";
  //urlBorrar = "http://localhost:8080/educacion/borrar/";

  constructor( private httpClient:HttpClient ) { }

  ObtenerEducacion():Observable<any>{
    return this.httpClient.get(this.url + "/get");
  }
  //-------------------------------------------------------------------------------------------------
  // A VER SI FUNCIONA
  create(educacion: any): Observable<any>{
    return this.httpClient.post(this.url + '/crear',educacion);
  }

  getAll(id: number): Observable<any>{
    return this.httpClient.get(this.url + '/' + id);
  }

  update(educacion: any): Observable<any>{
    return this.httpClient.put(this.url,educacion);
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(this.url + '/borrar/' + id);
  }
}
