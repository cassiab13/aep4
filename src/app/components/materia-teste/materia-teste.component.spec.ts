import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaTesteComponent } from './materia-teste.component';

describe('MateriaTesteComponent', () => {
  let component: MateriaTesteComponent;
  let fixture: ComponentFixture<MateriaTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
