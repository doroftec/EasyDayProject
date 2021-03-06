"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var ng2_translate_1 = require('ng2-translate');
var nav_module_1 = require('./nav/nav.module');
var easyday_app_cmp_1 = require('./easyday.app.cmp');
var easyday_app_routes_1 = require('./easyday.app.routes');
var common_1 = require('@angular/common');
var EasyDayAppModule = (function () {
    function EasyDayAppModule() {
    }
    EasyDayAppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                easyday_app_routes_1.ROUTING,
                nav_module_1.NavModule,
                ng2_translate_1.TranslateModule.forRoot({
                    provide: ng2_translate_1.TranslateLoader
                })
            ],
            declarations: [
                easyday_app_cmp_1.EasyDayAppComponent
            ],
            bootstrap: [easyday_app_cmp_1.EasyDayAppComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }]
        }), 
        __metadata('design:paramtypes', [])
    ], EasyDayAppModule);
    return EasyDayAppModule;
}());
exports.EasyDayAppModule = EasyDayAppModule;
//# sourceMappingURL=easyday.app.module.js.map