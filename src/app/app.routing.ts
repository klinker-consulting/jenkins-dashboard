import { ModuleWithProviders } from '@angular/core';
import { 
    Routes,
    RouterModule 
} from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '**', redirectTo: 'dashboard' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true });