import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
export class ShoesStockApiService {

    private constructor(private apiBase: ShoesApiBaseService) {}

    getAvailableShoes(page: number = 1): Observable<any> {
        const result = this.apiBase.get('todos/1', {
            params: {
                page: page.toString()
            }
        });
        return result;
    }

    getNewShoes(): Observable<any> {
        return this.apiBase.get('todos/2');
    }
}
