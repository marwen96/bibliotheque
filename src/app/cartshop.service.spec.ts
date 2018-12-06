import { TestBed } from '@angular/core/testing';

import { CartshopService } from './cartshop.service';

describe('CartshopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartshopService = TestBed.get(CartshopService);
    expect(service).toBeTruthy();
  });
});
