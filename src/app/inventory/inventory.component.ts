import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Database, DatabaseService, Target} from '../database-service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableFilter} from 'mat-table-filter';
import {MatSort} from '@angular/material/sort';
import {AngularFirestore} from '@angular/fire/firestore';

const DATABASES: Database[] = [
  {database: 'Database A', instance: 'instance A', server: 'server A', cpu: 4, ram: 4, group: 1, target: Target.POST12, cost: 1450},
  {database: 'Database B', instance: 'instance B', server: 'server B', cpu: 8, ram: 8, group: 1, target: Target.POST12, cost: 3000},
  {database: 'Database C', instance: 'instance C', server: 'server C', cpu: 12, ram: 12, group: 2, target: Target.MY8, cost: 5000}
];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {
  databases: Database[];
  dataSource: MatTableDataSource<Database>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = Object.keys(DATABASES[0]).toString().split(',');
  // dataSource = new MatTableDataSource(DATABASES);
  pageSizes = [5, 10, 20, 50, 100];
  filterEntity: Database;
  filterType: MatTableFilter;
  regex = '^[0-9]';
  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.filterEntity = new Database();
    this.filterType = MatTableFilter.ANYWHERE;
    this.databaseService.getDatabases().subscribe(db => {

    });
    this.databaseService.getDatabases().subscribe(db => {
        this.dataSource = new MatTableDataSource<Database>(db);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  totalDB(): number {
    return DATABASES.length;
  }
  totalCost(): number {
    let totalCost = 0;
    DATABASES.forEach(db => {
      totalCost += db.cost;
    });
    return totalCost;
}

  ifNumber(cellElement: any): boolean {
    return Number(cellElement).valueOf() > 0 ? true : false;
  }
}



