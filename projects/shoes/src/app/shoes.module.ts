import { NgModule } from '@angular/core';
import { ShoeListComponent } from './shoe-list-component/shoe-list.component';
import { RouterModule } from '@angular/router';
import { ShoesApiModule } from 'shoes-api';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoesInterceptor } from './shoes.interceptor';

@NgModule({
  declarations: [
      ShoeListComponent
  ],
  imports: [
    CommonModule,
    ShoesApiModule,
    RouterModule.forChild([
      {
        path: '', component: ShoeListComponent
      }
    ]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ShoesInterceptor, multi: true }
  ]
})
export class ShoesModule {}