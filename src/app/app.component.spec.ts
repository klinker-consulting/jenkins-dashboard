import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MdToolbar } from '@angular2-material/toolbar';
import { 
    MdSidenav,
    MdSidenavLayout
} from '@angular2-material/sidenav';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
    });

    it('should have toolbar', () => {
        let child = fixture.debugElement.children[0];
        expect(child.componentInstance instanceof MdToolbar).toBeTruthy();
    });

    it('should have sidenav', () => {
        let child = fixture.debugElement.children[1];
        expect(child.componentInstance instanceof MdSidenavLayout).toBeTruthy();
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
});