import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundProductComponent } from './inbound-product.component';

describe('InboundProductComponent', () => {
  let component: InboundProductComponent;
  let fixture: ComponentFixture<InboundProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboundProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InboundProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
