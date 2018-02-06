import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {RegisterPage} from "../register/register";
import {MenuPage} from "../menu/menu";
import {AuthProvider} from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    private authProvider: AuthProvider
  ) {}

  onLogin(form: NgForm): void {
    // this.authProvider.loginWithEmailAndPassword(form.value.email, form.value.password)
    //   .then(value => {
    //     console.log(value);
    //     this.navCtrl.setRoot(MenuPage);
    //   })
    //   .catch(reason => {
    //     console.log(reason);
    //   });
    this.navCtrl.setRoot(MenuPage);
  }

  onGoToRegister(): void {
    this.navCtrl.push(RegisterPage);
  }
}
