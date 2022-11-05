import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFormComponent } from './fill-form.component';
import { By } from '@angular/platform-browser';

describe('FillFormComponent', () => {
  let component: FillFormComponent;
  let fixture: ComponentFixture<FillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillFormComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve prencher campos do formulario', () => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement
    input.value = 'Danilo'
    input.dispatchEvent(new Event('input'))


    expect(input.value).toBe('Danilo')
  })

  it('Deve preencher formulário', () => {
    component.name = 'Danilo'
    component.fillForm()

    fixture.detectChanges();

    expect(component.form.controls['name'].value).toBeDefined();
  })

});
