import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../enums/app-routes.enum';
import { LoginRoutes } from '../enums/login-routes.enum';

@Injectable()
export class AuthenticationService {

  constructor(private router: Router) { }

  checkAuthentication() {
    // check if user is logged in
    const includeRoute = Object.values(AppRoutes).includes(this.router.url);
    const activeUser = localStorage['activeUser'];
    if (activeUser && !includeRoute) {
      this.router.navigate([AppRoutes.dashboard]);
    } else if (!activeUser && includeRoute) {
      this.router.navigate([LoginRoutes.login]);
    }
  }

  createId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
  }

  logout() {
    if (localStorage['activeUser']) {
      delete localStorage['activeUser'];
    }
    this.router.navigate([LoginRoutes.login]);
  }


}
