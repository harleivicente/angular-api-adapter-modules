import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoesApiInterceptor } from './shoes-api.interceptor';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ShoesApiInterceptor, multi: true }
  ],
  exports: []
})
export class ShoesApiModule { }
