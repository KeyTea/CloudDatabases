import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManagementComponent} from './management.component';
import {ManagementRoutingModule} from './management-routing.module';
import {MatTableFilterModule} from 'mat-table-filter';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {DatabaseService} from '../database-service';
import {DatabaseFirebaseService} from '../database-firebase.service';
import {MatSelectModule} from '@angular/material/select';
import {MatSelectFilterModule} from 'mat-select-filter';

@NgModule({
  declarations: [ManagementComponent],
  exports: [ManagementComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
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
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSelectFilterModule,
  ],
  providers: [
    {provide: DatabaseService, useClass: DatabaseFirebaseService}
  ]
})
export class ManagementModule { }
