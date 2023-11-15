import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { restaurantOwnerGuard } from './restaurant-owner.guard';

describe('restaurantOwnerGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => restaurantOwnerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
