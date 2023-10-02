import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';

import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  //inject firebase class in the constructor
  constructor(private fs: Firestore) {}

  getNotes() {
    //create a reference to our notes collection
    let notesCollection = collection(this.fs, 'notes');
    //collection data fetches all the data from firestore
    return collectionData(notesCollection, { idField: 'field' });
  }

  addNotes(desc: string) {
    //create notes object to be sent
    let data = { description: desc };
    let notesCollection = collection(this.fs, 'notes');
    //make use of addDoc method to add new notes
    return addDoc(notesCollection, data);
  }

  deleteNote(id: string) {
    let docRef = doc(this.fs, 'notes/' + id);
    return deleteDoc(docRef);
  }
}
