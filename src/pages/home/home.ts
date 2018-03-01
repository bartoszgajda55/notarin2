import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {NoteProvider} from "../../providers/note/note";
import {Observable} from "rxjs/Observable";
import {Note} from "../../models/note.model";
import {ViewNotePage} from "../view-note/view-note";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private notes: Observable<Note[]>;

  constructor(private noteProvider: NoteProvider,
              private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.notes = this.noteProvider.getUserNotesCollection();
  }

  displayNote(note: Note): void {
    this.navCtrl.push(ViewNotePage, {note: note});
  }

}
