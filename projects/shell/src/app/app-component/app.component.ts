import { Component, Optional } from '@angular/core';
import { ShoesStockApiService } from 'shoes-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Optional() private shoeStockApiService: ShoesStockApiService) {}

  ngOnInit() {
    // this.shoeStockApiService.getAvailableShoes().subscribe();
  }

}
