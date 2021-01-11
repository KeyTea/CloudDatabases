import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {Database, DatabaseService} from './database-service';
import firebase from 'firebase';
import Firestore = firebase.firestore.Firestore;
import {AngularFirestore} from '@angular/fire/firestore';
const COLLECTION = 'databases';

@Injectable({
  providedIn: 'root'
})

export class DatabaseFirebaseService implements DatabaseService {

  constructor(private firestore: AngularFirestore) {
  }

  getDatabases(): Observable<Database[]> {
    return this.firestore.collection<Database>(COLLECTION)
      .valueChanges();

  }

  getDatabase(database: string): Observable<Database> {
    return this.firestore.collection<Database>(COLLECTION).doc('' + database).get().pipe(map(d =>
      d.data() as Database));
  }
}
