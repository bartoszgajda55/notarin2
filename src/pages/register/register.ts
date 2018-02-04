import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {NgForm} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  onRegister(form: NgForm): void {
    console.log(form.value);
  }

}
