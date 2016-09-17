import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildsComponent } from './builds.component';

export const BUILDS_ROUTES: Routes = [
    { path: 'builds', component: BuildsComponent }
]

export const buildsRouting: ModuleWithProviders = RouterModule.forChild(BUILDS_ROUTES);