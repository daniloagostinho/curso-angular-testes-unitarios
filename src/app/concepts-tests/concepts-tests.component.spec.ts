import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ConceptsTestsComponent } from './concepts-tests.component';
describe('ConceptsTestsComponent', () => {

  let name: string;
  let component: ConceptsTestsComponent;
  let fixture: ComponentFixture<ConceptsTestsComponent>
  beforeEach(() => {
    console.log('before -->> ')
    name = 'Danilo'

    TestBed.configureTestingModule({
      declarations: [ConceptsTestsComponent],
    }).compileComponents()


    fixture = TestBed.createComponent(ConceptsTestsComponent)
    component = fixture.componentInstance
    fixture.detectChanges();
  })

  afterEach(() => {
    console.log('after -->> ')

    localStorage.removeItem('token')
  })

  beforeAll(() => {
    localStorage.setItem('token', 'uashduhashduas')
  })

  it('Deve ter um h1 na pagina', () => {
    localStorage.setItem('token', '8aud8us8ud8sau')
    expect(name).toContain('Danilo')
  })

  it('Deve ter um botão na pagina', () => {
    expect(name).toContain('Danilo')
  })

  it('Deve ter um botão na pagina', () => {
    expect(name).toContain('Danilo')

  })

})
