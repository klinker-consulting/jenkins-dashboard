import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        SharedModule.forRoot(),
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ]
})
export class AppModule { }