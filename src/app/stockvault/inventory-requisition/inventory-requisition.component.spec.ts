import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryRequisitionComponent } from './inventory-requisition.component';

describe('InventoryRequisitionComponent', () => {
  let component: InventoryRequisitionComponent;
  let fixture: ComponentFixture<InventoryRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryRequisitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
