import { environment } from './../../../environments/environment';
import { OMDbService } from 'src/app/core/services/omdb.service';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  switchMap,
  pluck,
  retry,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, ChangeDetectionStrategy, Output } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'omdb-search',
  templateUrl: './omdb-search.component.html',
  styleUrls: ['./omdb-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OMDbSearchComponent {

  defaultPosterImg = environment.defaultPosterImg;
  pageSize = 10;
  pagIndex = 0;

  constructor(private service: OMDbService) { (window as any).t = this; }
  //Com RxJS
  //Sem filtro

  search = new FormControl();
  storedArray: any[] = new Array<any>();

  @Output()
  soughtItems: BehaviorSubject<any> = new BehaviorSubject(null);

  base$: Observable<any> = this.search.valueChanges.pipe(
    map((search) => search.trim()),
    debounceTime(1000),
    distinctUntilChanged(),
    filter((search) => search !== ''),
    switchMap((search) => {
      return this.service.searchByTitle(search).pipe(retry(3))
    }
    )
  );

  totalResults$: Observable<any> = this.base$.pipe(pluck('totalResults'));
  movies$: Observable<any> = this.base$.pipe(pluck('Search'));

  ngOnInit() {
    this.movies$.pipe(
      distinctUntilChanged(),
      switchMap((val) => val)
    ).subscribe((value : any) => {
      value.dateSearched = new Date();
      this.storedArray.push(value);
      this.soughtItems.next(this.storedArray);
    })
  }

  getDetails(movie: any) {
    alert('look console please');
    console.log('im on details with the movie specs: ', movie);
  }

  paginate(event: any) {
    console.log('evento: ', event)
  }

}
