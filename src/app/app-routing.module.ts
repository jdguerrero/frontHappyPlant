import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * import components
 */
import { AllUserViewComponent } from './components/all-user-view/all-user-view.component';
import { LoginComponent } from './components/all-user-view/login/login.component';
import { SignInUserComponent } from './components/all-user-view/sign-in-user/sign-in-user.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import {RegistrarPlantaComponent} from './components/user-view/registrar-planta/registrar-planta.component';
import { DashboardComponent } from './components/user-view/estadisticas-planta/dashboard/dashboard.component';

/**
 * testeo de kuro
 */



const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: AllUserViewComponent},
  {path: "ingresar", component: LoginComponent},
  {path: "registrarse", component: SignInUserComponent},
  {path: "propietario/:id", component: UserViewComponent},
  {path: "registrarPlanta/:id", component: RegistrarPlantaComponent},
  {path: "dashboard", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
