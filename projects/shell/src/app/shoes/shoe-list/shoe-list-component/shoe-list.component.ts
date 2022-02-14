import { HttpClient } from '@angular/common/http';
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
    private shoeStockApiService: ShoesStockApiService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.shoeStockApiService.getAvailableShoes().subscribe(() => {
      console.log('ShoeStockAPI from shoe-list');
    })
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1?from=shoe-list').subscribe();
  }

}
