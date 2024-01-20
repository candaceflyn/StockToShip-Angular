import { TestBed } from '@angular/core/testing';

import { InboundProductService } from './inbound-product.service';

describe('InboundProductService', () => {
  let service: InboundProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InboundProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
