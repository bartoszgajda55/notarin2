import { Component } from '@angular/core';
import {ActionSheetController, NavController, ToastController} from "ionic-angular";
import {CreateNotePage} from "../../pages/create-note/create-note";

@Component({
  selector: 'action-sheet',
  templateUrl: 'action-sheet.html'
})
export class ActionSheetComponent {

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  presentActionSheet(): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose type of note to create',
      buttons: [
        {
          text: 'Text Note',
          icon: 'create',
          handler: () => {
            this.navCtrl.push(CreateNotePage, {
              callback: this.showToaster
            });
          }
        },{
          text: 'Item List',
          icon: 'list',
          handler: () => {
            // this.navCtrl.push(CreateNotePage);
          }
        },{
          text: 'Image Note',
          icon: 'image',
          handler: () => {
            // this.navCtrl.push(CreateNotePage);
          }
        },{
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    actionSheet.present();
  }

  showToaster = (message) => {
    return new Promise((resolve, reject) => {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      resolve();
    });
  }

}
