import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestBoxComponent } from './suggest-box.component';

describe('SuggestBoxComponent', () => {
  let component: SuggestBoxComponent;
  let fixture: ComponentFixture<SuggestBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
