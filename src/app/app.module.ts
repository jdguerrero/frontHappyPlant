import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

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
import {PlantService} from '../app/services/plant.service';
import { RegistrarPlantaComponent } from './components/user-view/registrar-planta/registrar-planta.component';
import { DashboardComponent } from './components/user-view/estadisticas-planta/dashboard/dashboard.component';
import { LineChartComponent } from './components/user-view/estadisticas-planta/line-chart/line-chart.component';
import { DispositivoService } from './services/dispositivo.service';
import { LineChartLongitudComponent } from './components/user-view/estadisticas-planta/line-chart-longitud/line-chart-longitud.component';
import { BarChartHumedadtierraComponent } from './components/user-view/estadisticas-planta/bar-chart-humedadtierra/bar-chart-humedadtierra.component';
import { PieChartHumedadAmbienteComponent } from './components/user-view/estadisticas-planta/pie-chart-humedad-ambiente/pie-chart-humedad-ambiente.component';





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
    RegistrarPlantaComponent,
    DashboardComponent,
    LineChartComponent,
    LineChartLongitudComponent,
    BarChartHumedadtierraComponent,
    PieChartHumedadAmbienteComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
   
  ],
  providers: [PlantService, DispositivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
