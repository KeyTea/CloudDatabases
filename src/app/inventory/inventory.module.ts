import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InventoryRoutingModule} from './inventory-routing.module';
import {MatTableFilterModule} from 'mat-table-filter';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {InventoryComponent} from './inventory.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MainModule} from '../main/main.module';
import {DatabaseService} from '../database-service';
import {DatabaseFirebaseService} from '../database-firebase.service';

@NgModule({
  declarations: [InventoryComponent],
  exports: [InventoryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MatTableFilterModule,
    MatTableModule,
    FormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatSortModule,
    MatTabsModule,
    MatDividerModule,
    MatGridListModule,
    MainModule,
  ],
  providers: [
    {provide: DatabaseService, useClass: DatabaseFirebaseService}
  ]
})
export class InventoryModule { }
