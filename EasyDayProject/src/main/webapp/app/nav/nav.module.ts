import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';  

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { GrowlModule } from 'primeng/primeng';

import { DropdownModule } from 'ng2-bootstrap';

import { AppService } from '../util/services/app.service';

import { NavCmp } from './nav.cmp';

@NgModule({
    imports: [
        RouterModule,
        GrowlModule,
        CommonModule,
        DropdownModule.forRoot(),
            TranslateModule.forRoot({
            provide: TranslateLoader
        })
    ],
    exports: [NavCmp],
    declarations: 
    [NavCmp],
    providers: [AppService]
})
export class NavModule { }
