import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BusFacade } from '../store/bus.facade';

describe('BusFacade', () => {
  let facade: BusFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    facade = TestBed.inject(BusFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('#busLines$ should return value from observable', () => {
    facade.busLines$.subscribe(value => expect(value).toBeTruthy())
  });

  it('#busStations$ should return value from observable', () => {
    facade.busStations$.subscribe(value => expect(value).toBeTruthy())
  });

});
