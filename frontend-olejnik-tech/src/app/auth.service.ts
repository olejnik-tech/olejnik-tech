import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from './model/iuser.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedUser: string = '';

  constructor(private http: HttpClient) { }

  get isLoggedIn(): boolean {
    return this.loggedUser ? true:false;
  }

  setLoggedIn(loggedUser: string){
    loggedUser = this.loggedUser;
  }

  getServerStatus() {
    console.log('Getting server status...')
    return this.http.get<boolean>(environment.backend + 'server/status');
  }

  fakeLogin(loginEmail: string, loginPassword: string): Observable <IUser>{
    console.log('FakeLogin authentication ...')
    let fakeUserHttpPath = environment.backend + 'login/findById/1';
    return this.http.get<IUser>(fakeUserHttpPath);
  }

  login(user: IUser): Observable <boolean>{
    console.log('Login authentication ...')
    console.log(user);
    let loginHttpPath = environment.backend + 'login';
    return this.http.post<boolean>(loginHttpPath, user);
  }

}
