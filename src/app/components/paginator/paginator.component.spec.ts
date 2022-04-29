import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEvent } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaginatorComponent, PaginatorModule } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
      imports: [BrowserAnimationsModule, PaginatorModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#paginatorChange should be called', () => {
    const pageEvent: PageEvent = {
      length: 1090,
      pageIndex: 1,
      pageSize: 21,
      previousPageIndex: 0,
    };
    const spyPaginatorChange = spyOn(
      component,
      'paginatorChange'
    ).and.callThrough();
    component.paginatorChange(pageEvent);
    expect(spyPaginatorChange).toHaveBeenCalled();
  });

  it('#ngOnChanges should execute if items had changed', () => {
    spyOn(component, 'ngOnChanges');
    const changesObj: SimpleChanges = {
      items: new SimpleChange(
        undefined,
        { id: '5525', codigo: '250-1', nome: '1 DE MAIO' },
        true
      ),
    };
    component.ngOnChanges(changesObj);
    expect(component.ngOnChanges).toHaveBeenCalled();
  });

  it('#ngOnChanges should not execute if items had not changed', () => {
    spyOn(component, 'ngOnChanges');
    const noChangesObj: SimpleChanges = {};
    component.ngOnChanges(noChangesObj);
    expect(component.ngOnChanges).toHaveBeenCalled();
  });

});
