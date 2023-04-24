import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080/login";

  logueado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor (private httpClient:HttpClient ) { }

  loginUser( user:User ):Observable<any> {
    return this.httpClient.post(this.url, user).pipe(
      tap(() => {
        this.logueado.next(true);
      })
    );
  }

  get data(): Observable<boolean> {
    return this.logueado.asObservable();
  }
}
