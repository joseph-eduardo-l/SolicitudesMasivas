import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        lastname: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        repeatPass: ["", Validators.required]
      },
      {
        validator: this.MustMatch("password", "repeatPass") // Validando
      }
    );
  }

  // nombreValidado : boolean = true
  //  validacionNombre (event:any){
  //   console.log( event.target.value )
  //   if (event.target.value != ""){
  //   this.nombreValidado = true
  //   } else {
  //     this.nombreValidado = false
  //   }
  //  }
 
  //  correoValidado: boolean = true
  //  validacionCorreo (event:any){
  //    console.log( event.target.value )
  //    if (event.target.value != ""){
  //      this.correoValidado = true
  //    } else {
  //      this.correoValidado = false
  //    }
  //  }

   
  //  passwordValidado: boolean = true
  //  validacionPassword (event:any){
  //    console.log( event.target.value )
  //    if (event.target.value != ""){
  //      this.correoValidado = true
  //    } else {
  //      this.correoValidado = false
  //    }
  //  }

  //  passwordRValidado: boolean = true
  //  validacionPasswordR (event:any){
  //    console.log( event.target.value )
  //    if (event.target.value != ""){
  //      this.correoValidado = true
  //    } else {
  //      this.correoValidado = false
  //    }
  //  }

  // validador personalizado para comprobar que dos campos coinciden
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
  
    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);
     this.router.navigate(['./login']);

    // alert(
    //   "SUCCESS!! \n\n" + JSON.stringify(this.registerForm.value, null, 4)
    // );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

