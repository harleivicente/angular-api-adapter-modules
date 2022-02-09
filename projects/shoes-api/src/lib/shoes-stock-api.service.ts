import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoesApiModule } from './shoes-api.module';

export interface Shoe {
    id: number;
    name: string;
    price: number;
}

@Injectable({
  providedIn: ShoesApiModule
})
export class ShoesStockApiService {

    fakeApiUrl = 'https://jsonplaceholder.typicode.com/todos/1?from=api-service';
    fakeData = [{
        id: 3,
        name: 'Nike Air',
        price: 343
    }];

    constructor(private httpClient: HttpClient) { }

    getAvailableShoes(): Observable<Shoe[]> {
        console.log('Getting available shoes...');
        return this.httpClient.get(this.fakeApiUrl).pipe(
            map(response => {
                console.log('api response...', { response });
                return this.fakeData;
            })
        );
    }

}
