import { RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home.cmp';

export const ROUTING: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent
    }
]);