import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadimagesComponent } from './uploadimages.component';

describe('UploadimagesComponent', () => {
  let component: UploadimagesComponent;
  let fixture: ComponentFixture<UploadimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
