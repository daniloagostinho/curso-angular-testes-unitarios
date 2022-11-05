import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FixProblemsService } from './fix-problems.service';

describe('FixProblemsService', () => {
  let service: FixProblemsService;
  let htppTestingController: HttpTestingController;
  let url: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FixProblemsService);
    htppTestingController = TestBed.inject(HttpTestingController)
    url = 'http://localhost:3000'
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

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

});
