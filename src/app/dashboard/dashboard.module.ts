import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { dashboardRouting } from './dashboard.routing';

@NgModule({
    imports: [dashboardRouting],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }