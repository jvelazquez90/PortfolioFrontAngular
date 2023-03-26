import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';
import { Habilidades } from 'src/app/model/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  url = "http://localhost:8080/habilidades";

  constructor( private httpClient:HttpClient ) { }

  ObtenerHabilidades():Observable<any>{
    return this.httpClient.get(this.url + "/get");
  }

  //----------------------------------------------------------------------------------------

  ObtenerHabilidadesS():Observable<any>{
    return this.httpClient.get(this.url + "/get");
  }
 
  crearHabilidadesS(habilidades: any): Observable<any>{
    return this.httpClient.post(this.url + '/crear/',habilidades);
  }

  obtenerHabilidadesIdS(id: number): Observable<any>{
    return this.httpClient.get(this.url + '/obtener/' + id);
  }

  editarHabilidadesS(habilidades: Habilidades): Observable<any>{
    return this.httpClient.put(this.url + '/editar/' + habilidades.id, habilidades);
  }

  eliminarHabilidadesS(id: number): Observable<any>{
    return this.httpClient.delete(this.url + '/borrar/' + id);
  }
}
