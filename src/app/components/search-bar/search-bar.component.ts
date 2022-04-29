import { Bus } from 'src/app/interfaces/bus.interface';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Input() items = new Array<Bus>();
  @Input() searchControl = new FormControl();

  constructor() {}
}

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [SearchBarComponent],
  declarations: [SearchBarComponent],
  providers: [],
})
export class SearchBarModule {}
