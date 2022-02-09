import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'shoes',
      loadChildren: () => import('../app/shoes.module').then(m => m.ShoesModule)
    }, 
    {
      path: 'plants',
      loadChildren: () => import('../app/plants.module').then(m => m.PlantsModule)
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
