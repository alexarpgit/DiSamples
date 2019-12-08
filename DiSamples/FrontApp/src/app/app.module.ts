import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddClientComponent } from './modal/modal-add-client/modal-add-client.component';
import { ControlInputTextComponent } from './controls/control-input-text/control-input-text.component';
import { ModalEditClientComponent } from './modal/modal-edit-client/modal-edit-client.component';
import { ButtonEditComponent } from './controls/buttons/button-edit/button-edit.component';
import { ButtonDeleteComponent } from './controls/buttons/button-delete/button-delete.component';
import { ControlTableComponent } from './controls/control-table/control-table.component'
import { ControlTablePaginatorComponent } from './controls/control-table-paginator/control-table-paginator.component'


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ModalAddClientComponent,
    ControlInputTextComponent,
    ModalEditClientComponent,
    ButtonEditComponent,
    ButtonDeleteComponent,
    ControlTableComponent,
    ControlTablePaginatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
