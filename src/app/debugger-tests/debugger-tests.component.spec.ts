import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuggerTestsComponent } from './debugger-tests.component';

describe('DebuggerTestsComponent', () => {
  let component: DebuggerTestsComponent;
  let fixture: ComponentFixture<DebuggerTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebuggerTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebuggerTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    debugger;
    let data = {name: 'Danilo'}
    expect(component).toBeTruthy();
  });
});
