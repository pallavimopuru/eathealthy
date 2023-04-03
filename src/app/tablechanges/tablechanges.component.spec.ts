import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablechangesComponent } from './tablechanges.component';

describe('TablechangesComponent', () => {
  let component: TablechangesComponent;
  let fixture: ComponentFixture<TablechangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablechangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablechangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
