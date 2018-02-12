import { Component } from '@angular/core';
import {ActionSheetController} from "ionic-angular";

@Component({
  selector: 'action-sheet',
  templateUrl: 'action-sheet.html'
})
export class ActionSheetComponent {

  constructor(
    private actionSheetCtrl: ActionSheetController
  ) {}

  presentActionSheet(): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose type of note to create',
      buttons: [
        {
          text: 'Text Note',
          icon: 'create',
          handler: () => {
            console.log('Text clicked');
          }
        },{
          text: 'Item List',
          icon: 'list',
          handler: () => {
            console.log('Item clicked');
          }
        },{
          text: 'Image Note',
          icon: 'image',
          handler: () => {
            console.log('Image clicked');
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
