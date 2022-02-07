import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { ShoesApiModule } from 'shoes-api';
import { AppWideInterceptor } from './app-wide.interceptor';

import { ShoesModule } from './shoes.module';
import { PlantsModule } from './plants.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    ShoesApiModule,
    ShoesModule,
    PlantsModule    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppWideInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
