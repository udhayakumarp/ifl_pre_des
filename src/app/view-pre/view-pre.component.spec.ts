import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPreComponent } from './view-pre.component';

describe('ViewPreComponent', () => {
  let component: ViewPreComponent;
  let fixture: ComponentFixture<ViewPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
