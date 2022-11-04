import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { MyServiceService } from './my-service.service';

class MyServiceMock extends MyServiceService {
  response = [
    {
      "name": "Danilo 2",

      "email": "danilo@gmail.com",
      "age": "30",
      "id": 1
    },
    {
      "id": 3,
      "name": "Joao",
      "email": "joao@gmail.com",
      "age": 22
    },
    {
      "id": 4,
      "name": "Joao",
      "email": "joao@gmail.com",
      "age": 22
    },
    {
      "id": 0.8230837961873159,
      "name": "Danilo ",
      "email": "danilo@gmail.com",
      "age": "30"
    }
  ];
  override getUsers() {
    return of(this.response)
  }

}

describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: MyServiceService,
          useClass: MyServiceMock
        }
      ]
    });
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada HTTP', () => {
    const response = [
      {
        "name": "Danilo 2",
        "email": "danilo@gmail.com",
        "age": "30",
        "id": 1
      },
      {
        "id": 3,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 4,
        "name": "Joao",
        "email": "joao@gmail.com",
        "age": 22
      },
      {
        "id": 0.8230837961873159,
        "name": "Danilo ",
        "email": "danilo@gmail.com",
        "age": "30"
      }
    ];
    service.getUsers().subscribe(res => {
      expect(res).toEqual(response)
    })
  })

});
