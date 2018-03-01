import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {Note} from "../../models/note.model";

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  private note: Note;

  constructor(private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.note = this.navParams.get("note");
  }
}
