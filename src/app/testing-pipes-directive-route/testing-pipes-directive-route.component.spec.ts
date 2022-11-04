import { HttpPipe } from './../http.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingPipesDirectiveRouteComponent } from './testing-pipes-directive-route.component';

describe('TestingPipesDirectiveRouteComponent', () => {
  let component: TestingPipesDirectiveRouteComponent;
  let fixture: ComponentFixture<TestingPipesDirectiveRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingPipesDirectiveRouteComponent, HttpPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingPipesDirectiveRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
