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

  getServerStatus() {
    console.log('Getting server status...')
    return this.http.get<boolean>(environment.backend + 'server/status');
  }

  fakeLogin(loginEmail: string, loginPassword: string): Observable <IUser>{
    console.log('Login authentication ...')
    let fakeUserHttpPath = environment.backend + 'login/findById/1';
    return this.http.get<IUser>(fakeUserHttpPath);
  }
}
