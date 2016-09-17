import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent }
]

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(DASHBOARD_ROUTES);