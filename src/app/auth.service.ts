import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {} 
  public currentUser = this.auth.currentUser;
  public logInUserGoogle(): void {
    if (this.currentUser != null) this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
    else console.log('UL_01: UserAlreadyLoggedInError');
  }

  
}
