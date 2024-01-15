import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockWatchComponent } from './stock-watch.component';

describe('StockWatchComponent', () => {
  let component: StockWatchComponent;
  let fixture: ComponentFixture<StockWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockWatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
