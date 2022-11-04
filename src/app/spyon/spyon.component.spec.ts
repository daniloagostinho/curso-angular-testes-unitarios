import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyonComponent } from './spyon.component';

describe('SpyonComponent', () => {
  let component: SpyonComponent;
  let fixture: ComponentFixture<SpyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpyonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve logar usuario no sistema ao clicar no botão', () => {
    let spiedComponent = spyOn(component, 'isLogged').and.callThrough()

    component.isLogged()

    expect(spiedComponent).toHaveBeenCalledTimes(1)
    expect(component.logged).toBe(true)
  })

});
