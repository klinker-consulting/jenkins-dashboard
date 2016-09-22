import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Build } from './models/build';
import { DashboardService } from './services/dashboard.service';

@Component({
    template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit, OnDestroy {
    private _builds: Build[];
    private _buildsSubscription: Subscription

    get builds(): Build[] {
        return this._builds || [];
    }

    constructor(private dashboardService: DashboardService) {

    }

    ngOnInit() {
        this._buildsSubscription = this.dashboardService.builds
            .subscribe(b => this._builds = b);
    }

    ngOnDestroy() {
        this._buildsSubscription.unsubscribe();
        this._buildsSubscription = null;
    }
}