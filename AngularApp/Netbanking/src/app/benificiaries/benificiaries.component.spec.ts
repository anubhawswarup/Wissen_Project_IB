import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenificiariesComponent } from './benificiaries.component';

describe('BenificiariesComponent', () => {
  let component: BenificiariesComponent;
  let fixture: ComponentFixture<BenificiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenificiariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenificiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
