import { Component, Input } from '@angular/core';

import { Build } from '../models/build';

@Component({
    selector: 'build',
    template: require('./build.component.html'),
    styles: [require('./build.component.scss')]
})
export class BuildComponent {
    @Input() build: Build;

    buildClass(): boolean {
        let statusToClassMap = {
            'Ok': 'build-passing',
            'Fail': 'build-failing',
            'In Progress': 'build-in-progress',
            'Unstable': 'build-unstable'
        };
        return statusToClassMap[this.build.status];
    }
}