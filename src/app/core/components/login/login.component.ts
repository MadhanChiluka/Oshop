import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) { 
  }

  loginFacebook() { 
    this.auth.login(new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle() {
    this.auth.login(new firebase.auth.GoogleAuthProvider());
  }
  

}
