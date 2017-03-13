import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { NavModule } from '../nav/nav.module';

import { EasyDayAppComponent }  from './easyday.app.cmp';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NavModule,
    TranslateModule.forRoot({
            provide: TranslateLoader
        })
  ],
  declarations: [
    EasyDayAppComponent
  ],
  bootstrap: [ EasyDayAppComponent ]
})
export class EasyDayAppModule { }
