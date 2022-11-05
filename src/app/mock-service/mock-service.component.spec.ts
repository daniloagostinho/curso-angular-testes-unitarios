import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockServiceComponent } from './mock-service.component';

describe('MockServiceComponent', () => {
  let component: MockServiceComponent;
  let fixture: ComponentFixture<MockServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockServiceComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Deve chamar getUsers", () => {
    let spiedComponent  = spyOn(component, 'getUsers').and.callThrough()
    component.getUsers()

    expect(spiedComponent).toHaveBeenCalledTimes(1)
  })
});
