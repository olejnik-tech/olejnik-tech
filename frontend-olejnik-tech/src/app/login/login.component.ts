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

  loginEmail = '';
  loginPassword = '';
  loadedUser = false;

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
        }
      }
    )

  }

  ngOnInit(): void {
  }

}
