import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundRequisitionComponent } from './inbound-requisition.component';

describe('InboundRequisitionComponent', () => {
  let component: InboundRequisitionComponent;
  let fixture: ComponentFixture<InboundRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InboundRequisitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InboundRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
