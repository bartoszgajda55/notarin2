import { Component } from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {Note} from "../../models/note.model";

@IonicPage()
@Component({
  selector: 'page-note-options',
  templateUrl: 'note-options.html',
})
export class NoteOptionsPage {
  private note: Note;

  constructor(private navParams: NavParams) {
    this.note = this.navParams.get("note");
  }

  editNote(): void {

  }

  deleteNote(): void {

  }
}
