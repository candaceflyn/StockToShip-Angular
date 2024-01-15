import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockvaultComponent } from './stockvault.component';

describe('StockvaultComponent', () => {
  let component: StockvaultComponent;
  let fixture: ComponentFixture<StockvaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockvaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockvaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
