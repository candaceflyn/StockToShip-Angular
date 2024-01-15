import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankingComponent } from './blanking.component';

describe('BlankingComponent', () => {
  let component: BlankingComponent;
  let fixture: ComponentFixture<BlankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
