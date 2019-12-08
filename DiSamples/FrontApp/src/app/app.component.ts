import { Component } from '@angular/core';
import { ControlTableViewData } from "./controls/control-table/ControlTableViewData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontApp';  
  data: ControlTableViewData; 

  editItem(item: any){
    alert('Редактирование сущности с ИД ' + item["Id"].toString());
  }

  deleteItem(item: any){
    let index = this.data.Data.indexOf(item);
    alert('Удаление сущности с ИД ' + item["Id"].toString() + ', index ' + index.toString());
    
    this.data.Data.splice(index,1);
  }

  addButtonClick(){
    if(!this.data){
      this.newData();
    }
    this.data.Data.push({
      // Name:"Name XX",
      // Inn:"9999999999",
      Id: this.data.Data.length + 1
    });
  }

  newData(){
    this.data =  {
      Data: [],
      Columns:[ 
        ["Id", "ID", 1],
        ["Inn", "ИНН",10], 
        ["Name", "Наименование",0],      
      ],
      EditItemCallback : (item: any) => this.editItem(item),
      DeleteItemCallback : (item: any) => this.deleteItem(item)
    }
  }

  fillButtonClick(){
    this.data =  {
      Data: [
        // {
        //   Name:"Name 1",
        //   Inn:"1111111111",
        //   Id:1
        // },
        // {
        //   Name:"Name 2",
        //   Inn:"2222222222",
        //   Id:"2"
        // },
        // {
        //   Name:"Name 3",
        //   Inn:"3333333333",
        //   Id:"3"
        // },
        // {
        //   Name:"Name 1",
        //   Inn:"1111111111",
        //   Id:"4"
        // },
        // {
        //   Name:"Name 2",
        //   Inn:"2222222222",
        //   Id:"5"
        // },
        // {
        //   Name:"Name 3",
        //   Inn:"3333333333",
        //   Id:"6"
        // },
        // {
        //   Name:"Name 1",
        //   Inn:"1111111111",
        //   Id:"7"
        // },
        // {
        //   Name:"Name 2",
        //   Inn:"2222222222",
        //   Id:"8"
        // },
        // {
        //   Name:"Name 3",
        //   Inn:"3333333333",
        //   Id:"9"
        // },
        // {
        //   Name:"Name 1",
        //   Inn:"1111111111",
        //   Id:"10"
        // },
        // {
        //   Name:"Name 2",
        //   Inn:"2222222222",
        //   Id:"11"
        // },
        // {
        //   Name:"Name 3",
        //   Inn:"3333333333",
        //   Id:"12"
        // },
        // {
        //   Name:"Name 1",
        //   Inn:"1111111111",
        //   Id:"13"
        // },
        // {
        //   Name:"Name 2",
        //   Inn:"2222222222",
        //   Id:"14"
        // },
        // {
        //   Name:"Name 3",
        //   Inn:"3333333333",
        //   Id:"15"
        // },
        // {
        //   Name:"Name 1",
        //   Inn:"1111111111",
        //   Id:"16"
        // },
        // {
        //   Name:"Name 2",
        //   Inn:"2222222222",
        //   Id:"17"
        // },
        // {
        //   Name:"Name 3",
        //   Inn:"3333333333",
        //   Id:"18"
        // }
      ],
      Columns:[ 
        ["Id", "ID", 1],
        ["Inn", "ИНН",10], 
        ["Name", "Наименование",0],      
      ],
      EditItemCallback : (item: any) => this.editItem(item),
      DeleteItemCallback : (item: any) => this.deleteItem(item)
    }
  
  }
  flushButtonClick(){
    this.data = undefined;
  }
}
