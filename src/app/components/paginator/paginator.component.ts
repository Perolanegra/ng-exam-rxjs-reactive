import { Bus } from 'src/app/interfaces/bus.interface';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NgModule } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() items = new Array<any>();
  @Input() itemsLength!: string;
  @Input() pageSize = 10;
  @Output() onChange = new Subject<{ currentPage: number; pageSize: number }>();
  pageSizeOptions: number[] = [];
  pageEvent!: PageEvent;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  currentOne: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.getRangeLabel = (
      page: number,
      pageSize: number,
      length: number
    ) => {
      if (length === 0 || pageSize === 0) {
        return `0 à ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex =
        startIndex < length
          ? Math.min(startIndex + pageSize, length)
          : startIndex + pageSize;
      return `${this.currentOne} - ${endIndex} de ${length}`;
    };
    this.paginator._intl.nextPageLabel = 'Próxima página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) this.paginator.firstPage();
  }

  paginatorChange(event: PageEvent) {
    this.currentOne = event.pageIndex + 1;
    this.onChange.next({
      currentPage: event.pageIndex + 1,
      pageSize: event.pageSize,
    });
  }
}

@NgModule({
  imports: [MatPaginatorModule],
  exports: [PaginatorComponent],
  declarations: [PaginatorComponent],
})
export class PaginatorModule {}
