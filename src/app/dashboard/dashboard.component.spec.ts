import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './services/dashboard.service'
import { BuildComponent } from './components/build.component';
import { Build } from "./models/build";

class DashboardServiceFake {
    builds: Observable<Build[]>
}

describe('DashboardComponent', () => {
    let dashboardService: DashboardServiceFake;

    beforeEach(() => {
        dashboardService = new DashboardServiceFake();
        TestBed.configureTestingModule({
            providers: [
                { provide: DashboardService, useValue: dashboardService }
            ]
        })
    });


    it('should show status of builds', () => {
        dashboardService.builds = Observable.of([{}, {}, {}]);

        let fixture = TestBed.createComponent(DashboardComponent);
        fixture.detectChanges();

        let builds = fixture.debugElement.queryAll(d => d.componentInstance instanceof BuildComponent);
        expect(builds.length).toBe(3);
    });
});