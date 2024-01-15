import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarodriveComponent } from './carodrive.component';

describe('CarodriveComponent', () => {
  let component: CarodriveComponent;
  let fixture: ComponentFixture<CarodriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarodriveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarodriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
