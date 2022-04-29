import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng sample exam';

  historicList: Array<any> = [];

  constructor(
  ) { }

  ngOnInit(): void {
    this.historicList = this.getHistoricStorage();
  }

  onSoughtItems(historicList: Array<any>) {
    this.historicList = historicList?.sort((a, b) => {
      return b.dateSearched - a.dateSearched
    });
    this.setHistoricStorage(null);
  }

  setHistoricStorage(newListState: any) {
    if(newListState) {
      this.historicList = newListState
    }

    if (this.historicList?.length) {
      localStorage.setItem('historicSeek', JSON.stringify(this.historicList))
    }
  }

  getHistoricStorage() {
    return JSON.parse(localStorage.getItem('historicSeek') as any);
  }

}
