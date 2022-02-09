import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlantListComponent } from './plant-list-component/plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      PlantListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
        {
            path: '', component: PlantListComponent
        }
    ])
  ],
  providers: []
})
export class PlantsModule {}