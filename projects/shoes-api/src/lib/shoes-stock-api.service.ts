import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoesApiModule } from './shoes-api.module';
import { ShoesApiBaseService } from './shoes-api-base.service';

export interface Shoe {
    id: number;
    name: string;
    price: number;
}

@Injectable({
  providedIn: ShoesApiModule
})
export class ShoesStockApiService extends ShoesApiBaseService {

    getHttpClient(): HttpClient {
        return this.httpClient;
    }

    private constructor(private httpClient: HttpClient) {
        super();
    }

    getAvailableShoes(page: number = 1): Observable<any> {
        const result = this.get('todos/1', {
            params: {
                page: page.toString()
            }
        });
        return result;
    }

    getNewShoes(): Observable<any> {
        return this.get('todos/2');
    }
}
