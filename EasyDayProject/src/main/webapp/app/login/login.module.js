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
var forms_1 = require('@angular/forms');
var primeng_1 = require('primeng/primeng');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var common_1 = require('@angular/common');
var login_cmp_1 = require('./login.cmp');
var login_routes_1 = require('./login.routes');
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                login_routes_1.ROUTING,
                primeng_1.InputTextModule,
                primeng_1.ButtonModule,
                primeng_1.PanelModule,
                primeng_1.MessagesModule,
                primeng_1.DataGridModule,
                common_1.CommonModule,
                primeng_1.GrowlModule,
                primeng_1.DataTableModule,
                ng2_bootstrap_1.ModalModule.forRoot(),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng2_bootstrap_1.TooltipModule.forRoot()
            ],
            declarations: [
                login_cmp_1.LoginComponent
            ],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map