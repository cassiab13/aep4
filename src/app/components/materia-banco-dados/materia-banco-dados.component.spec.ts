import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaBancoDadosComponent } from './materia-banco-dados.component';

describe('MateriaBancoDadosComponent', () => {
  let component: MateriaBancoDadosComponent;
  let fixture: ComponentFixture<MateriaBancoDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaBancoDadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaBancoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
