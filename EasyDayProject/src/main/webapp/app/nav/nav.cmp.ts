import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { TranslateService } from 'ng2-translate';

import { AppService } from '../util/services/app.service';

@Component({
    moduleId: module.id,
    selector: 'navigation-menu',
    templateUrl: 'nav.cmp.html',
    styleUrls: ['nav.cmp.css'],
    encapsulation: ViewEncapsulation.None
})

export class NavCmp implements OnInit {

    /*--------- Constructor --------*/
    constructor(private _translateService: TranslateService, private _appService: AppService) { }

    /*--------- NG On Init ---------*/
    ngOnInit() {}

    ngOnDestroy(): void {}
}