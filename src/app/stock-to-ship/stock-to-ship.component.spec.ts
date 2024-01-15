import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockToShipComponent } from './stock-to-ship.component';

describe('StockToShipComponent', () => {
  let component: StockToShipComponent;
  let fixture: ComponentFixture<StockToShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockToShipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockToShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
