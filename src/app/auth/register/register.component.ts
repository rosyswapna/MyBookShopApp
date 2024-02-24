import { Component } from '@angular/core';
import { Jobseeker } from '../../types/Jobseeker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  form:Jobseeker = {
    fullname:'',
    email:'',
    password:'',
    cpassword:''
  }

  constructor(){}

  ngOnInit(){}

  submit(){
    console.log(this.form)
  }

}

