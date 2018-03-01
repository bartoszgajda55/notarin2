import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoteOptionsPage } from './note-options';

@NgModule({
  declarations: [
    NoteOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(NoteOptionsPage),
  ],
})
export class NoteOptionsPageModule {}
