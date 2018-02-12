import { Component } from '@angular/core';
import {ActionSheetController, NavController} from "ionic-angular";
import {CreateNotePage} from "../../pages/create-note/create-note";

@Component({
  selector: 'action-sheet',
  templateUrl: 'action-sheet.html'
})
export class ActionSheetComponent {

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController
  ) {}

  presentActionSheet(): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose type of note to create',
      buttons: [
        {
          text: 'Text Note',
          icon: 'create',
          handler: () => {
            this.navCtrl.push(CreateNotePage);
          }
        },{
          text: 'Item List',
          icon: 'list',
          handler: () => {
            this.navCtrl.push(CreateNotePage);
          }
        },{
          text: 'Image Note',
          icon: 'image',
          handler: () => {
            this.navCtrl.push(CreateNotePage);
          }
        },{
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
