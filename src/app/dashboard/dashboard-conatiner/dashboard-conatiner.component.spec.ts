import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConatinerComponent } from './dashboard-conatiner.component';

describe('DashboardConatinerComponent', () => {
  let component: DashboardConatinerComponent;
  let fixture: ComponentFixture<DashboardConatinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConatinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
