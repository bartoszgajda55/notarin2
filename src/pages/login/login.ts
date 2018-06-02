import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController} from 'ionic-angular';
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
    private authProvider: AuthProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  onLogin(form: NgForm): void {
    let loading = this.loadingCtrl.create({
      content: 'Logging you in...',
      dismissOnPageChange: true
    });
    loading.present();
    this.authProvider.loginWithEmailAndPassword(form.value.email, form.value.password)
    // this.authProvider.loginWithEmailAndPassword("test@test.com", "password")
      .then(value => {
        this.navCtrl.setRoot(MenuPage);
      })
      .catch(reason => {
        loading.dismiss();
        let toast = this.toastCtrl.create({
          message: reason.message,
          duration: 2000,
          position: 'top'
        });
        toast.present();
      });
    // this.navCtrl.setRoot(MenuPage);
  }

  onGoToRegister(): void {
    this.navCtrl.push(RegisterPage);
  }
}
