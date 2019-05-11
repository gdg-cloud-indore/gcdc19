import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsdeatilsComponent } from './eventsdeatils.component';

describe('EventsdeatilsComponent', () => {
  let component: EventsdeatilsComponent;
  let fixture: ComponentFixture<EventsdeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsdeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsdeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
