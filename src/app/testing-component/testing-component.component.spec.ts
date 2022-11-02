import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestingComponentComponent } from './testing-component.component';

describe('TestingComponentComponent', () => {
  let component: TestingComponentComponent;
  let fixture: ComponentFixture<TestingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve acessar elemento na DOM com debugElement.query()', () => {
    let title = fixture.debugElement.query(By.css('h1')).nativeElement

    expect(title.textContent).toBe('Trabalhando com debugElement.query() e nativeElement.querySelector()')
  })

  it('Dece acessar elemento na DOM com nativeElement.querySelector()', () => {
    let paragrah = fixture.debugElement.nativeElement.querySelector('p')

    expect(paragrah.textContent).toBe('esta aprendendo com curso de testes unitarios?')
  })

  it('Deve ter background-color green botão sim', () => {
    let btnYes = fixture.debugElement.query(By.css('.btn-yes')).nativeElement

    expect(btnYes.style.backgroundColor).toBe('green')
  })

  it('Deve ter background-color red botão não', () => {
    let btnNo = fixture.debugElement.query(By.css('.btn-no')).nativeElement

    expect(btnNo.style.backgroundColor).toBe('red')
  })

});
