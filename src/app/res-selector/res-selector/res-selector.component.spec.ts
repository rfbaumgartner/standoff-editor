import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResSelectorComponent } from './res-selector.component';

describe('ResSelectorComponent', () => {
  let component: ResSelectorComponent;
  let fixture: ComponentFixture<ResSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
