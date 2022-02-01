import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*

  testEmail = 'test@test.com';
  testPassword = '1234';

  loginEmail = '';
  loginPassword = '';
  
  regex = new RegExp('.+\\@.+\\..+');

  */

  constructor() { }

  /*

  login(form: NgForm){
    if(form.value.loginEmail === this.testEmail || form.value.loginPassword){
      console.log('Login: Success');
    }else{
      console.log('Login: Failed')
    }

  }

  */

  ngOnInit(): void {
  }

}
