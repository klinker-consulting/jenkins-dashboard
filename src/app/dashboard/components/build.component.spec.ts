import { TestBed } from '@angular/core/testing';

import { BuildComponent } from './build.component';

describe('BuildComponent', () => {

    it('should show build name', () => {
        let fixture = TestBed.createComponent(BuildComponent);
        fixture.componentInstance.build = { name: 'Something good' };

        fixture.detectChanges();
        let header = fixture.debugElement.nativeElement.querySelector('h3');
        expect(header.innerText).toContain("Something good");
    });

    it('should show passing build', () => {
        let fixture = TestBed.createComponent(BuildComponent);
        fixture.componentInstance.build = { status: 'Ok' };

        fixture.detectChanges();

        let div = fixture.debugElement.children[0];
        expect(div.classes['build-passing']).toBeTruthy();
    });

    it('should show failing build', () => {
        let fixture = TestBed.createComponent(BuildComponent);

        fixture.componentInstance.build = { status: 'Fail' };
        fixture.detectChanges();

        let div = fixture.debugElement.children[0];
        expect(div.classes['build-failing']).toBeTruthy();
    });

    it('should show build in progress', () => {
        let fixture = TestBed.createComponent(BuildComponent);

        fixture.componentInstance.build = { status: 'In Progress' };
        fixture.detectChanges();

        let div = fixture.debugElement.children[0];
        expect(div.classes['build-in-progress']).toBeTruthy();
    });

    it('should show unstable build', () => {
        let fixture = TestBed.createComponent(BuildComponent);

        fixture.componentInstance.build = { status: 'Unstable' };
        fixture.detectChanges();

        let div = fixture.debugElement.children[0];
        expect(div.classes['build-unstable']).toBeTruthy();
    })
});