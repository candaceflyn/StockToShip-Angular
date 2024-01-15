import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAnalyzerComponent } from './location-analyzer.component';

describe('LocationAnalyzerComponent', () => {
  let component: LocationAnalyzerComponent;
  let fixture: ComponentFixture<LocationAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationAnalyzerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
