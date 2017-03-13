import { Component, Inject, EventEmitter, Renderer } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { TranslateService } from 'ng2-translate';

import { User } from './../models';

/**
 * App service with shared values and methods on global scope of the app
 * @author Mario Petrovic
 */
@Injectable()
export class AppService {

    username: string;

    constructor(
        private _http: Http,
        private _title: Title
    ) {
        this.username = 'Cido91';
    }

    /**
     * Converting retrieved routes from init or getUser to array of routes
     * @author Mario Petrovic
     */
    convertRoutesToObjects(user: User): Object {
        let routes: Object = {};

        for (let route of user.userRoutes) {
            routes[route.url] = true;
        }

        return routes;
    }

    /**
     * Converting roles from array to object
     * @author Mario Petrovic
     */
    convertRolesToObject(roles: string[]): Object {
        let rolesObject: Object = {};

        for (let role of roles) {
            rolesObject[role] = true;
        }

        return rolesObject;
    }

    convertBase64ToBlob(base64String: string, type: string) {
        let byteCharacters = atob(base64String);

        let byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        let blob = new Blob([byteArray], { type: type });
        return blob;
    }
    /**
     * This method decoding an encoded byte array into byte characters string
     * @author Ciprian Dorofte
     */
    decodeData(encodeData: any) {
        return atob(encodeData);
    }

    /**
     * This method extract the extension from a file name even if file name contain dots
     * @author Ciprian Dorofte
     */
    extractExtensionFromFileName(fileName: string): string {
        let regex = /(?:\.([^.]+))?$/;
        let extension = regex.exec(fileName)[1];
        return extension;
    }
}