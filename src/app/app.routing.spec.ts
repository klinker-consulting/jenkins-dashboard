import { 
    APP_ROUTES,
    appRouting 
} from './app.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BuildsComponent } from './builds/builds.component';

describe('AppRoutes', () => {
    it('should redirect to dashboard', () => {
        expect(APP_ROUTES[0].path).toBe('**');
        expect(APP_ROUTES[0].redirectTo).toBe('dashboard');
    })

    it('should have app routing module', () => {
        expect(appRouting.ngModule.name).toBe('RouterModule');
    })
})