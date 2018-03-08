import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {Note} from "../../models/note.model";
import {NoteOptionsPage} from "../note-options/note-options";

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  private note: Note;
  private callback: any;

  constructor(private navParams: NavParams,
              private popoverCtrl: PopoverController,
              private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.note = this.navParams.get("note");
    this.callback = this.navParams.get("callback");
  }

  presentPopover(event): void {
    let popover = this.popoverCtrl.create(NoteOptionsPage, {
      note: this.note,
      callback: this.callback,
      navCallback: this.popToHome
    });
    popover.present({
      ev: event
    });
  }

  popToHome = () => {
    return new Promise((resolve, reject) => {
      this.navCtrl.pop();
      resolve();
    });
  }
}
