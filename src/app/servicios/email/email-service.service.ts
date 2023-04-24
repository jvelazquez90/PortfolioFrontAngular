import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // agregado
import { BehaviorSubject, Observable } from 'rxjs'; // se agrega para que la aplicacion no quede en la espera del servicio
import { map } from 'rxjs/operators';
import { Email } from 'src/app/model/email';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  //url = "http://localhost:8080/email";
  url = "https://portfolioweb-44z6.onrender.com/email";

  personaId = 1;

  constructor(private httpClient:HttpClient) { }

  obtenerEmail():Observable<any>{
    return this.httpClient.get(this.url + "/obtener/" + this.personaId);
  }

  obtenerEmailIdS(id: any):Observable<any>{
    return this.httpClient.get(this.url + "/obtener/" + id);
  }

  editarEmailS(email: Email): Observable<any>{
    return this.httpClient.put(this.url + '/editar/' + email.id, email);
  }
}
