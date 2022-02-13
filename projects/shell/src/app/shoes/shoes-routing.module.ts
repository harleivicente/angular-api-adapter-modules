import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'list',
                loadChildren: () => import('./shoe-list/shoe-list.module').then(m => m.ShoesListModule)
            },
            {
                path: 'custom',
                loadChildren: () => import('./shoe-custom/shoe-custom.module').then(m => m.ShoesCustomModule)
            }
        ])      
    ],
    exports: [
        RouterModule
    ]
})
export class ShoesRoutingModule { }
