import {Observable} from 'rxjs';

export enum Target {
  POST12 = 'GCP Cloud SQL PostgreSQL 12',
  MY8 = 'GCP Cloud SQL MySQL 8'
}

export class Database {
  cpu: number;
  cost: number;
  database: string;
  group: number;
  instance: string;
  ram: number;
  server: string;
  target: Target;
}

export class Database2 {
  // cost: number;
  cpu: number;
  database: string;
  group: number;
  ram: number;
  server: string;
}

export abstract class DatabaseService {
  abstract getDatabases(): Observable<Database[]>;
  abstract getDatabase(database: string): Observable<Database>;
  // abstract addBook(database: Database): Observable<boolean>;
  // abstract removeBook(id: number): Observable<boolean>;
}
