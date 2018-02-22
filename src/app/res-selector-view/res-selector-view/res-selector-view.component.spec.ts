import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResSelectorViewComponent } from './res-selector-view.component';

describe('ResSelectorViewComponent', () => {
  let component: ResSelectorViewComponent;
  let fixture: ComponentFixture<ResSelectorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResSelectorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResSelectorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
