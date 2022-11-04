import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HttpService } from '../service/http.service';

import { FormLoginComponent } from './form-login.component';

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;
  let service: HttpService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoginComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(HttpService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve retornar que formulario é invalido', () => {
    const result = component.isValidForm()

    expect(result).toBe(false)
  })

  it('Deve retornar que formulario é valido', () => {
    component.form.controls['email'].setValue('danilodev.silva@gmail.com')
    component.form.controls['password'].setValue('shaduhsad')

    const result = component.isValidForm()


    expect(result).toBe(true)
  })

  it('Deve estar desabilitado o botão quando formulario for invalido', () => {
    const button = fixture.debugElement

    expect(button.nativeElement.querySelector('.btn-login').disabled).toBeTrue();

  })


  it('Deve estar habiltar o botão quando formulario for valido', () => {
    component.form.controls['email'].setValue('danilo@gmail.com')
    component.form.controls['password'].setValue('091011')

    const button = fixture.debugElement
    fixture.detectChanges()
    expect(button.nativeElement.querySelector('.btn-login').disabled).toBeFalse()
  })


  it('Deve retornar o valor de um controle de formulario', () => {
    component.form = new FormGroup({
      email: new FormControl('danilodev.silva@gmail.com'),
      password: new FormControl('091011'),
    })

    expect(component.getValueControl(component.form, 'email')).toEqual('danilodev.silva@gmail.com')
  })

  it('Deve criar payload para submeter para api', () => {
    const payload = {
      email: 'danilo@gmail.com',
      password: '091011'
    }
    expect(component.createPayload('danilo@gmail.com', '091011')).toEqual(payload)
  })

  it("Deve realizar login", () => {
    component.form = new FormGroup({
      email: new FormControl('Danilo'),
      password: new FormControl('091011'),
    })
    let response = {
      "email": "danilodev.silva@gmail.com",
      "password": "09101",
      "id": 1
    }
    let spiedService  = spyOn(service, 'login').and.returnValue(of(response))
    component.isValidForm();
    component.login()

    expect(spiedService).toHaveBeenCalledTimes(1)
  })
});
