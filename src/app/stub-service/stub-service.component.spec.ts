import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubServiceComponent } from './stub-service.component';

describe('StubServiceComponent', () => {
  let component: StubServiceComponent;
  let fixture: ComponentFixture<StubServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StubServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
