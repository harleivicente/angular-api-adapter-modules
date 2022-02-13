import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlantListComponent } from './plant-list-component/plant-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: PlantListComponent
        }
    ])],
    exports: [
        RouterModule
    ]
})
export class PlantListRoutingModule { }
