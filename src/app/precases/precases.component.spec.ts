import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecasesComponent } from './precases.component';

describe('PrecasesComponent', () => {
  let component: PrecasesComponent;
  let fixture: ComponentFixture<PrecasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
