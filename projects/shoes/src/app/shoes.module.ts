import { NgModule } from '@angular/core';
import { ShoeListComponent } from './shoe-list-component/shoe-list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
      ShoeListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
        {
            path: 'shoes', component: ShoeListComponent
        }
    ])
  ],
  providers: []
})
export class ShoesModule {}