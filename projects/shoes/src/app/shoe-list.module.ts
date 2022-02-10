import { NgModule } from '@angular/core';
import { ShoeListComponent } from './shoe-list-component/shoe-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      ShoeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ShoeListComponent
      }
    ]),
  ],
  providers: []
})
export class ShoesListModule {}