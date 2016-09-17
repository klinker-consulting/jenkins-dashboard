import { NgModule } from '@angular/core';

import { BuildsComponent } from './builds.component';
import { buildsRouting } from './builds.routing';

@NgModule({
    imports: [buildsRouting],
    declarations: [
        BuildsComponent
    ]
})
export class BuildsModule { }