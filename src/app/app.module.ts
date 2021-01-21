import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTableFilterModule} from 'mat-table-filter';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MainModule} from './main/main.module';
import {MainComponent} from './main/main.component';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {FirebaseAppConfig} from '@angular/fire/firebase.app.module';
import { ScrollComponent } from './scroll/scroll.component';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
// export const firebaseConfig = environment.firebase;

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ScrollComponent,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule,
    // AngularFirestoreModule
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatTableFilterModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MainModule
  ],
  providers: [],
  exports: [
    MainComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
