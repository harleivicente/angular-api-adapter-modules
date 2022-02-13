import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoeListComponent } from './shoe-list-component/shoe-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: ShoeListComponent
        }
    ])],
    exports: [
      RouterModule
    ]
})
export class ShoeListRoutingModule { }
