import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
import {MenuPage} from "../menu/menu";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    private authProvider: AuthProvider,
    private navCtrl: NavController
  ) { }

  onRegister(form: NgForm): void {
    this.authProvider.registerWithEmailAndPassword(form.value.email, form.value.password1)
      .then(value => {
        console.log(value);
        this.navCtrl.setRoot(MenuPage);
      })
      .catch(reason => {
        console.log(reason);
      });
  }
}
