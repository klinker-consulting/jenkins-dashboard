import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import { DashboardComponent } from './dashboard.component';
import { BuildComponent } from './components/build.component';
import { DashboardService } from './services/dashboard.service';
import { dashboardRouting } from './dashboard.routing';
import { SharedModule } from '../shared';

@NgModule({
    imports: [
        SharedModule,
        BrowserModule,
        HttpModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent,
        BuildComponent
    ],
    providers: [
        DashboardService
    ]
})
export class DashboardModule { }