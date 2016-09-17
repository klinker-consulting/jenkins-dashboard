import { DashboardComponent } from './dashboard.component';
import { 
    DASHBOARD_ROUTES,
    dashboardRouting
} from './dashboard.routing';

describe('DashboardRouting', () => {
    it('should define dashboard route', () => {
        expect(DASHBOARD_ROUTES[0].path).toBe('dashboard');
        expect(DASHBOARD_ROUTES[0].component).toBe(DashboardComponent);
    })

    it('should have dashboard routing module', () => {
        expect(dashboardRouting.ngModule.name).toBe('RouterModule');
    })    
})