import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextChargesComponent } from './next-charges.component';

describe('NextChargesComponent', () => {
  let component: NextChargesComponent;
  let fixture: ComponentFixture<NextChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
