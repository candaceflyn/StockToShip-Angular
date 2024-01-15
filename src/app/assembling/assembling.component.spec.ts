import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblingComponent } from './assembling.component';

describe('AssemblingComponent', () => {
  let component: AssemblingComponent;
  let fixture: ComponentFixture<AssemblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssemblingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssemblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
