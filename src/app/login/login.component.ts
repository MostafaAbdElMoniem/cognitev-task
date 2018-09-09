import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../app-services/login-service.service';
import { NgForm } from '@angular/forms';
import { AppRoutes } from '../enums/app-routes.enum';
import { LoginRoutes } from '../enums/login-routes.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showWrongCredentialsError = false;
  userCredentials = {
    username: '',
    password: ''
  };

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    const loginUser = this.loginService.canLogin(this.userCredentials);
    if (loginUser) {
      this.loginService.saveUser(loginUser);
      this.router.navigate([AppRoutes.dashboard]);
    } else {
      this.showWrongCredentialsError = true;
    }

  }

  signup() {
    this.router.navigate([LoginRoutes.signup]);
  }

  removeErrors() {
    this.showWrongCredentialsError = false;
  }

}
