import { XHRBackend, Response, BaseResponseOptions } from '@angular/http';

import { TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
    let mockBackend: MockBackend;
    let dashboardService: DashboardService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });

        mockBackend = TestBed.get(XHRBackend);
        dashboardService = TestBed.get(DashboardService);
    });

    it('should get builds', (done) => {
        let expected_builds = [];
        let url: string;
        mockBackend.connections.subscribe((conn: MockConnection) => {
            let options = new BaseResponseOptions();
            options.body = expected_builds;

            conn.mockRespond(new Response(options));
            url = conn.request.url
        });

        dashboardService.builds.subscribe(builds => {
            expect(builds).toEqual(expected_builds);
            expect(url).toBe('http://jenkins.com/api/stuff');
            done()
        });
    });
});