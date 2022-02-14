import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ShoeListComponent } from './shoe-list-component/shoe-list.component';
import { ShoeListRoutingModule } from './shoe-list-routing.module';
import { ShoeListInterceptor } from './shoe-list.interceptor';

@NgModule({
  declarations: [
      ShoeListComponent
  ],
  imports: [
    HttpClientModule,
    ShoeListRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ShoeListInterceptor, multi: true }
  ]
})
export class ShoesListModule {}