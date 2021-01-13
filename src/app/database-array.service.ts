import {Injectable} from '@angular/core';
import {Database, DatabaseService, Target} from './database-service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseArrayService implements DatabaseService {
  databases: Database[] = [
    {cost: 1450, cpu: 4, database: 'Database A', group: 1, instance: 'instance A', ram: 4, server: 'server A', target: Target.POST12}
    ];
  constructor() { }

  addDatabase(database: Database): Observable<boolean> {
    if (this.databases.find(db => db.database === db.database)) {
      return of(false);
    }
    this.databases.push(database);
    return of(true);
  }

  getDatabase(database: string): Observable<Database> {
    return of(this.databases.find(db => db.database === database));
  }

  getDatabases(): Observable<Database[]> {
    return of(this.databases);
  }

  removeDatabase(database: string): Observable<boolean> {
    const index = this.databases.findIndex(db => db.database === database);
    if (index < 0) {
      return of(false);
    }
    this.databases.splice(index, 1);
  }
}
