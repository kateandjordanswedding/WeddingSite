import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheDayComponent } from './on-the-day.component';

describe('OnTheDayComponent', () => {
  let component: OnTheDayComponent;
  let fixture: ComponentFixture<OnTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
