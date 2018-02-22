import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandoffEditViewComponent } from './standoff-edit-view.component';

describe('StandoffEditViewComponent', () => {
  let component: StandoffEditViewComponent;
  let fixture: ComponentFixture<StandoffEditViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandoffEditViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandoffEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
