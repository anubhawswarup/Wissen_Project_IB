import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastLogInComponent } from './last-log-in.component';

describe('LastLogInComponent', () => {
  let component: LastLogInComponent;
  let fixture: ComponentFixture<LastLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
