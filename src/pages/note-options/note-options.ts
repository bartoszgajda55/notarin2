import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Note} from "../../models/note.model";
import {NoteProvider} from "../../providers/note/note";
import {CreateNotePage} from "../create-note/create-note";

@IonicPage()
@Component({
  selector: 'page-note-options',
  templateUrl: 'note-options.html',
})
export class NoteOptionsPage {
  private note: Note;
  private callback: any;
  private navCallback: any;

  constructor(private navParams: NavParams,
              private noteProvider: NoteProvider,
              private navCtrl: NavController) {
    this.note = this.navParams.get("note");
    this.callback = this.navParams.get("callback");
    this.navCallback = this.navParams.get("navCallback");
  }

  editNote(): void {
    this.navCtrl.push(CreateNotePage, {
      note: this.note,
      callback: this.callback,
      navCallback: this.popPopover()
    });
  }

  deleteNote(): void {
    this.noteProvider.deleteNoteFromUserNotesCollection(this.note)
      .then(value => {
        this.navCtrl.pop();
        this.callback("Note Deleted");
        this.navCallback();
      }).catch(reason => {
        this.navCtrl.pop();
        this.callback(reason);
        this.navCallback();
    });
  }

  popPopover = () => {
    return new Promise((resolve, reject) => {
      this.navCtrl.pop();
      resolve();
    });
  }
}
