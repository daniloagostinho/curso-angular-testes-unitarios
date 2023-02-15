import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropdownComponent } from './menu-dropdown.component';

describe('MenuDropdownComponent', () => {
  let component: MenuDropdownComponent;
  let fixture: ComponentFixture<MenuDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve exibir o texto "Menu" no botão quando carregado', () => {
    const button = fixture.nativeElement.querySelector('.dropdown-toggle');
    component.label = 'Menu';
    fixture.detectChanges();
    expect(button.textContent.trim()).toBe('Menu');
  })

  it('Deve abrir menu quando clicar no botão', () => {
    const button = fixture.nativeElement.querySelector('.dropdown-toggle');
    button.click();
    fixture.detectChanges();

    const menu = fixture.nativeElement.querySelector('.dropdown-menu');
    expect(menu.classList.contains('show')).toBeTrue();
  })

  it('Deve exibir os items do menu corretameente', () => {
    component.items = [
      {label: 'Item 1', value: 'item-1'},
      {label: 'Item 2', value: 'item-2'},
      {label: 'Item 3', value: 'item-2'},
    ]

    const button = fixture.nativeElement.querySelector('.dropdown-toggle')
    button.click();
    fixture.detectChanges();

    const menuItens = fixture.nativeElement.querySelectorAll('.dropdown-item');
    expect(menuItens[0].textContent.trim()).toBe('Item 1')
    expect(menuItens[1].textContent.trim()).toBe('Item 2')
    expect(menuItens[2].textContent.trim()).toBe('Item 3')
  })


  it('Deve aciionar o evento "selected" com o valor correto ap selecionar um item do menu', () => {
    component.items = [
      {label: 'Item 1', value: 'item-1'},
      {label: 'Item 2', value: 'item-2'},
      {label: 'Item 3', value: 'item-2'},
    ]

    fixture.detectChanges();

    const spy = spyOn(component.selected, 'emit');
    const menuItens = fixture.nativeElement.querySelectorAll('.dropdown-item');
    const item = component.items[0];
    menuItens[0].click();
    expect(spy).toHaveBeenCalledWith(item.value)

  })
});
