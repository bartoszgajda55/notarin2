import {Component} from '@angular/core';
import {IonicPage, NavParams, PopoverController} from 'ionic-angular';
import {Note} from "../../models/note.model";
import {NoteOptionsPage} from "../note-options/note-options";

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  private note: Note;

  constructor(private navParams: NavParams, private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    this.note = this.navParams.get("note");
  }

  presentPopover(event): void {
    let popover = this.popoverCtrl.create(NoteOptionsPage, {note: this.note});
    popover.present({
      ev: event
    });
  }
}
