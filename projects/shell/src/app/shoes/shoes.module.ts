import { NgModule } from '@angular/core';
import { ShoesApiModule } from 'shoes-api';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoesInterceptor } from './shoes.interceptor';
import { ShoesRoutingModule } from './shoes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShoesApiModule,
    ShoesRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ShoesInterceptor, multi: true }
  ]
})
export class ShoesModule {}