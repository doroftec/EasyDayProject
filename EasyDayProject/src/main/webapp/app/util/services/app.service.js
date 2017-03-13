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
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
/**
 * App service with shared values and methods on global scope of the app
 * @author Mario Petrovic
 */
var AppService = (function () {
    function AppService(_http, _title) {
        this._http = _http;
        this._title = _title;
        this.username = 'Cido91';
    }
    /**
     * Converting retrieved routes from init or getUser to array of routes
     * @author Mario Petrovic
     */
    AppService.prototype.convertRoutesToObjects = function (user) {
        var routes = {};
        for (var _i = 0, _a = user.userRoutes; _i < _a.length; _i++) {
            var route = _a[_i];
            routes[route.url] = true;
        }
        return routes;
    };
    /**
     * Converting roles from array to object
     * @author Mario Petrovic
     */
    AppService.prototype.convertRolesToObject = function (roles) {
        var rolesObject = {};
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var role = roles_1[_i];
            rolesObject[role] = true;
        }
        return rolesObject;
    };
    AppService.prototype.convertBase64ToBlob = function (base64String, type) {
        var byteCharacters = atob(base64String);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], { type: type });
        return blob;
    };
    /**
     * This method decoding an encoded byte array into byte characters string
     * @author Ciprian Dorofte
     */
    AppService.prototype.decodeData = function (encodeData) {
        return atob(encodeData);
    };
    /**
     * This method extract the extension from a file name even if file name contain dots
     * @author Ciprian Dorofte
     */
    AppService.prototype.extractExtensionFromFileName = function (fileName) {
        var regex = /(?:\.([^.]+))?$/;
        var extension = regex.exec(fileName)[1];
        return extension;
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, platform_browser_1.Title])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map