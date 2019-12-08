import { Component, OnInit, AfterViewInit, ViewChild, ɵConsole} from '@angular/core';
import { ClientListView,ClientViewItem, ClientFilter, OrderField } from '../DTO/Client'
import { DataService } from '../data.service';
import { ModalAddClientComponent } from '../modal/modal-add-client/modal-add-client.component'
import { ModalEditClientComponent } from '../modal/modal-edit-client/modal-edit-client.component'
import { ControlTableComponent } from '../controls/control-table/control-table.component';
import { ControlTableViewData } from '../controls/control-table/ControlTableViewData';
import { log } from 'util';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  providers: [DataService]
})
export class ClientListComponent implements OnInit, AfterViewInit {

  @ViewChild(ModalAddClientComponent, {static: false}) modalAddClient: ModalAddClientComponent;
  @ViewChild(ModalEditClientComponent, {static: false}) modalEditClient: ModalEditClientComponent;
  @ViewChild(ControlTableComponent, {static: false}) clientTableComponent: ControlTableComponent ;
  
  public clientListView: ControlTableViewData ;

 constructor(private dataService: DataService) {          
  }

  testData: ClientListView = 
  {
    ClientViewItems:
      [
        { Name: "Клиент 089", INN: "1000000089", Id: 89, Uid: "5ea9798a-348a-4393-b63d-5f8b3ee03111" },
        { Name: "Клиент 088", INN: "1000000088", Id: 88, Uid: "20fe7743-fa57-4ed4-8b79-89867d151382" },
        { "Name": "Клиент 087", "INN": "1000000087", "Id": 87, "Uid": "faf03fab-a10a-4187-8475-01d6d991891a" },
        { "Name": "Клиент 086", "INN": "1000000086", "Id": 86, "Uid": "4ce82827-48a7-4c6a-80ba-8947e33dff5a" },
        { "Name": "Клиент 085", "INN": "1000000085", "Id": 85, "Uid": "5a526b20-407a-4707-8cb7-cb7d8693d1c5" },
        { "Name": "Клиент 084", "INN": "1000000084", "Id": 84, "Uid": "4e8864dc-40ca-40d1-a170-68b458c6de80" },
        { "Name": "Клиент 083", "INN": "1000000083", "Id": 83, "Uid": "afda4cc5-270e-4139-ab99-d784bc32d754" },
        { "Name": "Клиент 082", "INN": "1000000082", "Id": 82, "Uid": "99231513-d951-4b39-b1a5-445867043579" },
        { "Name": "Клиент 081", "INN": "1000000081", "Id": 81, "Uid": "23ad9ad6-b40a-458d-8d98-2747cb923084" },
        { "Name": "Клиент 080", "INN": "1000000080", "Id": 80, "Uid": "99f186c7-c293-411e-aa4f-06e23c5d2c5d" },
        { "Name": "Клиент 079", "INN": "1000000079", "Id": 79, "Uid": "60194c48-9d98-4a41-bcc3-aaf39b46f7ef" }
      ],
    "Filter": 
    { 
      "Page": 2, 
      "ItemsOnPage": 11, 
      "OrderField": 1, 
      "Descending": true, 
      "Name": "", 
      "INN": "" 
    }, 
    "Page": 2, 
    "PagesCount": 10, 
    "ItemsCount": 100
  }

  ngOnInit() {  
    log('client-list onInit');
    
  }    

  ngAfterViewInit(){
    log('client-list aterInit');

    //this.refreshClients();
    this.testRefesh();
  }

  testRefesh(){
    this.clientTableComponent.tableViewData = {
      Data : this.testData.ClientViewItems,
      Page : this.testData.Page,
      ItemsCount : this.testData.ItemsCount,
      Columns : [ 
     //   ["Id", "ID", 1],
        ["INN", "ИНН",10], 
        ["Name", "Наименование",0],     
       // ["Uid", "Uid", 10] 
      ],
      EditItemCallback : (item: ClientViewItem) => this.editClientClick(item),
      DeleteItemCallback : (item: ClientViewItem) => this.deleteClientClick(item)
    }; 
    this.clientTableComponent.refresh();
  }

   refreshClients(){
    log('client-list refreshClients');

    let filter: ClientFilter = {
        Descending: true,
        INN: "",
        ItemsOnPage: 11,
        Name: "",
        OrderField: OrderField.INN,
        Page: 2
    };
    
   // this.dataService.getClientList()
   this.dataService.getClientListByFilter(filter)
    .subscribe(
      data => { 
        log('client-list got data');

        this.clientTableComponent.tableViewData = {
          Page : data.Page,
          ItemsCount : data.ItemsCount,
          Data : data.ClientViewItems,
          Columns : [ 
         //   ["Id", "ID", 1],
            ["INN", "ИНН",10], 
            ["Name", "Наименование",0],     
           // ["Uid", "Uid", 10] 
          ],
          EditItemCallback : (item: ClientViewItem) => this.editClientClick(item),
          DeleteItemCallback : (item: ClientViewItem) => this.deleteClientClick(item)
        };        
        this.clientTableComponent.refresh();
      });    
  }

  addClientClick(){
    this.modalAddClient.show();
  }
  
  editClientClick(item: ClientViewItem){
    this.modalEditClient.show(item.Id);
  }

  deleteClientClick(item: ClientViewItem){
    this.dataService.deleteClient(item.Id)
    .subscribe(
      data=> {
        if(data){
          this.refreshClients();
        }
        else{
          alert("Не удалось удалить клиента!");
        }
    });    
  }
}
