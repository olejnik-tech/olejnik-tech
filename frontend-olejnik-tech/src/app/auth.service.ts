import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from './model/iuser.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public serverStatus = new BehaviorSubject<boolean>(false);
  public loggedUser = '';

  constructor(private http: HttpClient) { }

  getServerStatus() {
    let result = this.http.get<boolean>(environment.backend + 'server/status');
    
    result.subscribe( res => {
      this.serverStatus.subscribe(ss => ss = res);
      console.log('Server status: ' + res + '.');
    });

    return result;
  }

  login(user: IUser): Observable <boolean>{
    let loginHttpPath = environment.backend + 'login';
    console.log('Logging in user \'' + user.email + '\'.');
    return this.http.post<boolean>(loginHttpPath, user);
  }
}
