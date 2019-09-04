import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// @ts-ignore
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { EditApartmentComponent } from './edit-apartment/edit-apartment.component';
import { DetailApartmentComponent } from './detail-apartment/detail-apartment.component';
import { ApartmentComponent } from './apartment/apartment.component';
import {UserService} from './shared/user.service';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { HomeComponent } from './home/home.component';
import {AuthInterceptor} from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditApartmentComponent,
    DetailApartmentComponent,
    ApartmentComponent,
    UserComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
