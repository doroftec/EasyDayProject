import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTableModule, DataGridModule, InputTextModule, ButtonModule, MessagesModule, GrowlModule, PanelModule } from 'primeng/primeng';
import { ModalModule, TooltipModule } from 'ng2-bootstrap';

import { CommonModule } from '@angular/common';  

import { LoginComponent } from './login.cmp';

import { ROUTING } from './login.routes';


@NgModule({
    imports: [
        ROUTING,
        InputTextModule,
        ButtonModule,
        PanelModule,
        MessagesModule,
        DataGridModule,
        CommonModule,
        GrowlModule,
        DataTableModule,
        ModalModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        TooltipModule.forRoot()
    ],
    declarations: [
        LoginComponent
    ],
    providers: [],
})
export class LoginModule { }