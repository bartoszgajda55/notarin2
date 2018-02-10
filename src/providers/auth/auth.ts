import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Observable";
import {User} from "firebase/app";

@Injectable()
export class AuthProvider {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  registerWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  getCurrentUserState(): Observable<User> {
    return this.afAuth.authState;
  }

  logoutUser(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
