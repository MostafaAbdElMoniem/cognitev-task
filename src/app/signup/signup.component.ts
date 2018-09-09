import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../app-services/login-service.service';
import { UserModel } from '../models/user-model.model';
import { UserRoles } from '../enums/user-roles.enum';
import { Router } from '@angular/router';
import { AppRoutes } from '../enums/app-routes.enum';
import { LoginRoutes } from '../enums/login-routes.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  showCreateSuccess = false;
  userIsCreatedBefore = false;

  // user types should be in userTypes enum
  userRoles = Object.values(UserRoles);

  // init register model
  user: UserModel = {
    username: '',
    password: '',
    confirmPassword: '',
    userRole: UserRoles.admin // should read this value from userTypes enum
  };

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  register(registerForm: NgForm) {
    const createUser = this.loginService.createUser(this.user);
    if (createUser) {
      this.resetRegisterForm(registerForm);
      this.showCreateSuccess = true;
    } else {
      this.userIsCreatedBefore = true;
    }
  }

  resetRegisterForm(registerForm: NgForm) {
    registerForm.form.markAsPristine();
    registerForm.form.markAsUntouched();
    registerForm.form.updateValueAndValidity();
    this.user = {
      username: '',
      password: '',
      confirmPassword: '',
      userRole: 'admin'
    };
  }

  backToLogin() {
    this.router.navigate([LoginRoutes.login]);
  }

  removeErrors() {
    this.showCreateSuccess = false;
    this.userIsCreatedBefore = false;

  }


}
