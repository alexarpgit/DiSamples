import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Client } from '../../DTO/Client';
import { DataService } from '../../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'modal-add-client',
  templateUrl: './modal-add-client.component.html',
  styleUrls: ['./modal-add-client.component.css']
})
export class ModalAddClientComponent implements OnInit {
  
  @ViewChild(ModalDirective, {read: null, static: false}) modal: ModalDirective;
  @Output() closedModal = new  EventEmitter()

  form: FormGroup;  

  constructor(private dataService: DataService, formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ["", Validators.required],
      inn: ["", [Validators.max(9999999999), Validators.min(1000000000)]]
    })
   }

  show(){
    this.modal.show();
  }

  clearForm(){
    this.form.controls["name"].setValue("");
    this.form.controls["inn"].setValue("");
  } 

  ngOnInit() {        
  }

  addClick(){
    if(this.form.valid){
    const newClient : Client = {
      INN : this.form.controls['name'].value,
      Name : this.form.controls['inn'].value,
      Id : undefined,
      Uid : undefined
    }

    this.dataService.addClient(newClient)
      .subscribe( res => {
        if(res > 0){
          this.modal.hide();
          this.closedModal.emit();
          this.clearForm();
        }else{
          alert("Клиент не добавлен!")
        }
      });    
    }else{
      alert("неправильные данные")
    }
  }
}
