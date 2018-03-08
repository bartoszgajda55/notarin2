import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
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
              private navCtrl: NavController,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.notes = this.noteProvider.getUserNotesCollection();
  }

  displayNote(note: Note): void {
    this.navCtrl.push(ViewNotePage, {note: note, callback: this.showToaster});
  }

  showToaster = (message) => {
    return new Promise((resolve, reject) => {
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      resolve();
    });
  }

}
