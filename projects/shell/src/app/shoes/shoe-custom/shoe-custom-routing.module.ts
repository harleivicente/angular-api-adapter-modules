import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoeCustomComponent } from './shoe-custom-component/shoe-custom.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: ShoeCustomComponent
        }
    ])],
    exports: [
      RouterModule
    ]
})
export class ShoeCustomRoutingModule { }
