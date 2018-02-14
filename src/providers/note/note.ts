import {Injectable} from '@angular/core';
import {AuthProvider} from "../auth/auth";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Note} from "../../models/note.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NoteProvider {
  private notesCollection: AngularFirestoreCollection<Note>;
  private userId: string;

  constructor(private authProvider: AuthProvider,
              private afs: AngularFirestore) {
    this.authProvider.getCurrentUserState().subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }

  getUserNotesCollection(): Observable<Note[]> {
    this.notesCollection = this.afs.collection<Note>('/users/' + this.userId + '/notes');
    return this.notesCollection.valueChanges();
  }

}