import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Note} from "../../models/note.model";
import {NoteProvider} from "../../providers/note/note";

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

  }

  deleteNote(): void {
    this.noteProvider.deleteNoteFromUserCollection(this.note)
      .then(value => {
        this.callback("Note Deleted");
        this.navCtrl.pop();
        this.navCallback();
      }).catch(reason => {
        this.callback(reason);
        this.navCtrl.pop();
        this.navCallback();
    });
  }
}
