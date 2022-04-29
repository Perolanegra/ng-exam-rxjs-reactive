import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OMDbSearchWithoutRxJSComponent } from './omdb-search-wo-rxjs.component';

@NgModule({
  declarations: [OMDbSearchWithoutRxJSComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  exports: [OMDbSearchWithoutRxJSComponent],
})
export class OMDbSearchWithoutRxJSModule { }
