import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { NavModule } from './nav/nav.module';

import { EasyDayAppComponent }  from './easyday.app.cmp';

import { ROUTING } from './easyday.app.routes';

import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    NavModule,
    TranslateModule.forRoot({
            provide: TranslateLoader
        })
  ],
  declarations: [
    EasyDayAppComponent
  ],
  bootstrap: [ EasyDayAppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class EasyDayAppModule { }
