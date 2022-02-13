import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from './model/iuser.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedUser: string = '';
  public serverStatus = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getServerStatus() {
    console.log('Getting server status ...');
    let result = this.http.get<boolean>(environment.backend + 'server/status');

    result.subscribe( res => {
      this.serverStatus.subscribe(ss => ss = res);
      console.log('Server status: ' + res);

    });

    return result;
  }

  login(user: IUser): Observable <boolean>{
    console.log('Login authentication ...');
    console.log(user);
    let loginHttpPath = environment.backend + 'login';
    return this.http.post<boolean>(loginHttpPath, user);
  }

  // Getters and Setters

  get isLoggedIn(): boolean {
    return this.loggedUser ? true:false;
  }

  setLoggedIn(loggedUser: string){
    this.loggedUser = loggedUser;
  }
}
