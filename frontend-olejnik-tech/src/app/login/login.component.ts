import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IUser } from '../model/iuser.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  badEmail = false;
  badPassword = false;
  serverStatus = false;
  successLogin = false;

  user: IUser = {
    id : 0,
    email : '',
    password: ''
  }
  
  regex = new RegExp('.+\\@.+\\..+');


  constructor(private authService:AuthService) { }

  login(form: NgForm){

    this.authService.login(this.user).subscribe(
      verified => {
        console.log('User \'' + this.user.email + '\' verified: ' + verified);
        if (verified) {
          this.badEmail = false;
          this.badPassword = false;
          this.successLogin = true;

          this.authService.loggedUser = this.user.email;

        }
        // Failed login
      }, err => {
        if(err.status == 404){
          console.log('Error 404 - wrong email.');
          this.successLogin = false;
          this.badEmail = true;
          this.badPassword = false;
        }
        if(err.status == 401){
          console.log('Error 401 - wrong password.');
          this.successLogin = false;
          this.badEmail = false;
          this.badPassword = true;
        }
      }
    )
  }

  ngOnInit(): void {
    // Get server status
    this.authService.getServerStatus().subscribe(
      data => {
        this.serverStatus = data;
        this.authService.serverStatus.subscribe(ss => ss = data)
      },
    )

  }

}
