import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsatrapComponent } from './bootsatrap.component';

describe('BootsatrapComponent', () => {
  let component: BootsatrapComponent;
  let fixture: ComponentFixture<BootsatrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootsatrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootsatrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
