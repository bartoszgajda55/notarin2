import {Injectable} from '@angular/core';
import {AuthProvider} from "../auth/auth";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Note} from "../../models/note.model";
import {Observable} from "rxjs/Observable";
import * as firebase from "firebase/app";
import DocumentReference = firebase.firestore.DocumentReference;

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
    return this.notesCollection.snapshotChanges().map(data => {
      return data.map(a => {
        const note = a.payload.doc.data() as Note;
        note.id = a.payload.doc.id;
        return note;
      });
    });
  }

  addNoteToUserNotesCollection(note: Note): Promise<DocumentReference> {
    let data = JSON.parse(JSON.stringify(note)); // Looks stupid but it works
    return this.notesCollection.add(data);
  }

  deleteNoteFromUserNotesCollection(note: Note): Promise<void> {
    return this.notesCollection.doc(note.id).delete()
  }

  updateNoteInUserNotesCollection(note: Note): Promise<void> {
    return this.notesCollection.doc(note.id).set(note);
  }

}
