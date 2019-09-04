import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {UserComponent} from './user/user.component';
import {RegistrationComponent} from './user/registration/registration.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: 'user' , component: UserComponent,
    children: [
      {path: 'registration', component: RegistrationComponent },
      {path: 'login' , component: LoginComponent}
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
