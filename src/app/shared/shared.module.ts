import { NgModule, ModuleWithProviders } from '@angular/core';
import { MATERIAL_MODULES, MaterialModule } from './material.module';

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})
export class SharedModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MaterialModule
        }
    }
}