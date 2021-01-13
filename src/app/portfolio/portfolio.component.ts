import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableFilter} from 'mat-table-filter';
import {Database, DatabaseService} from '../database-service';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

const DATABASES: Database[] = [
  {name: 'Database A', cpu: 4, ram: 4, group: 1, server: 'server A'},
  {name: 'Database B', cpu: 8, ram: 8, group: 1, server: 'server B'},
  {name: 'Database C', cpu: 12, ram: 12, group: 2, server: 'server C'}
];

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit, AfterViewInit {
  databases: Database[];
  // dataSource: MatTableDataSource<Database>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // displayedColumns: string [] = ['database', 'instance', 'server', 'cpu',  'ram', 'group', 'target', 'cost'];
  // displayedColumns = Object.keys(ELEMENT_DATA[0]).toString().split(',');
  displayedColumns = Object.keys(DATABASES[0]).toString().split(',');
  dataSource = new MatTableDataSource(DATABASES);
  pageSizes = [5, 10, 20, 50, 100];
  filterEntity: Database;
  filterType: MatTableFilter;
  // item: AngularFirestoreDocument<any>;
  // private db: AngularFirestore;

  // constructor(private databaseService: DatabaseService, private dialog: MatDialog) {
  // }

  ngOnInit(): void {
    this.filterEntity = new Database();
    this.filterType = MatTableFilter.ANYWHERE;
    this.dataSource = new MatTableDataSource(DATABASES);
    // this.item = this.db.doc('item'); // or Observable<any> item = this.db.doc('item').valueChanges();
    // this.filterEntity = new Database();
    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    // this.databaseService.getDatabases().subscribe(db => {
    //     this.dataSource = new MatTableDataSource<Database>(db);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   }
    // );
  }
  // applyFilter(filterValue: string): void {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  ngAfterViewInit(): void  {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}



