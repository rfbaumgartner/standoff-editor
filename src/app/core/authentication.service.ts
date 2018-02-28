import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private user;
  private password;
  private authorization = {
    'Authorization': 'Basic ' + btoa('')
  };

  constructor() { }

  login(user, password) {
    this.user = user;
    this.password = password;
    this.authorization = {
      'Authorization': 'Basic ' + btoa(user + ':' + password)
    };
  }

  getAuthorization() {
    return this.authorization;
  }

}
