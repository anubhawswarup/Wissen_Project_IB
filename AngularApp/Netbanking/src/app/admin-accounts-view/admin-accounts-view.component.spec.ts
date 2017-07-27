import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountsViewComponent } from './admin-accounts-view.component';

describe('AdminAccountsViewComponent', () => {
  let component: AdminAccountsViewComponent;
  let fixture: ComponentFixture<AdminAccountsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccountsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
