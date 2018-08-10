import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendMainComponent } from './recommend-main.component';

describe('RecommendMainComponent', () => {
  let component: RecommendMainComponent;
  let fixture: ComponentFixture<RecommendMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
