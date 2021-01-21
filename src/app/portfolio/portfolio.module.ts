import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {MatTableFilterModule} from 'mat-table-filter';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MainModule} from '../main/main.module';
import {DatabaseService} from '../database-service';
import {DatabaseArrayService} from '../database-array.service';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [PortfolioComponent],
  exports: [
    PortfolioComponent
  ],
    imports: [
        CommonModule,
        PortfolioRoutingModule,
        MatTableFilterModule,
        MatTableModule,
        FormsModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSortModule,
        MatFormFieldModule,
        MatDividerModule,
        MainModule,
        ScrollingModule,
    ],
  providers: [
    {provide: DatabaseService, useClass: DatabaseArrayService}
    ]
    })
export class PortfolioModule { }
