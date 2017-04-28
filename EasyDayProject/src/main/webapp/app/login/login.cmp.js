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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var app_service_1 = require('../util/services/app.service');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var LoginComponent = (function () {
    function LoginComponent(fb, _router, _appService) {
        this.fb = fb;
        this._router = _router;
        this._appService = _appService;
        this.msgs = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            username: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.compose([forms_1.Validators.required])]]
        });
    };
    LoginComponent.prototype.onSubmit = function (value) {
        console.log(value);
        this._router.navigate(['home']);
        console.log(value.username);
        this._appService.setUsername(value.username);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'login.cmp.html',
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, app_service_1.AppService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.cmp.js.map