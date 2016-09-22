import { Component, Input } from '@angular/core';

import { Build } from '../models/build';

@Component({
    selector: 'build',
    template: require('./build.component.html')
})
export class BuildComponent {
    @Input() build: Build;
}