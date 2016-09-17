import { BuildsComponent } from './builds.component';
import { 
    BUILDS_ROUTES,
    buildsRouting
} from './builds.routing';

describe('BuildsRouting', () => {
    it('should define builds route', () => {
        expect(BUILDS_ROUTES[0].path).toBe('builds');
        expect(BUILDS_ROUTES[0].component).toBe(BuildsComponent);
    })

    it('should have builds routing module', () => {
        expect(buildsRouting.ngModule.name).toBe('RouterModule');
    })    
})