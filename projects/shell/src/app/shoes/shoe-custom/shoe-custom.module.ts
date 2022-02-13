import { NgModule } from '@angular/core';
import { ShoeCustomRoutingModule } from './shoe-custom-routing.module';
import { ShoeCustomComponent } from './shoe-custom-component/shoe-custom.component';

@NgModule({
  declarations: [
    ShoeCustomComponent
  ],
  imports: [
    ShoeCustomRoutingModule
  ]
})
export class ShoesCustomModule {}