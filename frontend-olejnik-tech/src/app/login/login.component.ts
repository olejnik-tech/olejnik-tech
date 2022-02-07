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
  
  regex = new RegExp('.+\\@.+\\..+');


  constructor(private authService:AuthService) { }

  login(form: NgForm){

    let user: IUser = {
      id : 0,
      email : '',
      password: ''
    }

    this.authService.fakeLogin(this.loginEmail, this.loginPassword).subscribe(
      data => {
        user.id = data.id;
        user.email = data.email;
        user.password = data.password;

        if (this.loginEmail == user.email &&
          this.loginPassword == user.password){
            console.log('success');
        } else {
          console.log('fail');
        }

        this.loadedUser = false;
      }
    )
  }

  ngOnInit(): void {
  }

}
