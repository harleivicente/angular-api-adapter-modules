import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '', redirectTo: 'shoes/list', pathMatch: 'full'
    },
    {
      path: 'shoes',
      loadChildren: () => import('./shoes/shoes.module').then(m => m.ShoesModule)
    }, 
    {
      path: 'plants',
      loadChildren: () => import('./plants/plants.module').then(m => m.PlantsModule)
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
