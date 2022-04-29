import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-default-list',
  templateUrl: './default-list.component.html',
  styleUrls: ['./default-list.component.scss']
})
export class DefaultListComponent {

  defaultPosterImg = environment.defaultPosterImg;

  @Input()
  historicList!: Array<any>;

  @Input()
  searchedList!: Array<any>;

  @Output()
  removed: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { (window as any).t = this }

  search = new FormControl();

  ngOnInit() {
    this.search.valueChanges.pipe(
      map((search) => search.trim()),
      debounceTime(1000),
      distinctUntilChanged(),
      filter((search) => search !== ''),
    ).subscribe(value => {
      this.searchedList = this.historicList.filter(m => m.Title.toLowerCase().includes(value));
    })
  }

  paginate(event: any): void {
    console.log('evento: ', event)
  }

  removeData(movie: any): void {
    const index = this.historicList.indexOf(movie);
    if (index > -1) {
      this.historicList.splice(index, 1);
      this.searchedList = this.historicList;
      this.removed.next(this.historicList)
    }
  }

  onDelete(event: KeyboardEvent) {
    if (event.key === 'Backspace' && !this.search.value) {
      this.searchedList = [...this.historicList]
    }
  }
}
