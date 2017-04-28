"use strict";
var router_1 = require('@angular/router');
var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
exports.ROUTING = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=easyday.app.routes.js.map