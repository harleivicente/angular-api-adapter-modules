import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface ShoeApiConfig {
    baseUrl: string;
    authToken: string;
}

@Injectable()
export abstract class ShoesApiConfigProviderBase {

    abstract getApiConfig(): Observable<ShoeApiConfig>

}