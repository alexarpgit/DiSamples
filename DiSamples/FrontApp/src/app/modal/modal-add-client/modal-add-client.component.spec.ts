import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddClientComponent } from './modal-add-client.component';

describe('ModalAddClientComponent', () => {
  let component: ModalAddClientComponent;
  let fixture: ComponentFixture<ModalAddClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
