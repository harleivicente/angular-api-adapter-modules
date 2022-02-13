import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'list',
            loadChildren: () => import('./plant-list/plant-list.module').then(m => m.PlantListModule)
        }, 
        {
            path: 'custom',
            loadChildren: () => import('./plant-custom/plant-custom.module').then(m => m.PlantCustomModule)
        } 
    ])],
    exports: [
        RouterModule
    ]
})
export class PlantsRoutingModule { }
