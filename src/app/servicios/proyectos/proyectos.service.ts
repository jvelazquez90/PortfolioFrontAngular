import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';
import { Proyectos } from 'src/app/model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url = "http://localhost:8080/proyecto";

  constructor(  private httpClient:HttpClient ) { }

 //----------------------------------------------------------------------------------------

  obtenerProyectos():Observable<any>{
    return this.httpClient.get(this.url + "/get");
  }

  crearProyecto(proyecto: any): Observable<any>{
    return this.httpClient.post(this.url + '/crear/',proyecto);
  }

  obtenerProyectoId(id: number): Observable<any>{
    return this.httpClient.get(this.url + '/obtener/' + id);
  }

  editarProyecto(proyecto: Proyectos): Observable<any>{
    return this.httpClient.put(this.url + '/editar/' + proyecto.id, proyecto);
  }

  eliminarProyecto(id: number): Observable<any>{
    return this.httpClient.delete(this.url + '/borrar/' + id);
  }
}
