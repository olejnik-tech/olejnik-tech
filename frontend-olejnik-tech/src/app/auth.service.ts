import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from './model/iuser.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  fakeLogin(loginEmail: string, loginPassword: string): Observable <IUser>{

    let fakeUserHttpPath = environment.backend + 'login/findById/1';
    let user: Observable<IUser> = this.http.get<IUser>(fakeUserHttpPath);

    user.subscribe(data => console.log(data))

    return user;
  }
}
