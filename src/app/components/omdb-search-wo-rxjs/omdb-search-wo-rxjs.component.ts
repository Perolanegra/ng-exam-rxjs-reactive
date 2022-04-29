import { Component, OnInit } from '@angular/core';
import { OMDbService } from 'src/app/core/services/omdb.service';

@Component({
  selector: 'omdb-search-wo-rxjs',
  templateUrl: './omdb-search-wo-rxjs.component.html',
  styleUrls: ['./omdb-search-wo-rxjs.component.scss'],
})
export class OMDbSearchWithoutRxJSComponent implements OnInit {
  results = new Array<any>();

  constructor(private service: OMDbService) {}

  ngOnInit(): void {}

  shouldRenderImg(img: any) {
    return Boolean(img.data.thumbnail.startsWith('https'));
  }

  doSearch({ target }: KeyboardEvent) {
    const { value } = target as HTMLInputElement;
    this.service.searchByTitle(value).subscribe(({ Search }) => {
      this.results = [...Search];
    });
  }

}
