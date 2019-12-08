import { Component, OnInit, AfterViewInit, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md'
import { ControlTableViewData } from './ControlTableViewData';
import { log } from 'util';
import { ControlTablePaginatorComponent } from '../control-table-paginator/control-table-paginator.component';

@Component({
  selector: 'app-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.css']
})

export class ControlTableComponent implements OnInit, AfterViewInit {

  // @Input() set TableViewData(value: ControlTableViewData) {
  //   if (value) {
  //     alert("new dataView");
  //     this.tableViewData = value;
  //   } else {
  //     alert("empty dataView");
  //     this.tableViewData = new ControlTableViewData;
  //   }
  //   this.refresh();
  // };

  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;      
  @ViewChild(ControlTablePaginatorComponent, {static: true}) Paginator:  ControlTablePaginatorComponent;
  
  showEdit: boolean;
  showDelete: boolean;
  tableViewData = new ControlTableViewData;
  Page: number;
  constructor(private cngRef: ChangeDetectorRef) { }

  ngOnInit() {    
  }

  showEditButton(): boolean {
    return this.tableViewData.EditItemCallback != undefined;
  }

  showDeleteButton(): boolean {
    return this.tableViewData.DeleteItemCallback != undefined;
  }

  getColumnWidth(width: number): string{
    return width > 0 ? width.toString() +'rem' : 'auto';
  }

  ngAfterViewInit(){    
  }

  refresh(){
    log('control-table refresh');   
    this.Paginator.Page = this.tableViewData.Page;
    this.mdbTable.setDataSource(this.tableViewData.Data)       
    this.showDelete = this.showDeleteButton();
    this.showEdit = this.showEditButton();    
    this.cngRef.detectChanges();
  
  }

}
