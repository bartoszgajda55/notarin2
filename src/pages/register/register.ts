import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController} from 'ionic-angular';
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
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  onRegister(form: NgForm): void {
    if (form.value.password1 !== form.value.password2) {
      let toast = this.toastCtrl.create({
        message: "Passwords don't match",
        duration: 2000,
        position: 'top'
      });
      toast.present();
      return null;
    }
    let loading = this.loadingCtrl.create({
      content: 'Registering....',
      dismissOnPageChange: true
    });
    loading.present();
    this.authProvider.registerWithEmailAndPassword(form.value.email, form.value.password1)
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
  }
}
