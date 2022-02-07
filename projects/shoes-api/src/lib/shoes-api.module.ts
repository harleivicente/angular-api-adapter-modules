import { NgModule } from '@angular/core';
import { ShoesApiComponent } from './shoes-api.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoesApiInterceptor } from './shoes-api.interceptor';


@NgModule({
  declarations: [
    ShoesApiComponent
  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ShoesApiInterceptor, multi: true }
  ],
  exports: [
    ShoesApiComponent
  ]
})
export class ShoesApiModule { }
