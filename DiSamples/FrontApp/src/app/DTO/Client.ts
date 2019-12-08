import { DataViewItem } from '../controls/control-table/ControlTableViewData';

export class Client{
    Name: string;
    INN: string;
    Id: number;
    Uid: string;
}
export class ClientViewItem implements DataViewItem{
    Id: number;
    Name: string;
    INN: string;    
    Uid: string;
}

export enum OrderField{
    Name,
    INN,
    Id
}

export class ClientFilter{
    Page: number;
    ItemsOnPage: number;
    OrderField: OrderField;
    Descending: boolean;
    Name: string;
    INN: string;
}

export class ClientListView{
    ClientViewItems: ClientViewItem[];
    Filter: ClientFilter;
    Page: number;
    PagesCount: number;
    ItemsCount: number;
}