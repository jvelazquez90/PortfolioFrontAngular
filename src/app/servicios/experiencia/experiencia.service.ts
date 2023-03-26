import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';
import { Experiencia } from 'src/app/model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = "http://localhost:8080/experiencia";

  constructor( private httpClient:HttpClient ) { }

  ObtenerExperiencia():Observable<any>{
    return this.httpClient.get(this.url + "/get");
  }

  //----------------------------------------------------------------------------------------

  ObtenerExperienciaS():Observable<any>{
    return this.httpClient.get(this.url + "/get");
  }
 
  crearExperienciaS(experiencia: any): Observable<any>{
    return this.httpClient.post(this.url + '/crear/', experiencia);
  }

  obtenerExperienciaIdS(id: number): Observable<any>{
    return this.httpClient.get(this.url + '/obtener/' + id);
  }

  editarExperienciaS(experiencia: Experiencia): Observable<any>{
    return this.httpClient.put(this.url + '/editar/' + experiencia.id, experiencia);
  }

  eliminarExperienciaS(id: number): Observable<any>{
    return this.httpClient.delete(this.url + '/borrar/' + id);
  }
}
