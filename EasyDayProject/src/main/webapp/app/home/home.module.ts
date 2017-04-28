import { NgModule } from '@angular/core';

import { Http, XHRBackend, RequestOptions } from '@angular/http';

import { HomeComponent } from './home.cmp';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { ROUTING } from './home.routes';

@NgModule({
    imports: [
        ROUTING
    ],
    declarations: [
        HomeComponent
    ]
})

export class HomeModule { }
