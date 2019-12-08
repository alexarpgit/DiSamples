import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.css']
})
export class ButtonEditComponent implements OnInit {

  constructor() {     
  }

  @Output() clicked = new EventEmitter();

  ngOnInit() {
  }

  buttonClick(){
    this.clicked.emit();
  }

}
