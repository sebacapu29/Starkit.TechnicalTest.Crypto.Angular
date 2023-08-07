import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MaterialModule { }
