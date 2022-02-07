import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PlantListComponent } from './plant-list-component/plant-list.component';

@NgModule({
  declarations: [
      PlantListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
        {
            path: 'plants', component: PlantListComponent
        }
    ])
  ],
  providers: []
})
export class PlantsModule {}