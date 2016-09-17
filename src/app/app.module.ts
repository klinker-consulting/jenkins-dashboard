import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared';
import { DashboardModule } from './dashboard'
import { BuildsModule } from './builds'
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        SharedModule.forRoot(),
        DashboardModule,
        BuildsModule,
        appRouting
    ],
    declarations: [
        AppComponent
    ]
})
export class AppModule { }