import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent implements OnInit {

  user: string;
  password: string;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.user, this.password);
  }

}
