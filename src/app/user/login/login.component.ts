import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  };
  constructor(private service: UserService) { }

  ngOnInit() {

  }

  onSubmit() {
  }
}
