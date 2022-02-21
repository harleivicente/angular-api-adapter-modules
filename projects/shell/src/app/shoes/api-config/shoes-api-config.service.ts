import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { ShoesApiConfigProviderBase, ShoeApiConfig } from "shoes-api";

@Injectable()
  export class ShoesApiConfig extends ShoesApiConfigProviderBase {
  
    getApiConfig(): Observable<ShoeApiConfig> {
      return of({
        baseUrl: 'https://jsonplaceholder.typicode.com',
        authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      })
    }
  
  }
  