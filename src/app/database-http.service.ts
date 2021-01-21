import { Injectable } from '@angular/core';
import {Database, DatabaseService} from './database-service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Data} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseHttpService implements DatabaseService {
  url = 'http://localhost:4200/inventory';

  constructor(private httpClient: HttpClient) {
  }

  getDatabases(): Observable<Database[]> {
    return this.httpClient.get<Database[]>(this.url);
  }

  getDatabase(database: string): Observable<Database> {
    return this.httpClient.get<Database>(`${this.url}/${database}`);
  }

  addDatabase(database: Database): Observable<boolean> {
    return this.httpClient.post<Database>(this.url, database).pipe(map(db => db ? true : false));
  }

  removeDatabase(name: string): Observable<boolean> {
    return this.httpClient.delete(`${this.url}/${name}`).pipe(map(() => true ));
  }
}
