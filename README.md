# Projeto do curso de Testes Unitários com Angular / Jasmine e Karma. 

### Clonando e configurando
 Abra o prompt de comando e cole o código abaixo:
 
 ```
 git clone git@github.com:daniloagostinho/curso-angular-testes-unitarios.git
```

Entre na pasta do projeto

```
 cd curso-angular-testes-unitarios
```

e instale as dependências

```
 npm i
```

### Rodando a api
Parar iniciar o servidor com a aplicação funcionando digite o comando abaixo:

```
 ng serve
```

a aplicação estara disponível no endereço:

```
 localhost:4200
```

**Grade curricular**

## Seção 1
### Introdução ao curso
 - Introdução;
 - Apresentação do curso;
 - Como aproveitar aproveitar o máximo do curso.
 
 ## Seção 2
 ### Testes unitários no Angular;
 - A importancia do Teste de Software;
 - O que é Jasmine e Karma;
 - O que testar em uma aplicação Angular;
- Teste de integração x Teste de Unidade;
- Cobertura de Testes (code coverage).
 
 ## Seção 3
### Conceito de uma suíte de testes no Angular
- Suíte de testes - describe;
- Especificações de estes - it;
- Antes de cada teste - beforeEach;
- Após cada teste - afterEach;
- Antes de todos - beforeAll;
- Configurando os módulos dos testes- TestBeb.

 ## Seção 4
 ### Criando o projeto com Angular CLI
 - Instalação do Nodejs;
 - Instalando o Angular CLI;
 - Instalando o Visual Studio Code;
 - Criando o projeto com Angular CLI;
 - Rodando a aplicação no navegador;
 - Executando os testes.

## Seção 5
### Resolvendo problemas comuns em uma aplicação
- Erro ao trabalhar com requisições - No provider for HttpClient;
- Erro modal Angular material - No provider for MatDialog;
- Erro ao trabalhar com formularios - No provider for FormBuilder;
- Erro ao trabalhar com ngModel - No provider for NgControl found in NodeInjector.

## Seção 6
### Debugando os testes
- Focando em um único teste - fdescribe;
- Focando em uma única especificação - fit;
- Rodando os testes de um único arquivo - ng test --include;
- Adicionando breakpoints;
- Utilizando debugger;
- Contexto de Debugger do Jasmine.

## Seção 7
### Testando expectativas - Jasmine Matchers
- Verificando se os valores são iguais - toEqual;
- Verificando se os valores são iguais e do mesmo objeto - toBe;
- Testando se um valor é truthy - toBeTruthy;
- Testando se um valor é falsy - toBeFalsy;
- Verificando se um valor é true - toBeTrue;
- Verificando se um valor é falso -  toBeFalse;
- Testando se um valor não é true - not;
- Verificando se um valor esta contido em um array ou string - toContain;
- Verificando se um valor foi definido - toBeDefined;
- Verificando se um valor não foi definido - toBeUndefined;
- Testando se um valor é nulo - toBeNull;
- Testando se um valor é NaN  - toBeNaN;
- Verificando se um valor é maior do que outro - toBeGreatherThan;
- Testando se um valor é menor do que outro - toBeLessThan;
- Verificando se um numero está próximo a outro - toBeCloseTo;
- Testando se um valor é igual com base em uma expressão regular - toMatch;
- Verificando se uma funcão lançou um erro - toThrow.

## Seção 8
### Mockando métodos de componentes e serviços
- Mockando métodos de serviço com Mocks;
- Mockando métodos de serviços com Stubs;
- Espionando métodos de componentes com spyOn;
- Espionando métodos de serviços com spyOn;
- Criando objetos com createSpy;
- Mockando métodos com createSpyObj.

## Seção 9
### Testando chamadas HTTP
- Testando requisição GET por ID;
- Testando requisição GET;
- Testando erro na requisição;
- Testando requisição POST;
- Testando requisição PUT;
- Testando requisição DELETE;
- Testando se headers foram passados na requisição.

## Seção 10
### Testando código Assíncrono
- Testando subscribe;
- Testando promises;
- Utilizando done função;
- Async e WhenStable;
- FakeAsync e Tick.

## Seção 11
### Testando componentes
- Acessando a DOM com debugElement.query() e nativeElement.querySelector();
- Detecção de alterações manual - fixture.detectChanges();
- Detecção automática de alterações;
- Disparando click no botão com triggerEventHandler;
- Preenchendo formulários disparando evento Input;
- Testando Entradas e Saídas - @Input e @Output.

## Seção 12
### Testando Pipes, Guardas de Rotas, Rotas e Directivas
- Testando pipes;
- Testando guarda de rota;
- Testando rotas;
- Testando diretivas.

## Seção 13
### Testando formulários
- Testando se formulário é inválido;
- Testando se formulário é válido;
- Testando se o botão está desabilitado quando formulário for inválido;
- Testando se um botão está habilitado quando formulário for válido;
- Criando método para retornar um campo do formulário;
- Criando método para criar dados (payload) para submeter pro servidor;
- Submetendo dados do formulário.

## Seção 14
### Conclusão
- Apresentação final.

Este curso pode ser adquirido clicando [aqui](https://www.udemy.com/course/testes-unitarios-com-angular-14-jasmine-e-karma/?referralCode=8827BDAD28D3B528137A).
