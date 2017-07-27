import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashBoardViewComponent } from './admin-dash-board-view.component';

describe('AdminDashBoardViewComponent', () => {
  let component: AdminDashBoardViewComponent;
  let fixture: ComponentFixture<AdminDashBoardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashBoardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashBoardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
