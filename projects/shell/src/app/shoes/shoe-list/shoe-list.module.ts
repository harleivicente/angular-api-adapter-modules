import { NgModule } from '@angular/core';
import { ShoeListComponent } from './shoe-list-component/shoe-list.component';
import { ShoeListRoutingModule } from './shoe-list-routing.module';

@NgModule({
  declarations: [
      ShoeListComponent
  ],
  imports: [
    ShoeListRoutingModule
  ],
  providers: []
})
export class ShoesListModule {}