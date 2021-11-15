import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from "@angular/common/http";

// import { routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from "@angular/common";
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    HttpClientModule,
    ],
  
    declarations: [
    AppComponent, 
    LoginComponent, 
    RegisterComponent, VistaPrincipalComponent
    
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],

  bootstrap: [AppComponent]
})
export class AppModule {}
