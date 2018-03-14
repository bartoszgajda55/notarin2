import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NoteProvider} from "../../providers/note/note";
import {Note} from "../../models/note.model";
import {NgForm} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {
  callback: any;
  navCallback: any;
  private note: Note = new Note();
  title: string = "Create Note";
  editMode: boolean = false;

  constructor(
    private noteProvider: NoteProvider,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private navParams: NavParams
  ) {
    this.callback = this.navParams.get('callback');
    this.navCallback = this.navParams.get('navCallback');
    let note = this.navParams.get('note');
    if (note) {
      this.note = note;
      this.title = "Edit Note";
      this.editMode = true;
    }
  }

  saveNote(form: NgForm): void {
    this.showLoader();
    if (this.editMode) {
      this.noteProvider.updateNoteInUserNotesCollection(this.note)
        .then(value => {
          this.navCtrl.pop();
          this.callback("Note Updated");
          this.navCallback();
        })
        .catch(reason => {
          console.log(reason);
        })
    } else {
      this.noteProvider.addNoteToUserNotesCollection(this.note)
        .then(value => {
          this.callback("Note Saved").then(() => { this.navCtrl.pop() });
        })
        .catch(reason => {
          console.log(reason);
        });
    }
  }

  private showLoader() {
    let loading = this.loadingCtrl.create({
      content: 'Saving note...',
      dismissOnPageChange: true,
      duration: 2000
    });
    loading.present();
  }
}
