import { NgModule } from '@angular/core';
import { PlantCustomComponent } from './plant-custom-component/plant-custom.component';
import { PlantCustomRoutingModule } from './plant-custom-routing.module';

@NgModule({
  declarations: [
    PlantCustomComponent
  ],
  imports: [
    PlantCustomRoutingModule
  ]
})
export class PlantCustomModule {}