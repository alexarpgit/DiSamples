import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlInputTextComponent } from './control-input-text.component';

describe('ControlInputTextComponent', () => {
  let component: ControlInputTextComponent;
  let fixture: ComponentFixture<ControlInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
