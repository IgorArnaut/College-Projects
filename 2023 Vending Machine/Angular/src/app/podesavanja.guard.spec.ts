import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { podesavanjaGuard } from './podesavanja.guard';

describe('podesavanjaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => podesavanjaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
