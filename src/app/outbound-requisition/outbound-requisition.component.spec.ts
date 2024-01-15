import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboundRequisitionComponent } from './outbound-requisition.component';

describe('OutboundRequisitionComponent', () => {
  let component: OutboundRequisitionComponent;
  let fixture: ComponentFixture<OutboundRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutboundRequisitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutboundRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
