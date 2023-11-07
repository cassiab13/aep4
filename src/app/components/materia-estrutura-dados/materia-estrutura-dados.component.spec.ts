import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaEstruturaDadosComponent } from './materia-estrutura-dados.component';

describe('MateriaEstruturaDadosComponent', () => {
  let component: MateriaEstruturaDadosComponent;
  let fixture: ComponentFixture<MateriaEstruturaDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaEstruturaDadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaEstruturaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
