import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {NoteProvider} from "../../providers/note/note";
import {Observable} from "rxjs/Observable";
import {Note} from "../../models/note.model";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private notes: Observable<Note[]>;

  constructor(
    private noteProvider: NoteProvider
  ) { }

  ionViewDidLoad() {
    this.notes = this.noteProvider.getUserNotesCollection();
  }

}
