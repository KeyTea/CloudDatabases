import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {MatTableFilterModule} from 'mat-table-filter';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {AppModule} from '../app.module';
import {TopComponent} from '../top/top.component';
import {TabsComponent} from '../tabs/tabs.component';

@NgModule({
  declarations: [
    // MainComponent,
    TopComponent,
    TabsComponent
  ],
  exports: [
    TopComponent,
    TabsComponent
  ],
  // exports: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
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
    // AppModule
  ]
})
export class MainModule { }
