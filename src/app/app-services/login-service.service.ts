import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model.model';
import { AuthenticationService } from './authentication-service.service';

@Injectable()
export class LoginService {

  constructor(private authenticate: AuthenticationService) {

  }


  createUser(user: UserModel) {
    let users: UserModel[] = [];
    if (localStorage['users']) {
      // getting all users from localStorage if found
      users = JSON.parse(localStorage['users']);
      if (users.length) {

        // search if user is created before
        const searchUserIsCreated =
          users.find(searchUser => user.username.toLowerCase() === searchUser.username.toLowerCase());

        if (searchUserIsCreated) {
          return false; // return false if user is created before;
        }
      }
    }
    // create id for the new user
    user.id = this.authenticate.createId();
    // add the new user to all users
    users.push(user);
    // save the users to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    // return true if user has been saved successfully;
    return true;
  }

  canLogin(userCredentials: UserModel) {
    // get users from localstorage
    const currentUsers: UserModel[] = (localStorage['users']) ? JSON.parse(localStorage['users']) : [];
    if (currentUsers.length) {
      // find the user that match credentials
      const foundUser = currentUsers.find(user => {
        return user.username.toLowerCase() === userCredentials.username.toLowerCase()
          && user.password === userCredentials.password;
      });
      return (foundUser) ? foundUser : false;
    } else {
      return false;
    }
  }

  saveUser(user: UserModel) {
    localStorage.setItem('activeUser', JSON.stringify(user));
  }
}
