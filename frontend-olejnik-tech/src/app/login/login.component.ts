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
        console.log('logging: ' + this.user.email + ', verified: ' + verified);
        if (verified) {
          this.authService.setLoggedIn(this.user.email);
          this.badEmail = false;
          this.badPassword = false;
          this.successLogin = true;
          console.log(this.badEmail + " " + this.badPassword)
        }
        // Failed login
      }, err => {
        if(err.status == 404){
          console.log('error - wrong email');
          this.successLogin = false;
          this.badEmail = true;
        }
        if(err.status == 401){
          console.log('error - wrong password');
          this.successLogin = false;
          this.badPassword = true;
        }
      }
    )
  }

  ngOnInit(): void {
    this.authService.getServerStatus().subscribe(
      data => {
        this.serverStatus = data;
        this.authService.serverStatus.subscribe(ss => {
          ss = data;
        });
      },
    )

  }

}
