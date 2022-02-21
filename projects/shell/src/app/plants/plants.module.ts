import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsRoutingModule } from './plants-routing.module';
import { ShoesApiModule, ShoesApiConfigProviderBase } from 'shoes-api';
import { ShoesApiConfig } from './api-config/shoes-api-config.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlantsRoutingModule,
    ShoesApiModule
  ],
  providers: [
    { provide: ShoesApiConfigProviderBase, useClass: ShoesApiConfig }
  ]
})
export class PlantsModule {}