import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let htppTestingController: HttpTestingController;
  let url: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpService);
    htppTestingController = TestBed.inject(HttpTestingController)
    url = 'http://localhost:3000'
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Deve realizar login', () => {
    const response = [
      {
        "id": 1,
        "name": "Danilo",
        "email": "danilo@gmail.com",
        "age": 30
      }
    ];
    const user = {
      "name": "Danilo",
      "email": "danilo@gmail.com",
      "age": 30
    }
    service.login(user).subscribe()
    const request = htppTestingController.expectOne(`${url}/login`)
    service.login(user).subscribe(res => {
      expect(res).toBe(response)
    })

    expect(request.request.method).toBe('POST')
    expect(request.request.url).toBe(`${url}/login`)
    request.flush(response)

  })
  it('Deve realizar chamada GET por id', () => {
    const id = 3;
    const response = {name: 'Danilo', email: 'danilo@gmail.com', age: 30}

    service.getUsersById(id).subscribe(res => {
      expect(res).toBe(response)
    })
    const request = htppTestingController.expectOne(`${url}/users/${id}`)

    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${url}/users/${id}`)

    request.flush(response)

  })

  it('Deve realizar chamada GET para obter usuarios', () => {
    const response = [
      {
        "id": 1,
        "name": "Carlos",
        "email": "carlos@gmail.com",
        "age": 30
      },
      {
        "id": 2,
        "name": "Julia",
        "email": "julia@gmail.com",
        "age": 18
      },
      {
        "id": 3,
        "name": "Marina",
        "email": "marina@gmail.com",
        "age": 22
      }
    ];
    service.getUsers().subscribe();
    const request = htppTestingController.expectOne(`${url}/users`)
    service.getUsers().subscribe(res => {
      expect(res).toBe(response)
    })

    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${url}/users`)
    request.flush(response)

  })

  it('Deve realizar chamada GET com headers para obter usuarios', () => {
    const response = [
      {
        "id": 1,
        "name": "Carlos",
        "email": "carlos@gmail.com",
        "age": 30
      },
      {
        "id": 2,
        "name": "Julia",
        "email": "julia@gmail.com",
        "age": 18
      },
      {
        "id": 3,
        "name": "Marina",
        "email": "marina@gmail.com",
        "age": 22
      }
    ];
    service.getUsersWithPromise().then(() => {});
    const request = htppTestingController.expectOne(`${url}/users`)
    service.getUsersWithPromise().then(res => {
      expect(res).toBe(response)
    })

    expect(request.request.method).toBe('GET')
    expect(request.request.url).toBe(`${url}/users`)
    request.flush(response)

  })
  it('Deve retornar que usuario esta autenticado', () => {
    const response = true;
    service.isAuthenticated().then(() => {});
    service.isAuthenticated().then(res => {
      expect(res).toBe(response)
    })

  })
  it('Deve gerar erro ao obter usuarios', () => {
    service.getUsers().subscribe({
      error: (erro) => {
        expect(erro.status).toBe(500)
      }
    });

    const request = htppTestingController.expectOne(`${url}/users`)

    expect(request.request.method).toBe('GET');
    expect(request.request.url).toBe(`${url}/users`)

    request.flush(500, {
      status: 500,
      statusText: 'Ero de Rede'
    })
  })

  it('Deve fazer requisição POST para cadastrar usuario', () => {
    const user = {"id":0.18013741332928745,"name":"Neide","email":"neide@gmail.com","age":"40"};
    const response = {
      "id": 0.18013741332928745,
      "name": "Neide",
      "email": "neide@gmail.com",
      "age": "40"
    }
    service.postUser(user).subscribe(res => {
      expect(res).toBe(response)
    })

    const request = htppTestingController.expectOne(`${url}/users`)
    expect(request.request.method).toBe('POST')
    request.flush(response)
  })

  it('Deve atualizar usuario PUT', () => {
    const id = 1;
    const user = {"name":"Rafeal","email":"rafael@gmail.com","age":"22"}
    const response = {"name":"Rafeal","email":"rafael@gmail.com","age":"22"}

    service.putUser(id, user).subscribe(res => {
      expect(res).toBe(response)
    })

    const request = htppTestingController.expectOne(`${url}/users/${id}`)
    expect(request.request.method).toBe('PUT')
    expect(request.request.url).toBe(`${url}/users/${id}`)


    request.flush(response)

  })

  it('Deve excluir usuário DELETE', () => {
    const id = 2;
    const response = {};
    service.deleteUser(id).subscribe(res => {
      expect(res).toBe(response)
    })
    const request = htppTestingController.expectOne(`${url}/users/${id}`)

    expect(request.request.method).toBe('DELETE')

    expect(request.request.url).toBe(`${url}/users/${id}`)

    request.flush(response)

  })

  it('Deve conter headers na requisição', () => {
    service.getUserWithHeaders().subscribe();
    const request = htppTestingController.expectOne(`${url}/users`)

    expect(request.request.headers.has('content-type')).toEqual(true)
    expect(request.request.headers.has('Authorization')).toEqual(true)
  })



});
