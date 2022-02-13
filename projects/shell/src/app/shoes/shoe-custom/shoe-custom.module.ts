import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeCustomRoutingModule } from './shoe-custom-routing.module';
import { ShoeCustomComponent } from './shoe-custom-component/shoe-custom.component';

@NgModule({
  declarations: [
    ShoeCustomComponent
  ],
  imports: [
    CommonModule,
    ShoeCustomRoutingModule
  ]
})
export class ShoesCustomModule {}