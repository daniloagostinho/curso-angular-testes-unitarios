import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { GuardGuard } from './guard.guard';

describe('GuardGuard', () => {
  let guard: GuardGuard;
  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/login'};
  let routerMock = {navigate: jasmine.createSpy('navigate')}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        { provide: Router, useValue: routerMock }
      ],
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(GuardGuard);
    localStorage.removeItem('token')
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('Deve redirecionar usuario para pagina de login quando não tiver logado', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false)
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login'])
  })

  it('Deve conceder acesso quando usuario tiver token', () => {
    const token = 'iasidasdijasdhas';
    localStorage.setItem('token', token)

    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true)
  })
});
