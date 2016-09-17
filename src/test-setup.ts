import './vendor';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import { NgModule } from '@angular/core';
import { XHRBackend } from '@angular/http';

import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from './app';

@NgModule({
    imports: [
        AppModule, 
        BrowserDynamicTestingModule, 
        RouterTestingModule
    ]
})
class TestModule { }

describe('Jenkins Dashboard', () => {
    beforeAll(() => {
        addBaseElement();

        TestBed.initTestEnvironment(TestModule, platformBrowserDynamicTesting());
    });

    let context = (<any>require).context('.', true, /\.spec\.ts$/);
    context.keys().forEach(context);

    function addBaseElement() {
        const base =document.createElement('base');
        base.setAttribute('href', '/');
        document.head.appendChild(base);
    }
});