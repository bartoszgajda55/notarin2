import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {NoteProvider} from "../../providers/note/note";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    private noteProvider: NoteProvider
  ) { }

  ionViewDidLoad() {
    this.noteProvider.getUserNotesCollection()
      .subscribe(value => {
        console.log(value);
      });
  }

}
