import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { isUndefined, isNullOrUndefined } from 'util';

@Component({
  selector: 'app-control-input-text',
  templateUrl: './control-input-text.component.html',
  styleUrls: ['./control-input-text.component.css']
})
export class ControlInputTextComponent implements OnInit {
  
  @Input() label: string;  
  @Input() isRequired: boolean = false;
  @Input() inputControl: FormControl;
  @Input() errorText: string;

  constructor() {     
  }  

  ngOnInit() {    
    if(isNullOrUndefined(this.errorText) && this.isRequired){
      this.errorText = "Обязательное поле";
    }
  }
}
