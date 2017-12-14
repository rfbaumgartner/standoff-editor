import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandoffListComponent } from './standoff-list.component';

describe('StandoffListComponent', () => {
  let component: StandoffListComponent;
  let fixture: ComponentFixture<StandoffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandoffListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandoffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
