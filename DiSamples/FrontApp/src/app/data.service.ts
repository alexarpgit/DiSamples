import { Injectable } from '@angular/core';
import { Client, ClientListView, ClientFilter } from './DTO/Client';
import { TransportService } from './transport.service'
import { Observable, ObservedValueOf } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private transport: TransportService) { }
  
  getClient(id: number): Observable<Client>{
    return this.transport.getRequest<Client>('client', id.toString());
  }

  getClientList(): Observable<ClientListView>{    
    return this.transport.getRequest<ClientListView>('client');
  }  

  getClientListByFilter(filter: ClientFilter): Observable<ClientListView>{    
    return this.transport.postRequest<ClientListView>('client','GetClientListByFilter', filter);
  }  

  addClient(client: Client): Observable<number>{
    return this.transport.postRequest<number>('client','',client)
  }

  deleteClient(id: number): Observable<boolean>{    
    return this.transport.deleteRequest<boolean>('client', id.toString());
  }

  saveClient(client: Client): Observable<boolean>{
    return this.transport.putRequest<boolean>('client', client, client.Id.toString());
  }
}
