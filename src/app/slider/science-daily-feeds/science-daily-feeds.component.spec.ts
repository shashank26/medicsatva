import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceDailyFeedsComponent } from './science-daily-feeds.component';

describe('ScienceDailyFeedsComponent', () => {
  let component: ScienceDailyFeedsComponent;
  let fixture: ComponentFixture<ScienceDailyFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceDailyFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceDailyFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
