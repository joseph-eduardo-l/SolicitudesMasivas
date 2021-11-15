import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';

const routes: Routes = [
  { //ruta en blanco te lleva al login
    path: "", 
    component : LoginComponent,
    pathMatch: "full"
  },
  { // te lleva al login
     path: "login",
     component: LoginComponent
  },
  { // registro
    path: "register",
    component: RegisterComponent
  },
  { // Vista Principal 
    path: "Menu-Principal",
    component: VistaPrincipalComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
