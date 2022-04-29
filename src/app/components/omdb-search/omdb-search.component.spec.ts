import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMDbSearchComponent } from './omdb-search.component';

describe('OMDbSearchComponent', () => {
  let component: OMDbSearchComponent;
  let fixture: ComponentFixture<OMDbSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OMDbSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OMDbSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
