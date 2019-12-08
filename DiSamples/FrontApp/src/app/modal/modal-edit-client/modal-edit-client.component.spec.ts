import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditClientComponent } from './modal-edit-client.component';

describe('ModalEditClientComponent', () => {
  let component: ModalEditClientComponent;
  let fixture: ComponentFixture<ModalEditClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
