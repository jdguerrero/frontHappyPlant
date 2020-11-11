import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUserViewComponent } from './components/all-user-view/all-user-view.component';
import { NavAllComponent } from './components/all-user-view/nav-all/nav-all.component';
import { HomeAllComponent } from './components/all-user-view/home-all/home-all.component';
import { LoginComponent } from './components/all-user-view/login/login.component';
import { SignInUserComponent } from './components/all-user-view/sign-in-user/sign-in-user.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserNavComponent } from './components/user-view/user-nav/user-nav.component';
import { UserHomeComponent } from './components/user-view/user-home/user-home.component';



@NgModule({
  declarations: [
    AppComponent,
    AllUserViewComponent,
    NavAllComponent,
    HomeAllComponent,
    LoginComponent,
    SignInUserComponent,
    UserViewComponent,
    UserNavComponent,
    UserHomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
