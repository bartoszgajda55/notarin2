import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {RegisterPage} from "../register/register";

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
    console.log(form.value);
  }

  onGoToRegister(): void {
    this.navCtrl.push(RegisterPage);
  }
}
