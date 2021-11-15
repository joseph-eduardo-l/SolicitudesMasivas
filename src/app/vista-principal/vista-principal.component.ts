import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrls: ['./vista-principal.component.css']
})
export class VistaPrincipalComponent implements OnInit {
  registerForm: FormGroup | any;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
    {
      Empresa: ["", Validators.required],
      Region: ["", Validators.required],
      Client: ["", [Validators.required, ]],
      OPServicio: ["", [Validators.required, ]],
      OPGastos: ["", Validators.required],
      Cedula: ["", Validators.required],
      FechaPago: ["", Validators.required],
    },
    );
  }



}

function Mostrar (): void {

}