import { NgModule } from '@angular/core';
import { PlantListComponent } from './plant-list-component/plant-list.component';
import { PlantListRoutingModule } from './plant-list-routing.module';

@NgModule({
  declarations: [
      PlantListComponent
  ],
  imports: [
    PlantListRoutingModule
  ]
})
export class PlantListModule {}