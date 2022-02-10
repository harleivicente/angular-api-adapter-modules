import { Component } from '@angular/core';
import { ShoesStockApiService, Shoe } from 'shoes-api';

@Component({
  selector: 'app-shoe-custom',
  templateUrl: './shoe-custom.component.html',
  styleUrls: ['./shoe-custom.component.css']
})
export class ShoeCustomComponent {
  title = 'shoes';
  shoes: Shoe[] = [];

  constructor(
    private shoeStockApiService: ShoesStockApiService
  ) {}

  ngOnInit() {
    this.shoeStockApiService.getAvailableShoes().subscribe(shoes => {
      this.shoes = shoes;
    })
  }

}
