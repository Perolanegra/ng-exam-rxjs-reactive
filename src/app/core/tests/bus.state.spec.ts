import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BusState } from '../store/states/bus.state';


describe('BusState', () => {
  let state: BusState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    state = TestBed.inject(BusState);
  });

  it('should be created', () => {
    expect(state).toBeTruthy();
  });

  it('#busLines$ should return value from observable', () => {
    state.busLines$.subscribe(value => expect(value).toBeTruthy())
  });

  it('#busStations$ should return value from observable', () => {
    state.busStations$.subscribe(value => expect(value).toBeTruthy())
  });

});
