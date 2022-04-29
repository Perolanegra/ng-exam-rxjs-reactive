import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMDbSearchWithoutRxJSComponent } from './omdb-search-wo-rxjs.component';

describe('OMDbSearchComponent', () => {
  let component: OMDbSearchWithoutRxJSComponent;
  let fixture: ComponentFixture<OMDbSearchWithoutRxJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OMDbSearchWithoutRxJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OMDbSearchWithoutRxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
