import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverFocusDirective } from '../hover-focus.directive';

import { TestingDirectiveComponent } from './testing-directive.component';

describe('TestingDirectiveComponent', () => {
  let component: TestingDirectiveComponent;
  let fixture: ComponentFixture<TestingDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingDirectiveComponent,
      HoverFocusDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve alterar background quando passar o mouse sobre o title', () => {
    const title = fixture.debugElement.query(By.css('h1'))

    title.triggerEventHandler('mouseover', null)
    fixture.detectChanges();
    expect(title.nativeElement.style.backgroundColor).toBe('blue')



    title.triggerEventHandler('mouseout', null)
    fixture.detectChanges();
    expect(title.nativeElement.style.backgroundColor).toBe('inherit')
  })

});
