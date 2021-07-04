import { TestBed } from '@angular/core/testing';

import { UpdateShoppingCartService } from '../services/update-shopping-cart.service';

describe('UpdateShoppingCartService', () => {
  let service: UpdateShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateShoppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
