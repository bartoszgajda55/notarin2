import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {RegisterPage} from "../register/register";
import {MenuPage} from "../menu/menu";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController
  ) {}

  onLogin(form: NgForm): void {
    this.navCtrl.setRoot(MenuPage);
  }

  onGoToRegister(): void {
    this.navCtrl.push(RegisterPage);
  }
}
