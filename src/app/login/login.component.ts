import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  
  email :string | undefined;
  password : string | undefined;
  submitted: boolean= false;
  registerForm: any| FormGroup;
  


  constructor( private formBuilder: FormBuilder ) {
    this.registerForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
       
      })
   }

  login (){
    console.log(this.email)
    console.log(this.password)
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  // ngOnInit(): void {
  // }

}
