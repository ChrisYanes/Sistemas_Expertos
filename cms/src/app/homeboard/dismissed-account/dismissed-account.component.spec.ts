import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissedAccountComponent } from './dismissed-account.component';

describe('DismissedAccountComponent', () => {
  let component: DismissedAccountComponent;
  let fixture: ComponentFixture<DismissedAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DismissedAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DismissedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
