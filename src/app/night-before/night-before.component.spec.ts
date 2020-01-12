import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightBeforeComponent } from './night-before.component';

describe('NightBeforeComponent', () => {
  let component: NightBeforeComponent;
  let fixture: ComponentFixture<NightBeforeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightBeforeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
