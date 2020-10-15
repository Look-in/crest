import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraTemplateComponent } from './camera-template.component';

describe('CameraTemplateComponent', () => {
  let component: CameraTemplateComponent;
  let fixture: ComponentFixture<CameraTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
