import {Injectable} from '@angular/core';
import {Database, DatabaseService, Target} from './database-service';
import {Observable, of} from 'rxjs';
import {Data} from '@angular/router';
import {newArray} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})

export class DatabaseArrayService implements DatabaseService {
  databases: Database[] = [
    {database: 'Database 1001', cpu: 4, ram: 4, group: 1, server: 'server 1001'},
    {database: 'Database 1002', cpu: 8, ram: 8, group: 1, server: 'server 1002'},
    {database: 'Database 1003', cpu: 12, ram: 12, group: 2, server: 'server 1003'},
    {database: 'Database 1004', cpu: 4, ram: 4, group: 1, server: 'server 1004'},
    {database: 'Database 1005', cpu: 8, ram: 8, group: 1, server: 'server 1005'},
    {database: 'Database 1006', cpu: 12, ram: 12, group: 2, server: 'server 1006'},
    {database: 'Database 1007', cpu: 4, ram: 4, group: 1, server: 'server 1007'},
    {database: 'Database 1008', cpu: 8, ram: 8, group: 1, server: 'server 1008'},
    {database: 'Database 1009', cpu: 12, ram: 12, group: 2, server: 'server 1009'},
    {database: 'Database 1010', cpu: 4, ram: 4, group: 1, server: 'server 1010'},
    {database: 'Database 1011', cpu: 8, ram: 8, group: 1, server: 'server 1011'},
    {database: 'Database 1012', cpu: 12, ram: 12, group: 2, server: 'server 1012'},
    {database: 'Database 1013', cpu: 4, ram: 4, group: 1, server: 'server 1013'},
    {database: 'Database 1014', cpu: 8, ram: 8, group: 1, server: 'server 1014'},
    {database: 'Database 1015', cpu: 12, ram: 12, group: 2, server: 'server 1015'},
    {database: 'Database 1016', cpu: 4, ram: 4, group: 1, server: 'server 1016'},
    {database: 'Database 1017', cpu: 8, ram: 8, group: 1, server: 'server 1017'},
    {database: 'Database 1018', cpu: 12, ram: 12, group: 2, server: 'server 1018'},
    {database: 'Database 1019', cpu: 4, ram: 4, group: 1, server: 'server 1019'},
    {database: 'Database 1020', cpu: 8, ram: 8, group: 1, server: 'server 1020'},
    {database: 'Database 1021', cpu: 12, ram: 12, group: 2, server: 'server 1021'},
    {database: 'Database 1022', cpu: 4, ram: 4, group: 1, server: 'server 1022'},
    {database: 'Database 1023', cpu: 8, ram: 8, group: 1, server: 'server 1023'},
    {database: 'Database 1024', cpu: 12, ram: 12, group: 2, server: 'server 1024'},
    {database: 'Database 1025', cpu: 4, ram: 4, group: 1, server: 'server 1025'},
    {database: 'Database 1026', cpu: 8, ram: 8, group: 1, server: 'server 1026'},
    {database: 'Database 1027', cpu: 12, ram: 12, group: 2, server: 'server 1027'},
    {database: 'Database 1028', cpu: 4, ram: 4, group: 1, server: 'server 1028'},
    {database: 'Database 1029', cpu: 8, ram: 8, group: 1, server: 'server 1029'},
    {database: 'Database 1030', cpu: 12, ram: 12, group: 2, server: 'server 1030'},
    {database: 'Database 1031', cpu: 4, ram: 4, group: 1, server: 'server 1031'},
    {database: 'Database 1032', cpu: 8, ram: 8, group: 1, server: 'server 1032'},
    {database: 'Database 1033', cpu: 12, ram: 12, group: 2, server: 'server 1033'},
    {database: 'Database 1034', cpu: 4, ram: 4, group: 1, server: 'server 1034'},
    {database: 'Database 1035', cpu: 8, ram: 8, group: 1, server: 'server 1035'},
    {database: 'Database 1036', cpu: 12, ram: 12, group: 2, server: 'server 1036'},
    {database: 'Database 1037', cpu: 4, ram: 4, group: 1, server: 'server 1037'},
    {database: 'Database 1038', cpu: 8, ram: 8, group: 1, server: 'server 1038'},
    {database: 'Database 1039', cpu: 12, ram: 12, group: 2, server: 'server 1039'},
    {database: 'Database 1040', cpu: 4, ram: 4, group: 1, server: 'server 1040'},
    {database: 'Database 1041', cpu: 8, ram: 8, group: 1, server: 'server 1041'},
    {database: 'Database 1042', cpu: 12, ram: 12, group: 2, server: 'server 1042'},
    {database: 'Database 1043', cpu: 4, ram: 4, group: 1, server: 'server 1043'},
    {database: 'Database 1044', cpu: 8, ram: 8, group: 1, server: 'server 1044'},
    {database: 'Database 1045', cpu: 12, ram: 12, group: 2, server: 'server 1045'},
    {database: 'Database 1046', cpu: 4, ram: 4, group: 1, server: 'server 1046'},
    {database: 'Database 1047', cpu: 8, ram: 8, group: 1, server: 'server 1047'},
    {database: 'Database 1048', cpu: 12, ram: 12, group: 2, server: 'server 1048'},
    {database: 'Database 1049', cpu: 4, ram: 4, group: 1, server: 'server 1049'},
    {database: 'Database 1050', cpu: 8, ram: 8, group: 1, server: 'server 1050'},
    {database: 'Database 1051', cpu: 12, ram: 12, group: 2, server: 'server 1051'},
    {database: 'Database 1052', cpu: 4, ram: 4, group: 1, server: 'server 1052'},
    {database: 'Database 1053', cpu: 8, ram: 8, group: 1, server: 'server 1053'},
    {database: 'Database 1054', cpu: 12, ram: 12, group: 2, server: 'server 1054'},
    {database: 'Database 1055', cpu: 4, ram: 4, group: 1, server: 'server 1055'},
    {database: 'Database 1056', cpu: 8, ram: 8, group: 1, server: 'server 1056'},
    {database: 'Database 1057', cpu: 12, ram: 12, group: 2, server: 'server 1057'},
    {database: 'Database 1101', cpu: 4, ram: 4, group: 1, server: 'server 1101'},
    {database: 'Database 1102', cpu: 8, ram: 8, group: 1, server: 'server 1102'},
    {database: 'Database 1103', cpu: 12, ram: 12, group: 2, server: 'server 1103'},
    {database: 'Database 1104', cpu: 4, ram: 4, group: 1, server: 'server 1104'},
    {database: 'Database 1105', cpu: 8, ram: 8, group: 1, server: 'server 1105'},
    {database: 'Database 1106', cpu: 12, ram: 12, group: 2, server: 'server 1106'},
    {database: 'Database 1107', cpu: 4, ram: 4, group: 1, server: 'server 1107'},
    {database: 'Database 1108', cpu: 8, ram: 8, group: 1, server: 'server 1108'},
    {database: 'Database 1109', cpu: 12, ram: 12, group: 2, server: 'server 1109'},
    {database: 'Database 1110', cpu: 4, ram: 4, group: 1, server: 'server 1110'},
    {database: 'Database 1111', cpu: 8, ram: 8, group: 1, server: 'server 1111'},
    {database: 'Database 1112', cpu: 12, ram: 12, group: 2, server: 'server 1112'},
    {database: 'Database 1113', cpu: 4, ram: 4, group: 1, server: 'server 1113'},
    {database: 'Database 1114', cpu: 8, ram: 8, group: 1, server: 'server 1114'},
    {database: 'Database 1115', cpu: 12, ram: 12, group: 2, server: 'server 1115'},
    {database: 'Database 1116', cpu: 4, ram: 4, group: 1, server: 'server 1116'},
    {database: 'Database 1117', cpu: 8, ram: 8, group: 1, server: 'server 1117'},
    {database: 'Database 1118', cpu: 12, ram: 12, group: 2, server: 'server 1118'},
    {database: 'Database 1119', cpu: 4, ram: 4, group: 1, server: 'server 1119'},
    {database: 'Database 1120', cpu: 8, ram: 8, group: 1, server: 'server 1120'},
    {database: 'Database 1121', cpu: 12, ram: 12, group: 2, server: 'server 1121'},
    {database: 'Database 1122', cpu: 4, ram: 4, group: 1, server: 'server 1122'},
    {database: 'Database 1123', cpu: 8, ram: 8, group: 1, server: 'server 1123'},
    {database: 'Database 1124', cpu: 12, ram: 12, group: 2, server: 'server 1124'},
    {database: 'Database 1125', cpu: 4, ram: 4, group: 1, server: 'server 1125'},
    {database: 'Database 1126', cpu: 8, ram: 8, group: 1, server: 'server 1126'},
    {database: 'Database 1127', cpu: 12, ram: 12, group: 2, server: 'server 1127'},
    {database: 'Database 1128', cpu: 4, ram: 4, group: 1, server: 'server 1128'},
    {database: 'Database 1129', cpu: 8, ram: 8, group: 1, server: 'server 1129'},
    {database: 'Database 1130', cpu: 12, ram: 12, group: 2, server: 'server 1130'},
    {database: 'Database 1131', cpu: 4, ram: 4, group: 1, server: 'server 1131'},
    {database: 'Database 1132', cpu: 8, ram: 8, group: 1, server: 'server 1132'},
    {database: 'Database 1133', cpu: 12, ram: 12, group: 2, server: 'server 1133'},
    {database: 'Database 1134', cpu: 4, ram: 4, group: 1, server: 'server 1134'},
    {database: 'Database 1135', cpu: 8, ram: 8, group: 1, server: 'server 1135'},
    {database: 'Database 1136', cpu: 12, ram: 12, group: 2, server: 'server 1136'},
    {database: 'Database 1137', cpu: 4, ram: 4, group: 1, server: 'server 1137'},
    {database: 'Database 1138', cpu: 8, ram: 8, group: 1, server: 'server 1138'},
    {database: 'Database 1139', cpu: 12, ram: 12, group: 2, server: 'server 1139'},
    {database: 'Database 1140', cpu: 4, ram: 4, group: 1, server: 'server 1140'},
    {database: 'Database 1141', cpu: 8, ram: 8, group: 1, server: 'server 1141'},
    {database: 'Database 1142', cpu: 12, ram: 12, group: 2, server: 'server 1142'},
    {database: 'Database 1143', cpu: 4, ram: 4, group: 1, server: 'server 1143'},
    {database: 'Database 1144', cpu: 8, ram: 8, group: 1, server: 'server 1144'},
    {database: 'Database 1145', cpu: 12, ram: 12, group: 2, server: 'server 1145'},
    {database: 'Database 1146', cpu: 4, ram: 4, group: 1, server: 'server 1146'},
    {database: 'Database 1147', cpu: 8, ram: 8, group: 1, server: 'server 1147'},
    {database: 'Database 1148', cpu: 12, ram: 12, group: 2, server: 'server 1148'},
    {database: 'Database 1149', cpu: 4, ram: 4, group: 1, server: 'server 1149'},
    {database: 'Database 1150', cpu: 8, ram: 8, group: 1, server: 'server 1150'},
    {database: 'Database 1151', cpu: 12, ram: 12, group: 2, server: 'server 1151'},
    {database: 'Database 1152', cpu: 4, ram: 4, group: 1, server: 'server 1152'},
    {database: 'Database 1153', cpu: 8, ram: 8, group: 1, server: 'server 1153'},
    {database: 'Database 1154', cpu: 12, ram: 12, group: 2, server: 'server 1154'},
    {database: 'Database 1155', cpu: 4, ram: 4, group: 1, server: 'server 1155'},
    {database: 'Database 1156', cpu: 8, ram: 8, group: 1, server: 'server 1156'},
    {database: 'Database 1157', cpu: 12, ram: 12, group: 2, server: 'server 1157'}
    ];
  NAMES = this.flatten(Array(1000).fill(1).map(i => this.databases));
  SIZE = Array(10000).fill(30);
  constructor() { }

  flatten(arr: any): any {
    const array: Database [] = new Array<Database>();
    while (arr.length) {
      const value = arr.shift();
      if (Array.isArray(value)) {
        // this line preserve the order
        arr = value.concat(arr);
      } else {
        array.push(value);
      }
    }
    return array;
  }

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
