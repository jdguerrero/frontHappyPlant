import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUserViewComponent } from './components/all-user-view/all-user-view.component';
import { NavAllComponent } from './components/all-user-view/nav-all/nav-all.component';
import { LoginComponent } from './components/all-user-view/login/login.component';
import { SignInUserComponent } from './components/all-user-view/sign-in-user/sign-in-user.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserNavComponent } from './components/user-view/user-nav/user-nav.component';
import { UserHomeComponent } from './components/user-view/user-home/user-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualPlantaComponent } from './components/actual-planta/actual-planta.component';
import {PlantService} from '../app/services/plant.service';
import { RegistrarPlantaComponent } from './components/user-view/registrar-planta/registrar-planta.component';



@NgModule({
  declarations: [
    AppComponent,
    AllUserViewComponent,
    NavAllComponent,
    LoginComponent,
    SignInUserComponent,
    UserViewComponent,
    UserNavComponent,
    UserHomeComponent,
    ActualPlantaComponent,
    RegistrarPlantaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [PlantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
