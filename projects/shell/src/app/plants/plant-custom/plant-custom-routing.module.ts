import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlantCustomComponent } from './plant-custom-component/plant-custom.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: PlantCustomComponent
        }
    ])],
    exports: [
        RouterModule
    ]
})
export class PlantCustomRoutingModule {}
