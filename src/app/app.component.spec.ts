import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { MdToolbar } from '@angular2-material/toolbar';
import { 
    MdSidenav,
    MdSidenavLayout
} from '@angular2-material/sidenav';
import { 
    MdList,
    MdListItem 
} from '@angular2-material/list'

import { 
    TestBed, 
    ComponentFixture 
} from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let router: Router;
    let navigationEvents: any[];

    beforeEach(() => {
        navigationEvents = [];
        router = TestBed.get(Router);
        router.events.subscribe(e => navigationEvents.push(e));

        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
    });

    it('should have toolbar', () => {
        let child = getToolbar();
        expect(child.componentInstance instanceof MdToolbar).toBeTruthy();
    });

    it('should have sidenav layout', () => {
        let child = getSidenavLayout();
        expect(child.componentInstance instanceof MdSidenavLayout).toBeTruthy();
    })

    it('should have sidenav layout fullscreen', () => {
        let child = getSidenavLayout();
        expect(child.attributes['fullscreen']).toBeDefined();
    })

    it('should navigate to builds', () => {
        let navItems = getNavItems();
        navItems[1].nativeElement.click();

        expect(navigationEvents[0].url).toBe('/builds');
    })

    it('should navigate to dashboard', () => {
        let navItems = getNavItems();
        navItems[0].nativeElement.click();

        expect(navigationEvents[0].url).toBe('/dashboard');
    })

    it('should open sidenav', () => {
        clickMenuButton();

        expect(fixture.componentInstance.sidenav.opened).toBeTruthy();
    })

    it('should close sidenav', () => {
        clickMenuButton();
        clickMenuButton();

        expect(fixture.componentInstance.sidenav.opened).toBeFalsy();
    })

    function clickMenuButton() {
        let button = fixture.debugElement.queryAll(d => d.nativeElement instanceof HTMLButtonElement)[0];
        button.nativeElement.click();

        fixture.detectChanges();
    }

    function getToolbar(): DebugElement {
        return fixture.debugElement.queryAll(d => d.componentInstance instanceof MdToolbar)[0];
    }

    function getSidenavLayout(): DebugElement {
        return fixture.debugElement.queryAll(d => d.componentInstance instanceof MdSidenavLayout)[0];
    }

    function getNavItems(): DebugElement[] {
        let mdList = fixture.debugElement.queryAll(d => d.componentInstance instanceof MdList)[0];
        return mdList.queryAll(d => d.componentInstance instanceof MdListItem);
    }
});