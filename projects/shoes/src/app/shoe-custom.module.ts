import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoeCustomComponent } from './shoe-custom-component/shoe-custom.component';

@NgModule({
  declarations: [
      ShoeCustomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ShoeCustomComponent
      }
    ]),
  ],
  providers: []
})
export class ShoesCustomModule {}