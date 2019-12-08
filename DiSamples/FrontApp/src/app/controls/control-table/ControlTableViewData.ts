export class ControlTableViewData {
  Data: DataViewItem[] = [];
  Page: number;
  ItemsCount:number;
  /**Name, Caption, Width rem (0=auto)*/
  Columns: [string, string, number][];
  EditItemCallback: (item: any) => void = undefined;
  DeleteItemCallback: (item: any) => void = undefined;
}

export class DataViewItem{
  Id: number  
}