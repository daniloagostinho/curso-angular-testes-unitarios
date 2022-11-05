import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let router: Router;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Deve navegar para url passada', () => {
    let route = 'dashboad'
    spyOn(router, 'navigate')

    component.goTo(route)

    expect(router.navigate).toHaveBeenCalledWith(['/dashboad'])
  })

  it('Deve definir valor para user', () => {
    component.ngOnInit()

    expect(component.user).toBeDefined();
  })

  it("Deve listar usuario por id getUsersById", () => {
    let spiedComponent  = spyOn(component, 'getUserMessage').and.callThrough()
    component.getUserMessage('Enviando mensagem')

    expect(spiedComponent).toHaveBeenCalledTimes(1)
  })
});
