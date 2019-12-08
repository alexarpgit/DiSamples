import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.css']
})
export class ButtonDeleteComponent implements OnInit {

  @Output() clicked = new EventEmitter();

  ngOnInit() {
  }

  buttonClick(){
    this.clicked.emit();
  }

}
