import { NgModule } from '@angular/core';
import { ShoesApiModule, ShoesApiConfigProviderBase, ShoeApiConfig } from 'shoes-api';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoesInterceptor } from './shoes.interceptor';
import { ShoesRoutingModule } from './shoes-routing.module';
import { ShoesApiConfig } from './api-config/shoes-api-config.service';

@NgModule({
  imports: [
    CommonModule,
    ShoesApiModule,
    ShoesRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ShoesInterceptor, multi: true },
    { provide: ShoesApiConfigProviderBase, useClass: ShoesApiConfig }
  ]
})
export class ShoesModule {}