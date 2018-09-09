import { Component } from '@angular/core';
import { AuthenticationService } from './app-services/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authenticate: AuthenticationService) {

  }

  checkAthentication() {
    this.authenticate.checkAuthentication();
  }
}
