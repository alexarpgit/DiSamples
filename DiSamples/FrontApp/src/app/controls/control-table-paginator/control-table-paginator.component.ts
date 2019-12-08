import { Component, OnInit, AfterViewInit, ViewChild, Input, ChangeDetectorRef } from '@angular/core';


@Component({
    selector: 'app-control-table-paginator',
    templateUrl: './control-table-paginator.component.html',
    styleUrls: ['./control-table-paginator.component.css']
  })

  export class ControlTablePaginatorComponent{
    @Input() Page :number;
    itemsNumber = "5";

    constructor(){}

    
  setItemsOnPage_5(){
    this.setItemsOnPage(5);
  }

  setItemsOnPage_15(){
    this.setItemsOnPage(15);
  }

  setItemsOnPage_50(){
    this.setItemsOnPage(50);
  }

  setItemsOnPage(num: number){
    // this.mdbTablePagination.setMaxVisibleItemsNumberTo(num);
    // this.mdbTablePagination.calculateFirstItemIndex();
    // this.mdbTablePagination.calculateLastItemIndex();
    // this.mdbTablePagination.activePageNumber = 0;
    // this.mdbTablePagination.nextPage();
  }

  }