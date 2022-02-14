import { Component } from '@angular/core';
import { ShoesStockApiService } from 'shoes-api';

@Component({
  selector: 'app-plant-custom',
  templateUrl: './plant-custom.component.html',
  styleUrls: ['./plant-custom.component.css']
})
export class PlantCustomComponent {

  constructor(private shoeStockApiService: ShoesStockApiService) {}

  ngOnInit() {
    this.shoeStockApiService.getAvailableShoes().subscribe();
  }

}
