import { NgModule, ModuleWithProviders } from '@angular/core';
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdSliderModule } from '@angular2-material/slider';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';

export const MATERIAL_MODULES = [
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdProgressBarModule,
  MdProgressCircleModule,
  MdRadioModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule
];

@NgModule({
    imports: [
        MdCoreModule.forRoot(), 
        MdButtonModule.forRoot(),
        MdButtonToggleModule.forRoot(),
        MdCardModule.forRoot(),
        MdCheckboxModule.forRoot(),
        MdGridListModule.forRoot(),
        MdIconModule.forRoot(),
        MdInputModule.forRoot(),
        MdListModule.forRoot(),
        MdProgressBarModule.forRoot(),
        MdProgressCircleModule.forRoot(),
        MdRadioModule.forRoot(),
        MdSidenavModule.forRoot(),
        MdSliderModule.forRoot(),
        MdSlideToggleModule.forRoot(),
        MdTabsModule.forRoot(),
        MdToolbarModule.forRoot()
    ],
    exports: MATERIAL_MODULES
})
export class MaterialModule {}