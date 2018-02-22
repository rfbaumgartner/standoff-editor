import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainTextEnterViewComponent } from './plain-text-enter-view.component';

describe('PlainTextEnterViewComponent', () => {
  let component: PlainTextEnterViewComponent;
  let fixture: ComponentFixture<PlainTextEnterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainTextEnterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainTextEnterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
