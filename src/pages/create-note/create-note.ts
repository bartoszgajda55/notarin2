import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {NoteProvider} from "../../providers/note/note";
import {Note} from "../../models/note.model";

@IonicPage()
@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {
  textContent: string  = "";

  constructor(
    private noteProvider: NoteProvider
  ) { }

  saveNote(): void {
    // let note: Note = new Note();
  }
}
