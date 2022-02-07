import { Component } from '@angular/core';
import { ShoesStockApiService, Shoe } from 'shoes-api';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent {
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
