import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, Optional } from "@angular/core";
import { mergeMap } from "rxjs/operators";
import { Observable, of } from "rxjs";

import { ShoesApiConfigProviderBase, ShoeApiConfig } from "./shoes-api-config-provider-base.service";
import { ShoesApiModule } from "./shoes-api.module";

interface RequestOptions {
    [key: string]: any,
    headers?: HttpHeaders | { [header: string]: string | string[] };
    params?: HttpParams | { [param: string]: string | string[]; };
}

@Injectable({
    providedIn: ShoesApiModule
})
export class ShoesApiBaseService {

    private constructor(
        private httpClient: HttpClient,
        @Optional() private apiConfigProvider: ShoesApiConfigProviderBase
    ) {
        if (!this.apiConfigProvider) {
            throw Error("Não foi fornecida uma implementação para ShoesApiConfigProvider");
        }
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
        return this.apiConfigProvider.getApiConfig()
        .pipe(
            mergeMap(apiConfig => {
                const fullUrl = `${apiConfig.baseUrl}/${url}`;
                const mergedOptions = this.mergeOptions(options, apiConfig);
                return this.httpClient.get(fullUrl, mergedOptions);
            }) 
        )
    }

}