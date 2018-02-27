import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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
  callback: any;

  constructor(
    private noteProvider: NoteProvider,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private navParams: NavParams
  ) {
    this.callback = this.navParams.get('callback');
  }

  saveNote(form: NgForm): void {
    let loading = this.loadingCtrl.create({
      content: 'Saving note...',
      dismissOnPageChange: true
    });
    loading.present();
    this.noteProvider.addNoteToUserNotesCollection(
      new Note(form.value.title, form.value.noteText, new Category("General"), [], []))
      .then(value => {
        this.callback("Note Saved").then(() => { this.navCtrl.pop() });
      })
      .catch(reason => {
        console.log(reason);
      });
  }
}
