import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { mergeMap } from "rxjs/operators";

export interface ShoeApiConfig {
    baseUrl: string;
    authToken: string;
}

interface RequestOptions {
    [key: string]: any,
    headers?: HttpHeaders | { [header: string]: string | string[] };
    params?: HttpParams | { [param: string]: string | string[]; };
}

@Injectable()
export abstract class ShoesApiBaseService {

    abstract getHttpClient(): HttpClient

    private getApiConfig(): Observable<ShoeApiConfig> {
        return of({
            baseUrl: "https://jsonplaceholder.typicode.com",
            authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        });
    }

    private mergeOptions(options: RequestOptions, apiConfig: ShoeApiConfig): RequestOptions {
        const headers = options?.header ?? {};
        const mergedHeaders = {
            ...headers,
            Authorization: `Bearer ${apiConfig.authToken}`
        };

        if (options) {
            options.headers = mergedHeaders;
            return options;
        } else {
            return { headers: mergedHeaders };
        }
    }

    public get(url: string, options: RequestOptions = {}): Observable<Object> {
        return this.getApiConfig()
        .pipe(
            mergeMap(apiConfig => {
                const fullUrl = `${apiConfig.baseUrl}/${url}`;
                const mergedOptions = this.mergeOptions(options, apiConfig);
                return this.getHttpClient().get(fullUrl, mergedOptions);
            }) 
        )
    }

    // public post(url: string, body: any, options?: Object): Observable<Object> {
    //     return this.getHttpClient().post(url, body, options);
    // }

}