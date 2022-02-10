import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoesApiModule } from 'shoes-api';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoesInterceptor } from './shoes.interceptor';

@NgModule({
  imports: [
    CommonModule,
    ShoesApiModule,
    RouterModule.forChild([
      {
        path: 'list',
        loadChildren: () => import('./shoe-list.module').then(m => m.ShoesListModule)
      },
      {
        path: 'custom',
        loadChildren: () => import('./shoe-custom.module').then(m => m.ShoesCustomModule)
      }
    ]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ShoesInterceptor, multi: true }
  ]
})
export class ShoesModule {}