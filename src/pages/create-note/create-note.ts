import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {NoteProvider} from "../../providers/note/note";
import {Note} from "../../models/note.model";
import {NgForm} from "@angular/forms";
import {Category} from "../../models/category.model";

@IonicPage()
@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {

  constructor(
    private noteProvider: NoteProvider,
    private navCtrl: NavController
  ) { }

  saveNote(form: NgForm): void {
    this.noteProvider.addNoteToUserNotesCollection(
      new Note(form.value.title, form.value.noteText, new Category("General"), [], []))
      .then(value => {
        this.navCtrl.pop();
      })
      .catch(reason => {
        console.log(reason);
      });
  }
}
