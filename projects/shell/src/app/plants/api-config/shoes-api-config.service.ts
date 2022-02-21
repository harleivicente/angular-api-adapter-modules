import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { ShoesApiConfigProviderBase, ShoeApiConfig } from "shoes-api";

@Injectable()
  export class ShoesApiConfig extends ShoesApiConfigProviderBase {
  
    getApiConfig(): Observable<ShoeApiConfig> {
      return of({
        baseUrl: 'https://jsonplaceholder.typicode.com',
        authToken: 'plant-based-token-here-> :-D'
      })
    }
  
  }
  