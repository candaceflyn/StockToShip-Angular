import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareyougoComponent } from './wareyougo.component';

describe('WareyougoComponent', () => {
  let component: WareyougoComponent;
  let fixture: ComponentFixture<WareyougoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WareyougoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WareyougoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
