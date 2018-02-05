import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  registerWithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
