import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { DashboardComponent } from './dashboard.component';
import { BuildComponent } from './components/build.component';
import { dashboardRouting } from './dashboard.routing';
import { SharedModule } from '../shared';

@NgModule({
    imports: [
        SharedModule,
        BrowserModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent,
        BuildComponent
    ]
})
export class DashboardModule { }