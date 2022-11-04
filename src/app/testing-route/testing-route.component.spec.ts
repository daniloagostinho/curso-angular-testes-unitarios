import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TestingRouteComponent } from './testing-route.component';

describe('TestingRouteComponent', () => {
  let component: TestingRouteComponent;
  let fixture: ComponentFixture<TestingRouteComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve navegar para url passada', () => {
    let route = 'dashboad'
    spyOn(router, 'navigate')

    component.navigateUrl(route)

    expect(router.navigate).toHaveBeenCalledWith(['/dashboad'])
  })
});
