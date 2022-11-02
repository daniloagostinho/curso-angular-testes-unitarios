import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComponent } from './request.component';

import {HttpClientTestingModule} from '@angular/common/http/testing'

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ RequestComponent ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
