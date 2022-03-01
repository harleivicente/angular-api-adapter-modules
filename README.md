# AngularApiAdapterSharing

Esse projeto demonstra uma arquitetura para modularizar adapatadores de API em libs (podem ser facilmente criadas usando o cli do angular como descrito aqui https://angular.io/guide/creating-libraries) dentro de um workspace do Angular. As principais vantagens dessa estratégia:

1. Permite que esse mesmo adaptador seja utilizado por várias aplicações diferentes ou diferentes partes de uma mesma aplicação de uma forma isolada (usando uma configuração de headers diferente por exemplo).
2. Por não fazer uso de HTTP_ADAPTERS essa estratégia permite um maior isolamente e controle do comportamento da aplicação.
3. Diminui o  tamanha e escopo das aplicações principais, tornando-as mais fácies de manter.

## Estrutura básica do adaptador

O diagrama abaixo demonstra as principais partes de um adaptador

![Diagrama de Api Adater](https://github.com/harleivicente/angular-api-adapter-modules/blob/main/images/HttpAdapter%20Library.png?raw=true)

**ApiRestService**
Esse serviço basicamente injeta o client padrão do Angular bem como ApiConfigProvider do qual obtem as configurações da API. The clase de configuração deve ser disponibilizada pela aplicação que fará uso do módulo. Esse serviço [ApiRestService] basicamente adiciona uma fina camada de lógica aos métodos disponíveis no HttpClient, como por exemplo get, post, put, patch, delete. Ao implementar os serviços devemos usar essa clase em vez de fazer uso da HttpClient diretamente.

**Serviços de API**
Podemos criar uma classe para cada grupo de endpoints onde cada método representa um endpoint específico. Podemos caso necessário, agrupar uma série de serviços de um domínio relacionado em um SubModulo que é importado pelo módulo principal do adaptador.


## Como fazer o uso de um adaptador de api

1. Nessa proposta supõe-se que as aplicações que irão consumir o adaptador bem os adaptadores estão em único repositório em um mesmo workspace angular. Além disso, supõe-se que a lib seja criada fazendo o uso do [angular cli](https://angular.io/cli) com o comando: "ng generate library some-api-adapter".
1. Por ser uma lib Angular é necessário que seja construida, usando o comando "ng build some-api-adapter".
1. Em segundo lugar é necessário que na aplicação onde seja necessário (isso pode ser tanto no módulo principal da aplicação ou em algum sub-módulo específico) o módulo seja importado.

```
...
import { ShoesApiModule } from 'shoes-api';
...

@NgModule({
  imports: [
    ...
    ShoesApiModule,
    ...
  ],
  providers: [
    ...
  ]
})
export class ShoesModule {}
```
4. Em seguida, é necessário fornecer as configurações que a API precisa através de um provider para **ShoesApiConfigProviderBase**. Para isso devemos criar um **@Injectable** que implemente a classe **ShoesApiConfigProviderBase** e disponibiliza-lá na propriedade provider no mesmo módulo onde foi feito o import no passo anterior.
```
...
import { ShoesApiModule, ShoesApiConfigProviderBase, ShoeApiConfig } from 'shoes-api';
import { ShoesApiConfig } from './api-config/shoes-api-config.service';
...
@NgModule({
  imports: [
    CommonModule,
    ShoesApiModule,
    ShoesRoutingModule
  ],
  providers: [
      { provide: ShoesApiConfigProviderBase, useClass: ShoesApiConfig }
  ]
})
export class ShoesModule {}
```
5. A clase que devemos implementar é bem simples e precisa apenas de um método getApiConfig. Ao definir esse método com um retorno asyncrono isso nos permite maior flexibilidade e podemos, por exemplo, obter essa informação de forma dinâmica chamando algum outro endpoint.
```
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { ShoesApiConfigProviderBase, ShoeApiConfig } from "shoes-api";

@Injectable()
  export class ShoesApiConfig extends ShoesApiConfigProviderBase {
  
    getApiConfig(): Observable<ShoeApiConfig> {
      return of({
        baseUrl: 'https://api.baseurl.com',
        authToken: TOKEN
      })
    }
  
  }
  
```


