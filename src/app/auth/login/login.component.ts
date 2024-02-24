import { Component } from '@angular/core';
import { LoginForm } from '../../types/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form:LoginForm = {
    email:'',
    password:''
  }

  constructor(){}

  ngOnInit(){}

  submit(){
    console.log(this.form);
  }


}
