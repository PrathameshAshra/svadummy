import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {environment} from '../../../../../environments/environment' ;
import firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth) { }
  loginWithGoogle(): void {
  this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
    success => {
      console.log(success);
    }
  );

  }
  logout(): void {
    this.auth.signOut();
  }
  ngOnInit(): void {
    firebase.initializeApp(environment.firebase);

  }

}
