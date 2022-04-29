import { DefaultListComponent } from './../default-list/default-list.component';
import { PaginatorModule } from './../paginator/paginator.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OMDbSearchComponent } from './omdb-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [OMDbSearchComponent, DefaultListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    PaginatorModule
  ],
  exports: [OMDbSearchComponent, DefaultListComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OMDbSearchModule {}
