import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { Client } from '../../DTO/Client';
import { DataService } from '../../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'modal-edit-client',
  templateUrl: './modal-edit-client.component.html',
  styleUrls: ['./modal-edit-client.component.css']
})
export class ModalEditClientComponent implements OnInit {
  @ViewChild(ModalDirective, {read: null, static: false}) modal: ModalDirective;
  @Output() closedModal = new  EventEmitter()

  client: Client = new Client();  
  form: FormGroup;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ["", Validators.required],
      inn: ["", [Validators.max(9999999999), Validators.min(1000000000)]]
    });
   }

  show(id: number){
    this.dataService.getClient(id)
    .subscribe( data =>{
      this.client = data;
      this.form.controls["name"].setValue(this.client.Name);
      this.form.controls["inn"].setValue(this.client.INN);
    })
    this.form.updateValueAndValidity();
    this.modal.show();
  }

  clearForm(){
    this.client = new Client();
    this.form.controls["name"].setValue("");
    this.form.controls["inn"].setValue("");
  } 

  ngOnInit() {        
  }

  saveClick(){
    if(this.form.valid){
      this.client.Name = this.form.controls["name"].value;
      this.client.INN = this.form.controls["inn"].value;
    


    this.dataService.saveClient(this.client)
      .subscribe( res => {
        if(res){
          this.modal.hide();
          this.closedModal.emit();
          this.clearForm();
        }else{
          alert("Клиент не сохранён!")
        }
      });    
    }else{
      alert("Неправильные данные формы")
    }
  }



}
